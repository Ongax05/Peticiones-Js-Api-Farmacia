import { GetToken } from "./Modules/UserEndPoints/Token.mjs";
import { RegisterUser } from "./Modules/UserEndPoints/Register.mjs";
import { AddRole } from "./Modules/UserEndPoints/AddRole.mjs";
import {DeleteProveedor, PostProveedor,GetProveedores, PutProveedor, GetTotalDrugsSoldPerProvider,ProvidersWhoHaveNotSoldInLastYear,SupplierThatHasSuppliedMoreInLastYear,SuppliersThatHasSuppliedInLastYear,SuppliersOfMedicinesWithLessThan50Units,SuppliersWithFiveOrMoreKindsOfMedicine } from "./Modules/Proveedor.mjs";
import {DeleteVenta, PostVenta,GetVentas, PutVenta } from "./Modules/Venta.mjs";
import {DeleteEmpleado, PostEmpleado,GetEmpleados, PutEmpleado, GetSalesPerEmployee,GetEmployeesWithFiveSalesOrMore,EmployeesWhoHaventMadeSales,EmployeesWhoHaveLessThan5Sales,EmployeeWhoSoldMoreKindOfDrugsBetween,EmployeesWhoDidntSellBetween } from "./Modules/Empleado.mjs";
import {DeletePaciente, PostPaciente,GetPacientes, PutPaciente, PatientsWhoHavePurchased,PatientWhoSpentMostMoney,PatientsWhoBoughtInLastYear,PatientsWhoHaventBoughtAnythingBetween,PatientsTotalSpentInLastYear } from "./Modules/Paciente.mjs";
import {DeleteCompra, PostCompra,GetCompras, PutCompra } from "./Modules/Compra.mjs";
import {DeleteMedicamento, PostMedicamento,GetMedicamentos, PutMedicamento,GetLessThan50,GetMedicamentoProveedor, GetDrugExpiresBefore, GetUnsoldDrug, GetMostExpensiveDrug,GetLeastSoldDrug,GetTotalDrugSoldPer,GetTotalDrugUnsoldBetween,GetDrugWithPiceMoreThanAndStokLeastThan} from "./Modules/Medicamento.mjs";
import {DeleteMedicamentoComprado, PostMedicamentoComprado,GetMedicamentosComprados, PutMedicamentoComprado,GetDrugPurchasedFrom } from "./Modules/MedicamentoComprado.mjs";
import {DeleteMedicamentoVendido, PostMedicamentoVendido,GetMedicamentosVendidos, PutMedicamentoVendido,GetDrugSoldAfter,GetTotalDrugsSold, GetBalance,GetDrugSoldAfterAndBeforeThan,AverageDrugSoldPerSale } from "./Modules/MedicamentoVendido.mjs";
var token = await GetToken("Admin", "Admin");
console.log(token)
var date1 = new Date(2010,0,1).toISOString()
var date2 = new Date(2015,1,1).toISOString()



console.log(await EmployeesWhoDidntSellBetween(date1,date2,token))





 