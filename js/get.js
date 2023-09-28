const url = "https://crud-examples.onrender.com/";
const urlN = "https://crud-examples.onrender.com/?name=";
const buttonAll = document.querySelector("#all");
const container = document.querySelector("#container");
const inputId = document.querySelector("#inputId");
const buttonId = document.querySelector("#buttonId");
const inputName = document.querySelector("#inputName");
const buttonName = document.querySelector("#buttonName");

/* 
DENNE FUNGERER LIKT SOM ASYNC FUNKSJONEN "getAll":
function postData(data) {
    fetch(api_url, {
      method: "POST", 
      body: JSON.stringify(data), 
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }
const data = {name: "example",
content: "hei"};
postData(data); 
*/


//SHOW ALL OBJECTS IN ARRAY FROM URL
async function getAll(url) {
    const res = await fetch(url/* , {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    } */)
    const data = await res.json();
    console.log(data);
    showAll(data);
}

function showAll(items) {
    // console.log(items);

    container.innerHTML = "";
    items.forEach((item) => {

    const { id, name, content } = item;
    // console.log(id, name, content);

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div>
      <p>ID: ${id}</p>
      <h1>${name}</h1>
      <h3>${content}</h3>
    </div>`
    container.appendChild(card);
  })
}

buttonAll.addEventListener("click", () => {
  // console.log("clicked"); 
  getAll(url)
});


//SHOW OBJECT WITH SPECIFIC ID    
//("unknown" reults means the id does not exists)
async function getId(url) {
  const id = inputId.value;
  console.log(id);
  const res = await fetch(url+id);
  const data = await res.json();
  showId(data);
}

function showId(item) {
  container.innerHTML = "";
  const { id, name, content } = item;
    // console.log(id, name, content);

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div>
      <p>ID: ${id}</p>
      <h1>${name}</h1>
      <h3>${content}</h3>
    </div>`
    container.appendChild(card);
  }


buttonId.addEventListener("click", (e) => {
  e.preventDefault();                         //stopper action on form fra HTML. Bruk form for at ENTER er aktivert.
  getId(url)
})


//SHOW ALL OBJECTS WITH THE SAME NAME 
async function getName(urlN) {
  const name = inputName.value;
  console.log(name);
  const res = await fetch(urlN+name);
  const data = await res.json();
  showName(data);
}

function showName(item) {
  container.innerHTML = "";
  const { id, name, content } = item;
    // console.log(id, name, content);

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div>
      <p>ID: ${id}</p>
      <h1>${name}</h1>
      <h3>${content}</h3>
    </div>`
    container.appendChild(card);
  }


buttonName.addEventListener("click", (e) => {
  e.preventDefault();                         //stopper action on form fra HTML. Bruk form for at ENTER er aktivert.
  console.log(urlN);
  getName(urlN)
})



/* 
/?name=
/id 
*/