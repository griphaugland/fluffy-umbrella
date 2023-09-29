const button = document.querySelector('button');
const form = document.querySelector('form');
const body = document.querySelector('body');
async function deleteInfo() {
    const idInput = document.getElementById('idInput');
const res = await fetch(`https://crud-examples.onrender.com/${idInput.value}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id:  idInput.value,
    })
    })
    if(!res.ok){
    body.append(`Houston, we got a problem ${res.status}`)
    }
    else {
    body.append(`${idInput.value} has been deleeeted`)
    }
    const data = await res.json();
}   
form.addEventListener("submit", (e)=> {
    e.preventDefault()
    deleteInfo();
})