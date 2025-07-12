// Importando o React
import React from 'react'

// Importa o arquivo de estilos CSS
import './App.css'
// Importando componentes
import Mensagem from './components/Mensagem'
import Cabecalho from './components/Cabecalho'
import Conteudo from './components/Conteudo'
import Rodape from './components/Rodape'
import Topo from './components/Topo'
import Meio from './components/Meio'
import Base from './components/Base'

// Componente principal da aplicação
function App() {
  const nome = "Ana"
  const anoNascimento = 2005

  return (
    <div>
      {/* Título da página, exercício 1) */}
      <h1>Meu primeiro app React</h1>
      <hr></hr>
      {/* Printando variáveis, exercício 2) */}
      <div>
        <h1>Olá, meu nome é {nome} e nasci em {anoNascimento}.</h1>
        <hr></hr>
      </div>
      {/* Utiliza o componente, exercício 3) */}
      <div>
        <Mensagem />
        <hr></hr>
      </div>
      {/* Renderiza 3 componentes - exercício 4) */}
      <div>
        <Cabecalho />
        <Conteudo />
        <Rodape />
        <hr></hr>
      </div>
      {/* cria um botão que chama um alert ao ser clicado - exercício 5) */}
      <div>
        <button onClick={() => alert("Você clicou no botão!")}>
          Mostrar Alerta
        </button>
        <hr></hr>
      </div>
      {/* cria um botão que chama uma função ao ser clicado - exercício 6) */}
      <div>
        <button onClick={executarAcao}>
          Executar Ação
        </button>
        <hr></hr>
      </div>
      {/* chama uma função que retorna um texto - exercício 7) */}
      <div>
        {renderizarMensagem()}
        <hr></hr>
      </div>
      {/* renderiza 3 componentes - exercício 8) */}
      <div>
        <Topo />
        <Meio />
        <Base />
      </div>
    </div>
  )
}

// Função para printar no console web - exercício 6)
function executarAcao() {
  console.log("Função chamada com sucesso.")
}

// Função para renderizar texto - exercício 7)
function renderizarMensagem() {
  return <p>Texto gerado por uma função de renderização.</p>
}

export default App // Exporta o componente principal
