'use strict';

require('./js/jquery-1.7.2.min.js');
require('./js/jquery.valiant360.min.js');

$(document).ready(function() {
	$('.valiantPhoto').Valiant360();
	const controls = document.getElementsByClassName('controls')[0];
	let controlsClone = controls.cloneNode();
	$('.valiantPhoto').remove('.controls');
	$('canvas').before(controlsClone);
	let menuItems = document.getElementsByClassName('video-item');
	[].slice.call(menuItems).forEach(video => {
		video.addEventListener('click', e => {
			e.preventDefault();
			const source = e.target.getAttribute('data-video-src');
			$('.video-wrapper').html('<div class="valiantPhoto" data-video-src='+ source +'></div>');
			$('.valiantPhoto').Valiant360();
			const controls = document.getElementsByClassName('controls')[0];
			let controlsClone = controls.cloneNode();
			$('.valiantPhoto').remove('.controls');
			$('canvas').before(controlsClone);
		});
	});
});