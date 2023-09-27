const button = document.querySelector('button');
const form = document.querySelector('form');
async function putInfo() {
    const idInput = document.getElementById('idInput');
    const inputName = document.getElementById('nameInput');
    const inputContent = document.getElementById('contentInput');
const res = await fetch(`https://crud-examples.onrender.com/${idInput.value}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id:  idInput.value,
            name: inputName.value,
            content: inputContent.value,
    })
    })
    const data = await res.json();
    form.append(`Its been put`)
}   
form.addEventListener("submit", (e)=> {
    e.preventDefault()
    putInfo();
})