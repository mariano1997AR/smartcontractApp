import * as yup from 'yup';

export const Schema = yup.object().shape({
    nombreCompleto: yup.string().required('El nombre completo es obligatorio'),
    Dni: yup.string().required('El DNI es obligatorio').matches(/^[0-9]{8}[A-Za-z]$/, 'El DNI no es válido'),
    direccion: yup.string().required('La dirección es obligatoria'),
    telefono: yup.string().required('El teléfono es obligatorio').matches(/^[0-9]{9}$/, 'El teléfono no es válido'),
    email: yup.string().required('El email es obligatorio').email('El email no es válido'),
}).required();