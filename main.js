const enableCamera = async () => {
    try {
        const video = document.getElementById('camera-stream');
        // Access the camera steam
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;    
    } catch (error) {
        console.error('Error accessing the camera:', error);
    }
};
window.onload = enableCamera;