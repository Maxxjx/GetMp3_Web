document.addEventListener('DOMContentLoaded', () => {
  // Disable the download button until processing is complete.
  const downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.disabled = true;

  // When a file is chosen, enable the upload (or “Process”) operation.
  const fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', (event) => {
    if (event.target.files.length > 0) {
      // Update layout when file is selected
      document.querySelector('.intro').style.display = 'none'; // Hide intro text
      document.querySelector('.drop-box').style.padding = '0.5rem'; // Reduce padding
      document.getElementById('drop_zone').style.padding = '1rem'; // Reduce drop zone size
      
      // Reset progress
      document.getElementById('progressBar').style.width = '0%';
      document.getElementById('progressText').innerText = '0%';
      downloadBtn.disabled = true;
      
      // Show progress container
      document.getElementById('progressContainer').classList.remove('hidden');
      
      // Auto-submit the form
      submitForm();
    }
  });

  // downloadBtn.addEventListener('click', submitForm);
});

function submitForm() {
  const form = document.getElementById('myForm');
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.open('POST', form.action, true);
  xhr.responseType = 'blob';

  // Update progress bar during file upload.
  xhr.upload.onprogress = function(event) {
    if (event.lengthComputable) {
      const uploadPercent = (event.loaded / event.total) *0; // upload is half of overall progress
      document.getElementById('progressBar').style.width = uploadPercent + '%';
      document.getElementById('progressText').innerText = Math.round(uploadPercent) + '%';
    }
  };

  xhr.onloadstart = function() {
    document.getElementById('progressContainer').classList.remove('hidden');
  };

  // When the upload is finished, simulate processing progress.
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Simulate conversion progress from 50% to 100%.
      let processPercent = 50;
      const timer = setInterval(() => {
        processPercent += 5;
        if (processPercent >= 100) {
          processPercent = 100;
          clearInterval(timer);
          // Enable the download button once processing is done.
          const downloadBtn = document.getElementById('downloadBtn');
          downloadBtn.disabled = false;
          // Set the download URL so clicking will download the file.
          const blob = xhr.response;
          const url = window.URL.createObjectURL(blob);
          // Replace click handler to trigger download via an anchor tag.
          downloadBtn.onclick = () => {
            const a = document.createElement('a');
            a.href = url;
            // Try to extract filename from response headers.
            const disposition = xhr.getResponseHeader('Content-Disposition');
            let fileName = 'download.mp3';
            if (disposition && disposition.indexOf('attachment') !== -1) {
              const fileNameMatch = disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
              if (fileNameMatch != null && fileNameMatch[1]) {
                fileName = fileNameMatch[1].replace(/['"]/g, '');
              }
            }
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
          };
        }
        document.getElementById('progressBar').style.width = processPercent + '%';
        document.getElementById('progressText').innerText = Math.round(processPercent) + '%';
      }, 300);
    } else {
      alert('Error uploading file.');
    }
  };

  xhr.send(formData);
}

function handleDrop(event) {
  event.preventDefault();
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    document.getElementById('fileInput').files = files;
  }
}

function handleDragOver(event) {
  event.preventDefault();
}