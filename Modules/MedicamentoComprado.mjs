import { rejects } from "assert";
import { resolve } from "path";

const url = "http://localhost:5258/api/MedicamentoComprado"
export async function PostMedicamentoComprado(CompraId,MedicamentoId,CantidadComprada,PrecioCompra,token) {
    return new Promise(async (resolve, reject) => {
      const dataToSend = {
        CompraId : CompraId,
        MedicamentoId : MedicamentoId,
        CantidadComprada : CantidadComprada,
        PrecioCompra : PrecioCompra
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
  



export function GetMedicamentosComprados(pageSize, pageIndex, token) {
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

export async function PutMedicamentoComprado(id, CompraId,MedicamentoId,CantidadComprada,PrecioCompra, token) {
    return new Promise(async (resolve, reject) => {
      const dataToSend = {
        id: id,
        CompraId : CompraId,
        MedicamentoId : MedicamentoId,
        CantidadComprada : CantidadComprada,
        PrecioCompra : PrecioCompra
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
  
  export async function DeleteMedicamentoComprado(id, token) {
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
  