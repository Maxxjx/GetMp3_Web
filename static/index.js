
var dropZone = document.getElementById('drop_zone');

		// Prevent default drag behaviors
		dropZone.addEventListener('dragover', function(event) {
			event.preventDefault();
			event.stopPropagation();
		});

		dropZone.addEventListener('drop', function(event) {
			event.preventDefault();
			event.stopPropagation();

			// Get file data
			var file = event.dataTransfer.files[0];

			// Send file to server using AJAX
			var xhr = new XMLHttpRequest();
			var formData = new FormData();

			formData.append('video', file);

			xhr.open('POST', '/upload');
			xhr.send(formData);

			// Do something after file has been uploaded
			xhr.onreadystatechange = function() {
				if (xhr.readyState === XMLHttpRequest.DONE) {
					console.log(xhr.responseText);
				}
			};
		});

    function submitForm() {
      document.getElementById('myForm').submit();
    }