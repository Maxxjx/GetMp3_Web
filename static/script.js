const dropArea = document.getElementById("drop-area")
const fileInput = document.getElementById("file-input")
const progressContainer = document.getElementById("progress-container")
const progressBar = document.getElementById("progress-bar")
const progressText = document.getElementById("progress-text")
const errorMessage = document.getElementById("error-message")
const downloadBtn = document.getElementById("download-btn")

// ... other functions like handleDrop, updateProgress, simulateConversion, etc.

let file = null

// Prevent default drag behaviors
;["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, preventDefaults, false)
  document.body.addEventListener(eventName, preventDefaults, false)
})

// Highlight drop area when item is dragged over it
;["dragenter", "dragover"].forEach((eventName) => {
  dropArea.addEventListener(eventName, highlight, false)
})
;["dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, unhighlight, false)
})

// Handle dropped files
dropArea.addEventListener("drop", handleDrop, false)

// Handle selected files
fileInput.addEventListener("change", handleFiles, false)

downloadBtn.addEventListener("click", handleDownload, false)

function preventDefaults(e) {
  e.preventDefault()
  e.stopPropagation()
}

function highlight() {
  dropArea.classList.add("highlight")
}

function unhighlight() {
  dropArea.classList.remove("highlight")
}

function handleDrop(e) {
  const dt = e.dataTransfer
  const files = dt.files
  handleFiles(files)
}

function handleFiles(event) {
  const files = event instanceof FileList ? event : event.target.files;
  if (files && files.length > 0) {
    uploadFile(files[0])
  }
}

function uploadFile(uploadedFile) {
  // Assign the uploaded file to the global "file" variable
  file = uploadedFile

  if (!uploadedFile.type.startsWith("video/")) {
    showError("Please upload a video file.")
    return
  }

  progressContainer.hidden = false
  errorMessage.hidden = true

  // Simulate file upload
  let progress = 0
  const interval = setInterval(() => {
    progress += 10
    updateProgress(progress, "Uploading")

    if (progress >= 100) {
      clearInterval(interval)
      simulateConversion()
    }
  }, 500)
}

function simulateConversion() {
  let progress = 0
  const interval = setInterval(() => {
    progress += 10
    updateProgress(progress, "Converting")

    if (progress >= 100) {
      clearInterval(interval)
      downloadBtn.disabled = false
    }
  }, 500)
}

function updateProgress(value, action) {
  progressBar.style.width = `${value}%`
  progressText.textContent = `${action}: ${value}%`
}

function showError(message) {
  errorMessage.textContent = message
  errorMessage.hidden = false
}

function handleDownload() {
  // Generate the audio filename from the video's file name
  let videoFileName = file ? file.name : "extracted_audio.mp3"
  let baseName = videoFileName.lastIndexOf('.') > 0 ? videoFileName.substring(0, videoFileName.lastIndexOf('.')) : videoFileName
  let audioFileName ="GetMp3_"+ baseName + ".mp3"

  // Simulate download (in a real app, you'd generate and provide the audio file)
  const link = document.createElement("a")
  link.href = URL.createObjectURL(new Blob(["Simulated audio content"], { type: "audio/mpeg" }))
  link.download = audioFileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// source venv/bin/activate