
let image_Element = document.getElementById("image")
let imagesArray = [
    "./assets/ocean-seacoast-rocks-water-87284.jpeg",
    "./assets/pexels-photo-885880.jpeg",
    "./assets/pexels-photo-1112598.jpeg",
    "./assets/pexels-photo-1275929.jpeg",
    "./assets/pexels-photo-1437629.jpeg",
    "./assets/pexels-photo-1451074.jpeg",
    "./assets/pexels-photo-1460880.jpeg"
]

function randomInteger(min, max) {
    let rand = Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function setImageStyles(display, top, left) {
    image_Element.style.top = `${top}px`;
    image_Element.style.left = `${left}px`;
    image_Element.style.display = `${display}`;
    // animation styles (not finished)
    // image_Element.style.animation = `fade 1s linear`;
    // image_Element.style.opacity = "1";
}

function selectRandomImage() {
    let i = Math.floor(Math.random() * Math.floor(imagesArray.length));
    image_Element.src = `${imagesArray[i]}`;

}

function moveImage() {
    selectRandomImage()
    let window_Height = window.innerHeight
    let window_Width = window.innerWidth
    let availSpace_W = (window_Width - image_Element.clientWidth);
    let availSpace_H = (window_Height - image_Element.clientHeight);
    let randNum_H = randomInteger(1, availSpace_H);
    let randNum_W = randomInteger(1, availSpace_W);
    console.log("Width pos " + randNum_W, "Height pos " + randNum_H, "Image width " + image_Element.clientWidth, "Image height " + image_Element.clientHeight)
    console.log("Inner width " + window_Width, "Inner height " + window_Height)
    setImageStyles("block", randNum_H, randNum_W, )
}

function Prep() {
    let timeout
    let interval
    document.onmousemove = function targetActivityCheck() {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            interval = setInterval(moveImage, 4000)
        }, 3000)
        clearInterval(interval)
        document.getElementById('image').src = ""
        setImageStyles("none", 0, 0)


    }
}

Prep()