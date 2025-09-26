import './FormularioContrato.css';
import { useForm } from "react-hook-form";
import { FirmaDigital } from '../FirmaDigital/FirmaDigital';
import { generarPDF } from '../../utils/generarPDF';
import { useState } from 'react';

type FormData = {
    nombreCompleto: string;
    Dni: string;
    direccion: string;
    telefono: string;
    email: string;
}
export const FormularioContrato = () => {
    const { register, handleSubmit,formState: {errors} } = useForm<FormData>();
    const [firma, setFirma] = useState<string>('');

    const onSubmit = (data: FormData) => {
        generarPDF(data,firma);
    }

    return (
       <form onSubmit={handleSubmit(onSubmit)} className='formulario-contrato'>
           <h1 className='text-center text-2xl'>Comprobante de facturación</h1>
           <input placeholder='Nombre completo' {...register('nombreCompleto',{
              required: 'El nombre completo es obligatorio',
              minLength: {value: 5, message: 'El nombre debe tener al menos 5 caracteres'}
           })} required className='inputs' />
           {errors.nombreCompleto && <span className='error-message'>{errors.nombreCompleto.message}</span>}
           <input 
             placeholder='DNI' 
             {...register('Dni', {
               required: 'El DNI es obligatorio',
               pattern: { value: /^[0-9]{8}[A-Za-z]$/, message: 'El DNI no es válido' }
             })} 
             required 
             className='inputs' 
           />
           {errors.Dni && <span className='error-message'>{errors.Dni.message}</span>}
           <input placeholder='Dirección' {...register('direccion',{
                required: 'La dirección es obligatoria',
                pattern:{
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                    message: 'Solo se permiten letras'
               }

           })} required className='inputs' />
            {errors.direccion && <span className='error-message'>{errors.direccion.message}</span>}
           <input
              type='text' 
              inputMode='tel'
              placeholder='+54... numero de celular' 
              {...register('telefono', {
                  required: 'El teléfono es obligatorio',
                  pattern: {
                     value: /^[0-9]{9}$/,
                     message: 'El teléfono no es válido'
                  }
              })}
              required
              className='inputs'
           />
           {errors.telefono && <span className='error-message'>{errors.telefono.message}</span>}
           <input
             placeholder='Email'
             type='email'
             {...register('email', {
               required: 'El email es obligatorio',
               pattern: {
                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                 message: 'El email no es válido'
               }
             })}
             required
             className='inputs'
           />
           {errors.email && <span className='error-message'>{errors.email.message}</span>}
           <FirmaDigital setFirma={setFirma} />
       </form>
    )
}