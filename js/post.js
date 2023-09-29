
const button = document.querySelector('button');
const form = document.querySelector('form');
const body = document.querySelector('body')
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
    if(!res.ok){
        return body.append(`Houston, we got a problem ${res.status}`)
    }
    else {
        body.append(`Posted it!`)
    }
    const data = await res.json();
    console.log(data);
}   
form.addEventListener("submit", (e)=> {
    e.preventDefault()
    postInfo();
})


