import { rejects } from "assert";
import { resolve } from "path";

const url = "http://localhost:5258/api/Medicamento"
export async function PostMedicamento(Nombre,Precio,Stock,FechaExpiracion,ProovedorId, token) {
    return new Promise(async (resolve, reject) => {
      const dataToSend = {
        Nombre : Nombre, 
        Precio : Precio, 
        Stock : Stock, 
        FechaExpiracion : FechaExpiracion, 
        ProovedorId : ProovedorId
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
  



export function GetMedicamentos(pageSize, pageIndex, token) {
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

export async function PutMedicamento(id, Nombre,Precio,Stock,FechaExpiracion,ProovedorId, token) {
    return new Promise(async (resolve, reject) => {
      const dataToSend = {
        id:id,
        Nombre : Nombre, 
        Precio : Precio, 
        Stock : Stock, 
        FechaExpiracion : FechaExpiracion, 
        ProovedorId : ProovedorId
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
  
  export async function DeleteMedicamento(id, token) {
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
          console.error(`Error: ${response.status}`);
          reject(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error(`Error en la solicitud: ${error}`);
        reject(error);
      }
    });
  }
  