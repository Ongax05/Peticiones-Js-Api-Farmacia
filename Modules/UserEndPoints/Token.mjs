export function GetToken(username, password) {
  return new Promise((resolve, reject) => {
    const url = "http://localhost:5258/api/User/token";
    const dataToSend = {
      username: username,
      password: password,
    };
  
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("success");
          return response.json();
        } else {
          console.error(`Error: ${response.status}`);
          reject(`Error: ${response.status}`);
        }
      })
      .then((data) => {
        var Token = data.token;
        resolve(Token);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        reject(error);
      });
  });
}
