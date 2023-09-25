/* 
    EL REFRESH TOKEN ESTA GUARDADO EN UNA COOKIE QUE SE LLAMA 
    refreshToken 
    SE LA TIENE QUE PASAR A ESTE METODO POR MEDIO DEL DOM
*/

export function refreshAccessToken(refreshToken) {
  return new Promise((resolve, reject) => {
    const url = "http://localhost:5258/api/User/refresh-token";
    const dataToSend = {
      refreshToken: refreshToken,
    };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.error(`Error: ${response.status}`);
          reject(`Error: ${response.status}`);
        }
      })
      .then((data) => {
        resolve(data); 
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        reject(error);
      });
  });
}
