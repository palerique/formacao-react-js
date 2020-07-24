import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Tabela from "./Tabela";

function App() {

    const autores = [
        {
            nome: 'Paulo',
            livro: 'React',
            preco: '1000'
        },
        {
            nome: 'Daniel',
            livro: 'Java',
            preco: '99'
        },
        {
            nome: 'Marcos',
            livro: 'Design',
            preco: '150'
        },
        {
            nome: 'Bruno',
            livro: 'DevOps',
            preco: '100'
        }
    ];

    return (
            // <div className="App">
            //   <header className="App-header">
            //     <img src={logo} className="App-logo" alt="logo" />
            //     <p>
            //       Edit <code>src/App.js</code> and save to reload.
            //     </p>
            //     <a
            //       className="App-link"
            //       href="https://reactjs.org"
            //       target="_blank"
            //       rel="noopener noreferrer"
            //     >
            //       Learn React
            //     </a>
            //   </header>
            // </div>
            // <div className="App">
            //     <h1>Hello World</h1>
            // </div>
            <Tabela autores={autores} />
    );
}

export default App;
