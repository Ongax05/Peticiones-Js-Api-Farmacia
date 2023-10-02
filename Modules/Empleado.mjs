import { rejects } from "assert";
import { resolve } from "path";

const url = "http://localhost:5258/api/Empleado"
export async function PostEmpleado(nombre,cargo, token) {
    return new Promise(async (resolve, reject) => {
      const dataToSend = {
       Nombre: nombre,
       Cargo: cargo,
       FechaContratacion : new Date()
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
  



export function GetEmpleados(pageSize, pageIndex, token) {
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
          console.error(`Error: ${response.status}\nError msg : ${response.text()}`);
          reject(`Error: ${response.status}\nError msg : ${response.text()}`);
        }
      } catch (error) {
        console.error(`Error en la solicitud: ${error}`);
        reject(error);
      }
    });
  }
  
  export async function DeleteEmpleado(id, token) {
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
  export function GetSalesPerEmployee(token) {
    return new Promise(async (resolve, reject) => {
      try {
  
        const response = await fetch(url+ `/GetSalesPerEmployee`, {
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
  export function GetEmployeesWithFiveSalesOrMore(token) {
    return new Promise(async (resolve, reject) => {
      try {
  
        const response = await fetch(url+ `/GetEmployeesWithFiveSalesOrMore`, {
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
  export function   EmployeesWhoHaventMadeSales(token) {
    return new Promise(async (resolve, reject) => {
      try {
  
        const response = await fetch(url+ `/EmployeesWhoHaventMadeSales`, {
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
  export function   EmployeesWhoHaveLessThan5Sales(token) {
    return new Promise(async (resolve, reject) => {
      try {
  
        const response = await fetch(url+ `/EmployeesWhoHaveLessThan5Sales`, {
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
  export function EmployeeWhoSoldMoreKindOfDrugsBetween(firtsDate,lastDate,token) {
    return new Promise(async (resolve, reject) => {
      try {
  
        const response = await fetch(url+ `/EmployeeWhoSoldMoreKindOfDrugsBetween?firtsDate=${firtsDate}&lastDate=${lastDate}`, {
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
          console.error(`Error: ${response.status}\nError msg : ${await response.text()}`);
          reject(`Error: ${response.status}\nError msg : ${await response.text()}`);
        }
      } catch (error) {
        console.error(`Error en la solicitud: ${error}`);
        reject(error);
      }
    });
  }