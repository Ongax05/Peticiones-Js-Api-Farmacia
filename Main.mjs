import { GetToken } from "./Modules/UserEndPoints/Token.mjs";
import { RegisterUser } from "./Modules/UserEndPoints/Register.mjs";
import { AddRole } from "./Modules/UserEndPoints/AddRole.mjs";
import {DeleteProveedor, PostProveedor,GetProveedores, PutProveedor } from "./Modules/Proveedor.mjs";
import {DeleteVenta, PostVenta,GetVentas, PutVenta } from "./Modules/Venta.mjs";
import {DeleteEmpleado, PostEmpleado,GetEmpleados, PutEmpleado } from "./Modules/Empleado.mjs";
import {DeletePaciente, PostPaciente,GetPacientes, PutPaciente } from "./Modules/Paciente.mjs";
import {DeleteCompra, PostCompra,GetCompras, PutCompra } from "./Modules/Compra.mjs";
import {DeleteMedicamento, PostMedicamento,GetMedicamentos, PutMedicamento,GetLessThan50 } from "./Modules/Medicamento.mjs";
import {DeleteMedicamentoComprado, PostMedicamentoComprado,GetMedicamentosComprados, PutMedicamentoComprado } from "./Modules/MedicamentoComprado.mjs";
import {DeleteMedicamentoVendido, PostMedicamentoVendido,GetMedicamentosVendidos, PutMedicamentoVendido } from "./Modules/MedicamentoVendido.mjs";
var token = await GetToken("Admin", "Admin");
console.log(token)



 