import { GetToken } from "./Modules/UserEndPoints/Token.mjs";
import { AddProveedor,GetProveedores, PutProveedor } from "./Modules/Proveedor.mjs";

var token = await GetToken("Admin", "Admin");

