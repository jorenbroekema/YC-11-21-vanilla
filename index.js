console.log("hello");

const app = document.getElementById("app");

const text = "hello";
const text2 = "hello 2";

const tpl = `
  <p>${text}</p>
  <p>Bar</p>
  <p>${text2}</p>
`;

app.innerHTML = tpl;
