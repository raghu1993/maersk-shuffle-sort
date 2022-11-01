let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let colorsArray = ["#6F98A8", "#2B8EAD", "#2F454E", "#2B8EAD", "#2F454E", "#BFBFBF", "#BFBFBF", "#6F98A8", "#2F454E",];
createDivElements(array); // functtio to create grid elements

// listener for resize to improve responsiveness
window.addEventListener("resize", (e) => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 375) {
        const collection = document.getElementsByClassName("items");
        [...collection].forEach((element,index) => {
            element.classList.add("itemsStack");
            element.style.borderLeftColor = colorsArray[index];
        });
    } else if (windowWidth > 375) {
        let domArray = document.getElementsByClassName('itemsStack');
        [...domArray].forEach(element => {
            element.classList.remove("itemsStack");
            element.style.removeProperty("border-left-color");
        });
    }
});

// function to create grid items from array
function createDivElements(array){
    let temp;
    for (i = 0; i < array.length; i++) {
        temp = document.createElement('div');
        temp.className = "bg".concat(array[i]).concat(" text-white items");
        temp.innerHTML = array[i];
        temp.classList.add("itemsStack");
        temp.style.borderLeftColor = colorsArray[array[i]];
        document.getElementById('parent').appendChild(temp);
    }
}

// function to remove the grid items 
function removeArrayElements() {
    let domArray = document.getElementsByClassName('items');
    [...domArray].forEach(element => {
        element.remove();
    });
}

// shuffle function to re render the array and display the grids
function shuffleArray() {
    removeArrayElements();
    createDivElements(array.sort(() => Math.random() - 0.5));
}

// function to sort the array in ascending order
function sortArray() {
    removeArrayElements();
    createDivElements(array.sort((a,b) => a-b ));
}