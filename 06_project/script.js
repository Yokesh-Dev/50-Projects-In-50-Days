const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll' ,checkBoxs) 

function checkBoxs() {
   const trigger = window.innerHeight /5 * 4

   boxes.forEach(box => {
    const boxTop =box.getBoundingClientRect().top

    if(boxTop <trigger) {
        box.classList.add('show')
    } else {
        box.classList.remove('show')
    }
   })
}


/*  1.The Browser Object Model - The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
'
The Window object in JavaScript has numerous properties that provide access to various aspects of the browser environment and the window itself. Windwo is a object has properties like innerHeight,innerWidth ect.

 Window Size
Two properties can be used to determine the size of the browser window.
Both properties return the sizes in pixels:

window.innerHeight - the inner height of the browser window (in pixels)
window.innerWidth - the inner width of the browser window (in pixels)

2. getBoundingClientRect

The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
A DOMRect describes the size and position of a rectangle.

*/