import { GetToken } from "./Modules/UserEndPoints/Token.mjs";
import {DeleteProveedor, PostProveedor,GetProveedores, PutProveedor } from "./Modules/Proveedor.mjs";
import {DeleteVenta, PostVenta,GetVentas, PutVenta } from "./Modules/Venta.mjs";
import {DeleteEmpleado, PostEmpleado,GetEmpleados, PutEmpleado } from "./Modules/Empleado.mjs";
import {DeletePaciente, PostPaciente,GetPacientes, PutPaciente } from "./Modules/Paciente.mjs";
import {DeleteCompra, PostCompra,GetCompras, PutCompra } from "./Modules/Compra.mjs";
import {DeleteMedicamento, PostMedicamento,GetMedicamentos, PutMedicamento } from "./Modules/Medicamento.mjs";
import {DeleteMedicamentoComprado, PostMedicamentoComprado,GetMedicamentoComprados, PutMedicamentoComprado } from "./Modules/MedicamentoComprado.mjs";
import {DeleteMedicamentoVendido, PostMedicamentoVendido,GetMedicamentoVendido, PutMedicamentoVendido } from "./Modules/MedicamentoVendido.mjs";
var token = await GetToken("Admin", "admin");
console.log(await PostVenta(1,1,token))


 