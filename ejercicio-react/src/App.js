import './App.css';
import Contactos from './components/Ejercicio 1-3/contactos';
import { Condicional } from './components/Ejercicio 10-12/renderCondicional';
import { Formulario } from './components/Ejercicio 13-15/Formularios';
import { Ruteo } from './components/Ejercicio 16-18/Ruteo';
import { Chistes } from './components/Ejercicio 19-21/PeticionesAxios';
import Clockf from './components/Ejercicio 4-6/cicloDeVida';
import { Contacts } from './components/Ejercicio 7-9/Contactos';

function App() {
  const contactoPrueba = {
    nombre: 'Fulano',
    apellido: 'de Tal',
    email: 'fulanito@o-b.com',
    conectado: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        {/*<Contactos contacto ={contactoPrueba} />*/}
        {/* <Clockf /> */}
        {/* <Contacts /> */}
        {/* <Condicional /> */}
        {/* <Formulario /> */}
        <Chistes />        
      </header>
    </div>
  );
}

export default App;
