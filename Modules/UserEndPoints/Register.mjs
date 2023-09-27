export function RegisterUser(username, password, email) {
  return new Promise((resolve, reject) => {
    const url = "http://localhost:5258/api/user/register";

    const dataToSend = {
      email: email,
      username: username,
      password: password,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("success");
          resolve(response.status);
        } else {
          console.error(`Error: ${response.status}\nError msg : ${response.text()}`);
          reject(`Error: ${response.status}\nError msg : ${response.text()}`);
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        reject(error);
      });
  });
}

