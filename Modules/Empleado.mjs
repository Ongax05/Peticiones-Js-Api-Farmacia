import { rejects } from "assert";
import { resolve } from "path";

const url = "http://localhost:5258/api/Empleado"
export async function PostEmpleado(nombre,cargo, token) {
    return new Promise(async (resolve, reject) => {
      const dataToSend = {
        nombre: nombre,
       cargo: cargo,
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
          console.error(`Error: ${response.status}`);
          reject(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error(`Error en la solicitud: ${error}`);
        reject(error);
      }
    });
  }
  



export function GetEmpleados(pageSize, pageIndex, token) {
  return new Promise(async (resolve, reject) => {
    try {

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          PageSize: pageSize,
          PageIndex: pageIndex,
        }
      });

      if (response.status === 200) {
        console.log("Solicitud exitosa");
        const jsonData = await response.json();
        resolve(jsonData);
      } else {
        console.error(`Error: ${response.status}`);
        reject(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error en la solicitud: ${error}`);
      reject(error);
    }
  });
}

export async function PutEmpleado(id, nombre, cargo, token) {
    return new Promise(async (resolve, reject) => {
      const dataToSend = {
        id: id,
        nombre: nombre,
        cargo: cargo,
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
          console.error(`Error: ${response.status}`);
          reject(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error(`Error en la solicitud: ${error}`);
        reject(error);
      }
    });
  }
  

