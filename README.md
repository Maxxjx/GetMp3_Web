## Logo

![GetMp3 Logo](path/to/logo.png)

# GetMp3

A Flask web application that extracts audio from video files and provides instant MP3 downloads, featuring drag-and-drop support and progress tracking.

## Features

- Drag and drop video file upload
- Real-time progress tracking during upload and processing
- Secure temporary file handling (no permanent storage on server)
- Instant MP3 download with filename based on original video
- Mobile-responsive design
- CORS support for API access
- User-friendly interface

## 📸 Screenshots

| Home Page |  Download Page |
|:---------:|:----------:|
| ![Home Page](Asset/screenshots/home.png) | ![About Page](Asset/screenshots/about.png) |


## Project Structure

```
GetMp3/
├── __pycache__/               # Python cache directory
│   └── app.cpython-310.pyc
├── app.py                    # Flask application with audio extraction logic
├── index.html                # Main HTML template
├── README.md                 # This file - project documentation
├── requirements.txt          # Python dependencies
├── robots.txt                # Search engine crawl rules
├── static/                   # Static assets
│   ├── backcover.jpeg        # Background image
│   ├── index.css             # CSS styles
│   ├── index.js              # JavaScript logic
│   └── photo.jpg             # Another image asset
└── uploads/                  # Directory for temporarily storing uploaded files (cleared after processing)
```

## Requirements

- Python 3.6+
- Flask==2.0.3
- moviepy==1.0.3
- Werkzeug==2.0.3
- Flask-Cors==3.0.10
- python-dotenv==1.0.0

## Installation

1.  Clone the repository:

    ```bash
    git clone [repository_url]
    cd GetMp3
    ```

2.  Create a virtual environment:

    ```bash
    python -m venv venv
    ```

3.  Activate the virtual environment:

    -   On Linux/macOS:

        ```bash
        source venv/bin/activate
        ```

    -   On Windows:

        ```bash
        .\venv\Scripts\activate
        ```

4.  Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

## Usage

1.  Run the Flask application:

    ```bash
    python app.py
    ```

2.  Open your web browser and go to `http://127.0.0.1:5000/`

3.  Drag and drop a video file into the designated area, or use the file input to select a video.

4.  Wait for the upload and processing to complete. A progress bar will indicate the progress.

5.  Once processing is finished, the "Download" button will be enabled. Click it to download the extracted MP3 audio file.  The filename will be based on the original video's filename.

## Notes

-   The application uses temporary file storage for processing, ensuring no files are permanently stored on the server.
-   CORS is enabled to allow requests from different origins.
-   The [robots.txt](http://_vscodecontentref_/8) file disallows crawling of the [uploads](http://_vscodecontentref_/9) directory.

## License

This project is open-source and available under the MIT License.
