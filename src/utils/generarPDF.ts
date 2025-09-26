import jsPDF from 'jspdf';

/*
type FormData  = {
    nombreCompleto: string;
    Dni: string;
    direccion: string;
    telefono: string;
    email: string;
   
};*/

export interface DatosPDF {
  nombreCompleto: string;
  Dni: string;
  direccion:string;
  telefono:string;
  firma: string; // base64
  email:string;
}

export const generarPDF = (datos:DatosPDF) => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    
    doc.text(`Nombre Completo: ${datos.nombreCompleto}`, 10, 20);
    doc.text(`DNI: ${datos.Dni}`, 10, 30);
    doc.text(`Dirección: ${datos.direccion}`, 10, 40);
    doc.text(`Teléfono: ${datos.telefono}`, 10, 50);
    doc.text(`Email: ${datos.email}`, 10, 60);

    if(datos.firma){

        doc.addImage(datos.firma,'PNG',10,70,180,60);
    }

    doc.save('contrato.pdf');
}