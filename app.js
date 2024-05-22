const btns = document.querySelector(".typed");
const calc = document.querySelector(".calculator");
const area = document.querySelector("#area")
const result = document.querySelector("#result")
const clear = document.querySelector(".clear")
const del = document.querySelector(".delete")



const operation = function(nums) {

    const exp = function(nums) {
        const numbers = nums.match(/(\d+\.?\d*|\D)/g).filter(Boolean);

        return numbers;
    }
    a = exp(nums);

    // a = a.match(/[+-\/]?(\d+(\.\d+)?)/g)
    
    /////////////// division
    let i = 0;
    for (i; i < a.length; i++) {
        if (a[i] == "÷") {
            let res = a[i-1] / a[i+1];
            a[i-1] = res;
            a.splice((i+1), 1)
            a.splice((i), 1)
            i = 0;
        }
    }
    ///////////// mul
    let i2 = 0;
    for (i2; i2 < a.length; i2++) {
        if (a[i2] == "×") {
            let res = a[i2-1] * a[i2+1];
            a[i2-1] = res;
            a.splice((i2+1), 1)
            a.splice((i2), 1)
            i2 = 0;
        }
    }
    ////////////// sub
    let i3 = 0;
    for (i3; i3 < a.length; i3++) {
        if (a[i3] == "-") {
            let res = a[i3-1] - a[i3+1];
            a[i3-1] = res;
            a.splice((i3+1), 1)
            a.splice((i3), 1)
            i3 = 0;
        }
    }
    ////////// sum
    const result = a.map(el => {
        if (el != "+") {
            return Number(el)
        }
    }).filter(el => el !== "+" && el).reduce((acc, num) => acc + num, 0) 
    return result;   
}




calc.addEventListener("click", function(e) {
        if (e.target.classList.contains("typed")) {
            area.value += e.target.textContent;
        }else if (e.target.id == "equal") {
            result.value = operation(area.value)
            area.value = ''
        }
})


clear.addEventListener("click", function() {
    area.value = "";
    result.value = ""
})


del.addEventListener("click", function() {
    const removed = area.value.split("");
    removed.pop()
    area.value = removed.join("")
})


document.addEventListener("keydown", function(e) {
    console.log(e);
        if (e.code.includes("Add")) {
            area.value += "+"
        } else if(e.code.includes("Sub")) {
            area.value += "-"
        } else if(e.code.includes("Enter")) {
            result.value = operation(area.value)
            area.value = ''
        }else if(e.code.includes("Divide")) {
            area.value += "÷"
        } else if(e.code.includes("Multiply")) {
            area.value += "×"
        }else if (e.code.includes("Decimal")) {
            area.value += "."
        }else if (e.code.includes("Numpad")) {
            const numpadNum = e.code.at(-1);
            area.value += numpadNum;
        }else if (e.code == "Backspace") {
            const removed = area.value.split("");
            removed.pop()
            area.value = removed.join("")
        }else if (e.code == "Delete") {
            area.value = "";
            result.value = ""
        }
})
