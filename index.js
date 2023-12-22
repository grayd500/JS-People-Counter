let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


// Photo by <a href="https://unsplash.com/@fellowferdi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ferdinand Stöhr</a> on <a href="https://unsplash.com/photos/flock-of-birds-flying-q0tQjy5KQAY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
// Blue Photo by <a href="https://unsplash.com/@dastan_khdir?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Dastan khdir</a> on <a href="https://unsplash.com/photos/a-flock-of-seagulls-flying-over-a-body-of-water-uyn-RzT-Utw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  