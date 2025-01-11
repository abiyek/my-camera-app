
// default the camera facing the user 
// tell the browser we don't need audio
var constraints = { 

	video: { facingMode: "user" },
	audio: false

};


// define constants for all the parts we created
const cameraView = document.querySelector("#camera--view"),
	  cameraOutput = document.querySelector("#camera--output"),
	  cameraSensor = document.querySelector("#camera--sensor"),
	  cameraTrigger = document.querySelector("#camera--trigger")


// create a function cameraStart that access the camera and
// stream the video to the camera--view element we created
function cameraStart() {
	
	navigator.mediaDevices
		.getUserMedia(constraints)
		.then(function(stream) {
			track = stream.getTracks()[0];
			cameraView.srcObject = stream;
		}
		
	)
	
	.catch(function(error) {
		console.error("Oops. Something is broken.", error);
	});
	
}


// button to grab a frame from the stream that we'll use
// as our image output. 
cameraTrigger.onclick = function(){
	
	cameraSensor.width = cameraView.videoWidth;
	cameraSensor.height = cameraView.videoHeight;
	
	cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
	
	cameraOutput.src = cameraSensor.toDataURL("image/webp");
	cameraOutput.classList.add("taken");
	
}

// initiate the camera start
window.addEventListener("load", cameraStart, false);










































