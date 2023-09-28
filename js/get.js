const url = "https://crud-examples.onrender.com/";
const urlN = "https://crud-examples.onrender.com/?name=";
const buttonAll = document.querySelector("#all");
const container = document.querySelector("#container");
const inputId = document.querySelector("#inputId");
const buttonId = document.querySelector("#buttonId");
const inputName = document.querySelector("#inputName");
const buttonName = document.querySelector("#buttonName");

//SHOW ALL OBJECTS IN ARRAY FROM URL
async function getAll(url) {
  const res = await fetch(url);
  const data = await res.json();
  showAll(data);
}

function showAll(items) {
  container.innerHTML = "";
  items.forEach((item) => {
    const { id, name, content } = item;
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div>
      <p>ID: ${id}</p>
      <h1>${name}</h1>
      <h3>${content}</h3>
    </div>`;
    container.appendChild(card);
  });
}

buttonAll.addEventListener("click", () => {
  getAll(url);
});

//SHOW OBJECT WITH SPECIFIC ID
//("unknown" reults means the id does not exists)
async function getId(url) {
  const id = inputId.value;
  const res = await fetch(url + id);
  const data = await res.json();
  showId(data);
}

function showId(item) {
  container.innerHTML = "";
  const { id, name, content } = item;
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div>
      <p>ID: ${id}</p>
      <h1>${name}</h1>
      <h3>${content}</h3>
    </div>`;
  container.appendChild(card);
}

buttonId.addEventListener("click", (e) => {
  e.preventDefault();
  getId(url);
});

//SHOW ALL OBJECTS WITH THE SAME NAME
async function getName(urlN) {
  const name = inputName.value;
  const res = await fetch(urlN + name);
  const data = await res.json();
  showAll(data);
}

function showName(item) {
  container.innerHTML = "";
  const { id, name, content } = item;
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div>
      <p>ID: ${id}</p>
      <h1>${name}</h1>
      <h3>${content}</h3>
    </div>`;
  container.appendChild(card);
}

buttonName.addEventListener("click", (e) => {
  e.preventDefault();
  getName(urlN);
});
