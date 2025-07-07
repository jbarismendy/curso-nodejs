import { argv } from "node:process";

if (argv[2] == 'GET') {
    console.log("Toma un dato")
}

if (argv[2] == 'POST') {
    console.log("Recibimos " + argv[3] + " satisfactoriamente")
}

if (argv[2] == 'PUT') {
    console.log("Modificaremos el item con ID: " + argv[3] + " satisfactoriamente")
}

if (argv[2] == 'DELETE') {
    console.log("EL item con ID: " + argv[3] + " se elimino con exito")
}