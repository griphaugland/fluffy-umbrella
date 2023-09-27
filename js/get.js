const url = "https://crud-examples.onrender.com/";

/* function postData(data) {
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
  
  postData(data); */
  
const buttonAll = document.getElementById("all");
const container = document.getElementById("container");

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

async function showAll(items) {
  console.log(items);

    items.forEach((item) => {

    const { id, name, content } = item;
    console.log(id, name, content);

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
  console.log("clicked"); 
  getAll(url)
});
