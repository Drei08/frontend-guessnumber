const tagVersiculos = document.getElementById("versiculos");
console.log("META", import.meta.env);

const fetchData = async () => {
  console.log("META", import.meta.env);
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/versiculos`);
  const data = await res.json();
  
  tagVersiculos.textContent = data.versiculos.texto;
  
  console.log(data.versiculos.texto);
};

window.onload =  async () => {
  if (!localStorage.getItem("user")) {  
    window.location.href = "/login.html";
  }

  const bodyString = localStorage.getItem("user");

  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/auth`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: bodyString,
  });

  if(res?.status !== 200) {
    window.location.href = "/login";
  }

};

window.fetchData = fetchData;
