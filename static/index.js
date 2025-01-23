function submitForm() {
	const form = document.getElementById('myForm');
	const formData = new FormData(form);
	const xhr = new XMLHttpRequest();

	xhr.open('POST', form.action, true);

	xhr.upload.onprogress = function(event) {
		if (event.lengthComputable) {
			const percentComplete = (event.loaded / event.total) * 100;
			document.getElementById('progressBar').style.width = percentComplete + '%';
			document.getElementById('progressText').innerText = Math.round(percentComplete) + '%';
		}
	};

	xhr.onloadstart = function() {
		document.getElementById('progressContainer').classList.remove('hidden');
	};

	xhr.onload = function() {
		if (xhr.status === 200) {
			// Handle successful upload
			alert('File uploaded successfully!');
		} else {
			// Handle error
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