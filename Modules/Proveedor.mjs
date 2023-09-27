import { rejects } from "assert";
import { resolve } from "path";

const url = "http://localhost:5258/api/Proveedor"
export async function PostProveedor(nombre, email, telefono, direccion, token) {
    return new Promise(async (resolve, reject) => {
      const dataToSend = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        direccion: direccion,
      };
  
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(dataToSend),
        });
  
        if (response.status === 201) {
          console.log("Solicitud exitosa");
          const jsonResponse = await response.json();
          resolve(jsonResponse);
        } else {
          console.error(`Error: ${response.status}\nError msg : ${response.text()}`);
          reject(`Error: ${response.status}\nError msg : ${response.text()}`);
        }
      } catch (error) {
        console.error(`Error en la solicitud: ${error}`);
        reject(error);
      }
    });
  }
  



export function GetProveedores(pageSize, pageIndex, token) {
  return new Promise(async (resolve, reject) => {
    try {

      const response = await fetch(url+ `?pageIndex=${pageIndex}&pageSize=${pageSize}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });

      if (response.status === 200) {
        console.log("Solicitud exitosa");
        const jsonData = await response.json();
        resolve(jsonData);
      } else {
        console.error(`Error: ${response.status}\nError msg : ${response.text()}`);
        reject(`Error: ${response.status}\nError msg : ${response.text()}`);
      }
    } catch (error) {
      console.error(`Error en la solicitud: ${error}`);
      reject(error);
    }
  });
}

export async function PutProveedor(id, nombre, email, telefono, direccion, token) {
    return new Promise(async (resolve, reject) => {
      const dataToSend = {
        id: id,
        nombre: nombre,
        email: email,
        telefono: telefono,
        direccion: direccion,
      };
  
      try {
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(dataToSend),
        });
  
        if (response.status === 200) {
          console.log("Solicitud exitosa");
          const jsonResponse = await response.json(); 
          resolve(jsonResponse); 
        } else {
          console.error(`Error: ${response.status}\nError msg : ${response.text()}`);
          reject(`Error: ${response.status}\nError msg : ${response.text()}`);
        }
      } catch (error) {
        console.error(`Error en la solicitud: ${error}`);
        reject(error);
      }
    });
  }
  
  export async function DeleteProveedor(id, token) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url + "/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (response.status === 204) {
          console.log("Solicitud exitosa");
          resolve();
        } else {
          console.error(`Error: ${response.status}\nError msg : ${response.text()}`);
          reject(`Error: ${response.status}\nError msg : ${response.text()}`);
        }
      } catch (error) {
        console.error(`Error en la solicitud: ${error}`);
        reject(error);
      }
    });
  }
  