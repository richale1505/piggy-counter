let count = 0;
let countEl;

function increment() {
    count += 1;
    countEl = document.getElementById('count-el');
    countEl.innerText = count;
}

function save() {
    let previousEntriesCounter = count + " - ";
    let saveEl = document.getElementById('save-el');
    saveEl.textContent += previousEntriesCounter;
    count = 0;
    countEl = document.getElementById('count-el');
    countEl.textContent = count;
}