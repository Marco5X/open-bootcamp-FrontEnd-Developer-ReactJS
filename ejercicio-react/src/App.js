import './App.css';
import Contactos from './components/Ejercicio 1-3/contactos';
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
        <Contacts />
      </header>
    </div>
  );
}

export default App;
