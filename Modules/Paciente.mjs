import { rejects } from "assert";
import { resolve } from "path";

const url = "http://localhost:5258/api/Paciente"
export async function PostPaciente(nombre, telefono, direccion, token) {
    return new Promise(async (resolve, reject) => {
      const dataToSend = {
        nombre: nombre,
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
  



export function GetPacientes(pageSize, pageIndex, token) {
  return new Promise(async (resolve, reject) => {
    try {

      const response = await fetch(url+ `?pageIndex=${pageIndex}&pageSize=${pageSize}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
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

export async function PutPaciente(id, nombre, telefono, direccion, token) {
    return new Promise(async (resolve, reject) => {
      const dataToSend = {
        id: id,
        nombre: nombre,
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
  
  export async function DeletePaciente(id, token) {
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
  export function PatientsWhoHavePurchased(drugName, token) {
    return new Promise(async (resolve, reject) => {
      try {
  
        const response = await fetch(url+ `/PatientsWhoHavePurchased?drugName=${drugName}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
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
  export function PatientWhoSpentMostMoney(token) {
    return new Promise(async (resolve, reject) => {
      try {
  
        const response = await fetch(url+ `/PatientWhoSpentMostMoney`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
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
  export function PatientsWhoBoughtInLastYear(drugName, token) {
    return new Promise(async (resolve, reject) => {
      try {
  
        const response = await fetch(url+ `/PatientsWhoBoughtInLastYear?drugName=${drugName}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
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
  export function PatientsWhoHaventBoughtAnythingBetween(firtsDate,lastDate,token) {
    return new Promise(async (resolve, reject) => {
      try {
  
        const response = await fetch(url+ `/PatientsWhoHaventBoughtAnythingBetween?firtsDate=${firtsDate}&lastDate=${lastDate}`, {
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
  export function PatientsTotalSpentInLastYear(token) {
    return new Promise(async (resolve, reject) => {
      try {
  
        const response = await fetch(url+ `/PatientsTotalSpentInLastYear`, {
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