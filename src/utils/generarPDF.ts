import jsPDF from 'jspdf';

type FormData  = {
    nombreCompleto: string;
    Dni: string;
    direccion: string;
    telefono: string;
    email: string;
   
};

export const generarPDF = (data: FormData,firma:string) => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text(`Nombre Completo: ${data.nombreCompleto}`, 10, 20);
    doc.text(`DNI: ${data.Dni}`, 10, 30);
    doc.text(`Dirección: ${data.direccion}`, 10, 40);
    doc.text(`Teléfono: ${data.telefono}`, 10, 50);
    doc.text(`Email: ${data.email}`, 10, 60);

    if(firma){
        const imgProps = {
            imageData:firma,
            format:'PNG',
            x:10,
            y:40,
            width:100,
            height:40,
        };

        doc.addImage(imgProps.imageData, imgProps.format, imgProps.x, imgProps.y, imgProps.width, imgProps.height);
    }

    doc.save('contrato.pdf');
}