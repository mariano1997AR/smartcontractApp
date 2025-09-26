import { useRef } from 'react';
import './FirmaDigital.css';
import SignatureCanvas from 'react-signature-canvas';

type Props = {
    setFirma: (firma: string) => void;
}



export const FirmaDigital:React.FC<Props> = ({setFirma}) => {
    const sigCanvas = useRef<SignatureCanvas | null>(null);

    const clear = () => {
        sigCanvas.current?.clear();
        setFirma('');
    }

    const save = () => {
       if(sigCanvas.current?.isEmpty()) return;
       const dataURL = sigCanvas.current?.getTrimmedCanvas().toDataURL('image/png');
       setFirma(dataURL || '');
    }

    return (
        <section className='container-firma-digital'>
            <h2 className='text-center text-xl mb-2'>Firma Digital</h2>
            <div className='signature-wrapper'>
                 <SignatureCanvas 
               ref={sigCanvas}
               penColor='black'
               canvasProps={{className:'signature-canvas border '}}
            
            
            />
            </div>
            <section>
                  <button className='btn' onClick={clear}>Limpiar Firma</button>
                  <button className='btn' onClick={save}>Generar documento</button>
            </section>
        </section>
    )
}