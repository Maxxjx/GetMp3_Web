
var dropZone = document.getElementById('drop_zone');

		// Prevent default drag behaviors
		dropZone.addEventListener('dragover', function(event) {
			event.preventDefault();
			event.stopPropagation();
		});

		// Handle dropped files
		dropZone.addEventListener('drop', function(event) {
			event.preventDefault();
			event.stopPropagation();

			// Get file data
			var files = event.dataTransfer.files;

			// Do something with the file(s)
			console.log(files);
		});

    function submitForm() {
      document.getElementById('myForm').submit();
    }