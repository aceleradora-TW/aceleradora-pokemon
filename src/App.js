import './App.css';
import Lista from './Lista';

export default function App() {

  const listaDeAlunas = [
    'João',
    'Maria',
    'John',
    'Mariá',
    'Edi'
  ]
  listaDeAlunas.unshift('')
  return (
    <div className="App">
     <h1>testando</h1>
     <Lista alunas={listaDeAlunas} />
    </div>
  );
}