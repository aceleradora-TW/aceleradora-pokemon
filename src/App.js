import './App.css';
import Lista from './Lista';

export default function App() {

  const listaDeAlunas = [
    'João',
    'Maria',
    'John',
    'Maria',
    'Edi'
  ]

  return (
    <div className="App">
     <h1>testando</h1>
     <Lista alunas={listaDeAlunas} />
    </div>
  );
}