function play(e) {
	var sound = document.querySelector(`audio[data-key="${e.keyCode}"]`); /* es6 template literals */
	var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	sound.currentTime = 0;
	sound.play();
	key.classList.add('playing');
}

function removePlayingAnimation(e) {
	this.classList.remove('playing');
}

var allKeys = document.querySelectorAll('.key');
allKeys.forEach(function(key) {
	key.addEventListener('transitionend', removePlayingAnimation);
});

window.addEventListener('keydown', play);