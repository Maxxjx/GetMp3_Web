from flask import Flask, request, render_template, send_file, make_response
from flask_cors import CORS, cross_origin
import os
import io
import tempfile
from moviepy.editor import VideoFileClip

app = Flask(__name__, static_folder='static')
CORS(app)  # enable CORS globally

@app.route('/')
def home():
    # Renders the new index.html located in the templates folder
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
@cross_origin()  # ensure this route responds with proper CORS headers
def audio_extract():
    if 'file' not in request.files:
        return "No file part", 400
    f = request.files['file']
    if f.filename == '':
        return "No selected file", 400

    # Save the uploaded video to a temporary file
    with tempfile.NamedTemporaryFile(delete=False, suffix=os.path.splitext(f.filename)[-1]) as tmp_video:
        tmp_video.write(f.read())
        video_path = tmp_video.name

    # Save original filename for later use.
    original_filename = f.filename

    # Create a temporary file name for the audio output
    with tempfile.NamedTemporaryFile(delete=False, suffix='.mp3') as tmp_audio:
        audio_path = tmp_audio.name

    try:
        video = VideoFileClip(video_path)
        audio = video.audio
        audio.write_audiofile(audio_path)
        video.close()
    except Exception as e:
        os.remove(video_path)
        os.remove(audio_path)
        return str(e), 500
    finally:
        # Remove the temporary video file
        os.remove(video_path)

    # Load the generated audio file into memory, then remove it.
    with open(audio_path, "rb") as audio_file:
        audio_data = audio_file.read()
    os.remove(audio_path)
    
    # Generate a download filename based on the original file name.
    download_filename = 'GetMp3_'+os.path.splitext(original_filename)[0] + '.mp3'

    response = send_file(
        io.BytesIO(audio_data),
        as_attachment=True,
        download_name=download_filename,
        mimetype="audio/mpeg"
    )
    response.headers.add("Access-Control-Expose-Headers", "Content-Disposition")
    return response

if __name__ == '__main__':
    app.run(debug=True)