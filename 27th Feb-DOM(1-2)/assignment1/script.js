


let a=document.querySelector('#d');
a.addEventListener('click',()=>{
    alert('sd')
    for (let i=0;i<10;i++){
        a.innerText="sd"
        console.log(i)
    }


})
   let aText=document.getElementById('text')

let a=document.querySelector('#d');
a.addEventListener('click',()=>{
    // alert('This Color Is Azure')
    aText.innerText='0';
    
})


// for reset button click
// resetBtn.addEventListener("click", () => {
//     displayValue.innerText = 0;
//   });



// </div>
// <h1 id="counter">0</h1>
// <button id="incrementBtn">Increment</button>
// <button id="decrementBtn">Decrement</button>


const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');
const decrementButton = document.getElementById('decrementBtn');

// Initial counter value
let counter = 0;

// Function to update the counter element
updateCounter=()=> {
counterElement.textContent = counter;
};

// Event listener for increment button
incrementButton.addEventListener('click', () => {
counter++;
updateCounter();
});

// Event listener for decrement button
decrementButton.addEventListener('click', () => {
counter--;
updateCounter();
});

// Update the counter element initially
updateCounter();
