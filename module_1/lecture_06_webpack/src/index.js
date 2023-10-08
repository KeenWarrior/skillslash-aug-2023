import axios from "axios";

function fetchData() {
  const username = document.getElementById("input").value;
  axios.get(`https://api.github.com/users/${username}`).then((response) => {
    console.log(response.data);

    const root = document.getElementById(".root");

    const h1 = document.createElement("h1");
    h1.innerText = response.data.name;

    root.appendChild(h1);
  });
}

const fetchButton = document.getElementById("fetch");
fetchButton.addEventListener("click", fetchData);

// const root = document.querySelector(".root");

// console.log(root.innerHTML);  