const login = async (login) => {

  event.preventDefault();

  const formData = new FormData(event.target);
  const email = formData.get("email");
  const password = formData.get("password");

  localStorage.removeItem("user");

  const bodyString = JSON.stringify({
      email,
      password,
    })

  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/auth`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: bodyString,
  });

  const responseMessage = await res.json();
  console.log(responseMessage);

  if(res?.status === 200) {
    Toastify({
      text: responseMessage?.message ?? "Login com Sucesso!",
      className: "info",
    }).showToast();

    setTimeout(() => {
      localStorage.setItem("user", bodyString);
      window.location.href = "/";
    }, 1000);

  } 
  else {
    Toastify({
      text: responseMessage?.message ?? "Dados Errados!",
      className: "toast__error",
    }).showToast();
  }
};

window.login = login;
