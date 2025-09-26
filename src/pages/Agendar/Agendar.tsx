import { CalendlyWidget } from '../../components/CalendlyWidget/CalendlyWidget';
import './Agendar.css';

export const Agendar = ()=>{
    return(
        <section className="container-calendario">
                <section className="flex-left-item-informacion-calendario">
                    <article>
                        <h1 className="text-3xl font-bold mb-6 text-center oscuro-logo">Reservá una reunion</h1>
                        <p className="py-3 text-2xl">
                            Hola, ¿cómo estás? Te habla Mariano Andres Martinotti de <strong>Calcular AI</strong>
                        </p>
                        <p className="py-3 text-2xl">
                            Somos una empresa especializada en ayudar a personas, pymes y empresas a gestionar, registrar y analizar su información financiera y fiscal, cumpliendo con las leyes y optimizando la administración del negocio.
                        </p>
                        <p className="py-3 text-2xl">
                            Me gustaría coordinar una breve reunión (presencial o virtual) para contarte cómo podemos ayudarte a optimizar el mantenimiento de tus instalaciones y reducir costos a largo plazo.
                        </p>
                        <p className="py-3 text-2xl">
                            ¿Qué día y horario te resultaría cómodo para agendarla?
                        </p>
                    </article>
                </section>
                <section className="flex-right-item-calendario">
                    <article>
                        <CalendlyWidget />
                    </article>
                </section>
            </section>
    )
}