// Task 1
function functionCout() {
    let count = 0;
    return function () {
        count++
        return count;
    }
}

let functionCoutCall = functionCout();

functionCoutCall();
functionCoutCall();
functionCoutCall();

console.log(functionCoutCall())
// Task 1

// Task 2

const object = {
    left: {
        left: {
            left: 1,
            right: {
                left: 0,
                right: 1,
            },
        },
        right: {
            left: 0,
            right: 1,
        },
    },
    right: 1,
}

function f1(obj) {
    for (let key in obj) {
        if (typeof obj[key] !== "number") {  
            f1(obj[key]);
        }
        else {
            if (obj[key] == 1) {
                obj[key] = 0;
            }
            else {
                obj[key] = 1;
            }
        }
    }
}

f1(object);

console.log(object);

// Task 2


// Task 3


function arrCreate(size) {
    let arr = [];

    for (let i = 0; i < size; i++) {
        arr[i] = []

        for (let k = 0; k < size; k++) {
            if (i === k || i === size - k - 1) {
                arr[i][k] = 2
            } else {
                if ((i < k && i < size - k - 1) || (i > k && i > size - k - 1)) {
                    arr[i][k] = 1
                } else {
                    arr[i][k] = 0
                }
            }
        }
    }
    return arr
    
}

console.log(arrCreate(5))
// Task 3

// Task 4
let elementColor = document.querySelectorAll('.color');

for (i = 0; i < elementColor.length; i++) {
    elementColor[i].addEventListener('click', (e) => {
        e.target.style.backgroundColor = `rgb(${randomColor(0, 255)}, ${randomColor(0, 255)}, ${randomColor(0, 255)})`
    })
}

function randomColor(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Task 4