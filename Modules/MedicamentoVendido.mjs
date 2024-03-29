import { rejects } from "assert";
import { resolve } from "path";

const url = "http://localhost:5258/api/MedicamentoVendido"
export async function PostMedicamentoVendido(VentaId,MedicamentoId,CantidadVendida,Precio,token) {
    return new Promise(async (resolve, reject) => {
      const dataToSend = {
        VentaId:VentaId,
        MedicamentoId:MedicamentoId,
        CantidadVendida:CantidadVendida,
        Precio:Precio
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
  



export function GetMedicamentosVendidos(pageSize, pageIndex, token) {
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

export async function PutMedicamentoVendido(id, VentaId,MedicamentoId,CantidadVendida,Precio, token) {
    return new Promise(async (resolve, reject) => {
      const dataToSend = {
        id: id,
        VentaId:VentaId,
        MedicamentoId:MedicamentoId,
        CantidadVendida:CantidadVendida,
        Precio:Precio
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
  
  export async function DeleteMedicamentoVendido(id, token) {
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
  
  export function GetDrugSoldAfter(datebase,token) {
    return new Promise(async (resolve, reject) => {
      try {
  
        const response = await fetch(url+ `/GetDrugSoldAfter?datebase=${datebase}`, {
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
  export function GetTotalDrugsSold(drugName,token) {
    return new Promise(async (resolve, reject) => {
      try {
  
        const response = await fetch(url+ `/GetTotalDrugSold?drugName=${drugName}`, {
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
  
  export function GetBalance(token) {
    return new Promise(async (resolve, reject) => {
      try {
  
        const response = await fetch(url+ `/GetBalance`, {
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
  export function GetDrugSoldAfterAndBeforeThan(firtsDate,lastDate,token) {
    return new Promise(async (resolve, reject) => {
      try {
  
        const response = await fetch(url+ `/GetDrugSoldAfterAndBeforeThan?firtsDate=${firtsDate}&lastDate=${lastDate}`, {
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
  export function AverageDrugSoldPerSale(token) {
    return new Promise(async (resolve, reject) => {
      try {
  
        const response = await fetch(url+ `/AverageDrugSoldPerSale`, {
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