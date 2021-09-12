const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const image = document.querySelector('.image');
const progress = document.querySelector('.progress');
const imagesSize = 5;
let currentImage = 1;


previousBtn.onclick = function() {
	currentImageIndex = getCurrentImageIndex();
	if (hasPreviousImage()) {
		setCurrentImage(currentImageIndex - 1);
		setStutus(currentImageIndex - 1);
	} else {
		setCurrentImage(imagesSize);
		setStutus(imagesSize);
	}
}

nextBtn.onclick = function() {
	currentImageIndex = getCurrentImageIndex();
	if (hasNextImage()) {
		setCurrentImage(currentImageIndex + 1);
		setStutus(currentImageIndex + 1);
	} else {
		setCurrentImage(1);
		setStutus(1);
	}
}


function setCurrentImage(index) {
	currentImage = index;
	newImage = currentImage + '.jpg';
	curSrc = image.src.split('/');
	curSrc[curSrc.length - 1] = newImage
	image.src = curSrc.join('/');
}

function setStutus(index) {
    let rounds = progress.querySelectorAll('.round');

	for (let i = 0, elem; elem = rounds[i++];) {
	    if (elem.getAttribute('data-order') == index) {
	        nextActiveRound = elem;
	    }
	}

	curActiveRound = progress.querySelector('.active');
	curActiveRound.setAttribute('class', 'round');
	nextActiveRound.setAttribute('class', 'round active');
}

function getCurrentImageIndex() {
	srcArr = image.src.split('/');
	curImg = srcArr[srcArr.length - 1];
	curIndex = Number(curImg.split('.')[0]);
	return curIndex
}

let hasNextImage = () => currentImage < imagesSize;
let hasPreviousImage = () => currentImage > 1;