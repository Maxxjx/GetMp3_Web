from flask import Flask, request, render_template, send_file
import os
from moviepy.editor import VideoFileClip



app = Flask(__name__, static_folder='static')


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/upload', methods=['POST'])
def audio_extract():
    if request.method == 'POST':
        f = request.files['file']
        filename = f.filename
        f.save(filename)
        audio_filename = os.path.splitext(filename)[0] + '.mp3'
        video = VideoFileClip(filename)
        audio = video.audio
        audio.write_audiofile(audio_filename)
        video.close()
        audio.close()
        os.remove(filename)
        return send_file(audio_filename, as_attachment=True)


if __name__ == '__main__':
    app.run(debug=True)
