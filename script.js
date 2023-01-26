var in mages = [];
var currentImage = 0;
// create an array of image URLs
for (var i = 0; i < 11; i++) {
    images.push("#img_" + i);
}
document.querySelector("a-sky").setAttribute("src", images[currentImage]);
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
        currentImage++;
        if (currentImage >= images.length) {
            currentImage = 0;
        }
        var sky = document.querySelector("a-sky");
        sky.setAttribute("src", images[currentImage]);
    }
});

document.addEventListener("touchstart", function (event) {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    var sky = document.querySelector("a-sky");
    sky.setAttribute("src", images[currentImage]);
});