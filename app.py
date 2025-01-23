from flask import Flask, request, render_template, send_file
import os
from moviepy.editor import VideoFileClip

app = Flask(__name__, static_folder='static')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def audio_extract():
    if 'file' not in request.files:
        return "No file part", 400
    f = request.files['file']
    if f.filename == '':
        return "No selected file", 400
    filename = f.filename
    filepath = os.path.join('uploads', filename)
    f.save(filepath)
    audio_filename = os.path.splitext(filepath)[0] + '.mp3'
    try:
        video = VideoFileClip(filepath)
        audio = video.audio
        audio.write_audiofile(audio_filename)
        video.close()
    except Exception as e:
        return str(e), 500
    finally:
        os.remove(filepath)
    return send_file(audio_filename, as_attachment=True)

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(debug=True)