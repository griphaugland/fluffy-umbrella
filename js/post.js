
const button = document.querySelector('button');
const form = document.querySelector('form');
async function postInfo() {
    const inputName = document.getElementById('nameInput');
    const inputContent = document.getElementById('contentInput');
const res = await fetch('https://crud-examples.onrender.com/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: inputName.value,
            content: inputContent.value,
    })
    })
    const data = await res.json();
    console.log(data);
    form.append(`Its been posted`)
}   
form.addEventListener("submit", (e)=> {
    e.preventDefault()
    postInfo();
})


