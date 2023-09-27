export function AddRole(username, password, role) {
  return new Promise((resolve, reject) => {
    const url = "http://localhost:5258/api/User/addrole";
    const dataToSend = {
      username: username,
      password: password,
      role: role,
    };
  
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("success");
          console.log(response.status);
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
