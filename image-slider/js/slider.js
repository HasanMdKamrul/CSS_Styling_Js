// ** Image slider making

// ** first get all the src link of the images and store it in an array 


const imageLinks = [
    '../images/pic-1.jpg',
    '../images/pic-2.jpg',
    '../images/pic-3.jpg',
    '../images/pic-4.jpg',
    '../images/pic-5.jpg',
    '../images/pic-6.jpg',
    '../images/pic-7.jpg',
    '../images/pic-8.jpg',
    '../images/pic-9.jpg',
];

// ** Where to display the image

const imageItself = document.getElementById('image');

// ** set a counter 

let index = 0;

const sliderInterval = setInterval(()=>{
    imageItself.textContent = ``;
    const links = imageLinks[index]
    if (index === imageLinks.length) {
        index = 0;
        
    }
    imageItself.setAttribute('src',links);

    index++
},1000)