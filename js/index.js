function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);  // The maximum is inclusive and the minimum is inclusive
}
const containerDiv = document.createElement('div');
containerDiv.className = 'container';
const img = new Image();
const result = getRandomIntInclusive(1, 9)
switch (result) {
    case 1:
        img.src = "./images/1.jpg";
        break;
    case 2:
        img.src = "./images/2.jpg"
        break;
    case 3:
        img.src = "./images/3.jpeg"
        break;
    case 4:
        img.src = "./images/4.jpg"
        break;
    case 5:
        img.src = "./images/5.jpg"
        break;
    case 6:
        img.src = "./images/6.jpg"
        break;
    case 7:
        img.src = "./images/7.jpg"
        break;
    case 8:
        img.src = "./images/8.jpg"
        break;
    case 9:
        img.src = "./images/9.jpg"
        break;

}

containerDiv.appendChild(img);

document.body.appendChild(containerDiv);