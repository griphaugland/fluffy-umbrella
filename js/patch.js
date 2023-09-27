const button = document.querySelector('button');
const form = document.querySelector('form');
const body = document.querySelector('body');
async function patchInfo() {
    const idInput = document.getElementById('idInput');
    const inputName = document.getElementById('nameInput');
    const inputContent = document.getElementById('contentInput');
const res = await fetch(`https://crud-examples.onrender.com/${idInput.value}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id:  idInput.value,
            name: inputName.value,
            content: inputContent.value,
    })
    })
    if(!res.ok){
        return body.append(`Houston, we got a problem ${res.status}`)
    }
    else {
        body.append(`Patched it up`)
    }
    const data = await res.json();
}   
form.addEventListener("submit", (e)=> {
    e.preventDefault()
    patchInfo();
})