window.onload = function () {
	var image = document.getElementsByTagName('img');//array of pictures
	var imageLen = image.length;
	var current = 0;
	for (var i = 0; i < imageLen; i++) {
		image[i].onclick = function (event) {//launching the function on image click
			var appDiv = document.getElementById('bigPicture');
			appDiv.innerHTML = '';
			var eventElement = event.target;
			var imageNameParts = eventElement.id.split('_');
			var src = 'img/big/' + imageNameParts[1] + '.jpg';
			var imageDOMElement = document.createElement('img');
			imageDOMElement.src = src;
			appDiv.appendChild(imageDOMElement);
			current = imageNameParts[1];
		}
	}

	var prev = document.getElementById("prev");
	prev.onclick = function (event) {
		console.log(event);
		if (current > 1) {
			current--;
			image[current].click();
		}
	}
	var next = document.getElementById("next");
	next.onclick = function (event) {
		event.preventDefault();

		if (current < imageLen) {
			current++;
			image[current].click();
		}
	}
}