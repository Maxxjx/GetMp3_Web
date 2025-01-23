# Flask Audio Extractor

This project is a Flask web application that allows users to upload video files and extract audio from them. The extracted audio is then made available for download in MP3 format.

## Project Structure

```
flask-audio-extractor
├── app.py                # Main application file with Flask routes and audio extraction logic
├── requirements.txt      # Lists the dependencies required for the project
├── static                # Directory for static files (currently empty)
├── templates             # Directory for HTML templates
│   └── index.html       # HTML template for the home page
├── uploads               # Directory for temporarily storing uploaded video files (currently empty)
└── README.md             # Documentation for the project
```

## Requirements

To run this application, you need to have Python installed along with the following packages:

- Flask
- MoviePy

You can install the required packages using pip. First, create a virtual environment (optional but recommended):

```
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

Then, install the dependencies:

```
pip install -r requirements.txt
```

## Running the Application

To start the Flask application, run the following command:

```
python app.py
```

The application will be accessible at `http://127.0.0.1:5000/`.

## Usage

1. Navigate to the home page.
2. Upload a video file.
3. The application will extract the audio and provide a link to download the audio file in MP3 format.

## License

This project is open-source and available under the MIT License.