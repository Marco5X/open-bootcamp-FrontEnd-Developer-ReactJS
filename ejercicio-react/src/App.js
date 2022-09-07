import './App.css';
import Contactos from './components/Ejercicio 1-3/contactos';

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
        <Contactos contacto ={contactoPrueba} />
      </header>
    </div>
  );
}

export default App;
