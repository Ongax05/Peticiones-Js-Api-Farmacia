import { GetToken } from "./Modules/UserEndPoints/Token.mjs";
import { PostProveedor,GetProveedores, PutProveedor } from "./Modules/Proveedor.mjs";

var token = await GetToken("Admin", "Admin");

