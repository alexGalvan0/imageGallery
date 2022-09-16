const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
                    '../images/pic1.jpg',
                    '../images/pic2.jpg',
                    '../images/pic3.jpg',
                    '../images/pic4.jpg',
                    '../images/pic5.jpg'
                ]
/* Declaring the alternative text for each image file */
const altText = [
                    'Eye',
                    'Rock',
                    'Flowers',
                    'Art',
                    'Butterfly'
                ]

/* Looping through images */
// Used i iteration beucase of refrensing multiple arrays in the loop.
for (let i=0 ; i < 5; i++){

    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText[i]);

    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', images[i])
    })

}



/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const attributeValue = btn.getAttribute('class')
    const overlayDivs = document.getElementsByClassName('overlay')
    
    if ( attributeValue === 'dark'){
        btn.setAttribute('class', 'light')
        btn.textContent = "Lighten"
        overlayDivs[0].setAttribute('style', 'background-color: rgba(0,0,0,0.5);')       
    } else {
        btn.setAttribute('class', 'dark')
        btn.textContent = "Darken"
        overlayDivs[0].setAttribute('style', 'background-color: rgba(0,0,0,0);')      
    }
})