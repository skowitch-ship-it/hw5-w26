var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
video=this.document.querySelector("#player1")
video.autoplay=false;
video.loop=false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
document.querySelector("#volume").textContent = video.volume*100 + "%";
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});
document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate = video.playbackRate*0.9
	console.log("New Playback Rate", video.playbackRate);
	});
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate = video.playbackRate/0.9
	console.log("New Playback Rate", video.playbackRate);
	});
document.querySelector("#skip").addEventListener("click", function() {
		video.currentTime +=10;
		if (video.currentTime >= video.duration) {
			video.currentTime = 0;
		}
		console.log("New Current Time", video.currentTime);
		console.log(video.duration, video.currentTime);

	});
document.querySelector("#mute").addEventListener("click", function() {
				console.log("Mute/Unmute Video");
				if (video.muted) {
					video.muted = false;
					this.textContent = "Mute";
				} else {
					video.muted = true;
					this.textContent = "Unmute";
				}

document.querySelector("#volume").textContent = video.volume*100 + "%";
		
		});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Change volume");
	this.value
		console.log(this.value);
	video.volume = this.value*0.01
	document.querySelector("#volume").textContent = video.volume*100 + "%";


});
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");


});