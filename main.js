// Handle image upload and update
function uploadImage(element) {
    const input = document.getElementById('fileInput');
    input.click();
    input.onchange = function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                element.querySelector('img').src = e.target.result;
                element.classList.add('highlight');
            };
            reader.readAsDataURL(file);
        }
    };
}

// Highlight the selected image
document.querySelectorAll('.image-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.image-item').forEach(i => i.classList.remove('highlight'));
        item.classList.add('highlight');
    });
});

// Trigger the file input click event
function triggerUpload(element) {
    const fileInput = document.getElementById('fileInput');
    // Store the clicked element to replace its image later
    fileInput.setAttribute('data-target', element); // Store the target element for image replacement
    fileInput.click(); // Trigger the file input to open
}

// Handle the file upload and replace the image
function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    // Read the uploaded file as a data URL (base64)
    reader.onload = function(e) {
        // Get the element that triggered the upload
        const targetElement = document.getElementById('fileInput').getAttribute('data-target');
        const imageElement = targetElement.querySelector('img');
        // Replace the image with the newly uploaded one
        imageElement.src = e.target.result;
    };

    // Read the file content
    if (file) {
        reader.readAsDataURL(file);
    }
}


