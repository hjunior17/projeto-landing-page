const imagesPanel = document.querySelectorAll('.images-panel');
const arrowNext = document.getElementById('next');
const arrowPrevious = document.getElementById('previous');
let imageCurrent = 0;

function hiddenImages () {
    imagesPanel.forEach(image => {
        image.classList.remove('show')
    });
}

function showImages () {
    imagesPanel[imageCurrent].classList.add('show');
}

arrowNext.addEventListener('click', function() {
    const totalImages = imagesPanel.length -1;
    if (imageCurrent === totalImages) {
        return;
    }

    imageCurrent++;
   
    hiddenImages();
    showImages();
});

arrowPrevious.addEventListener('click', function () {
    if (imageCurrent === 0) {
        return;
    }
    
    imageCurrent--;

    hiddenImages();
    showImages ();
});