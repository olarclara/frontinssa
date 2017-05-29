import React, { Component } from 'react'
import Header from './Header'
import Schedule from './Schedule'
import Footer from './Footer'

const eventSchedule = [
  {
    "id": 1,
    "title": "Credenciamento",
    "start": "08:00",
    "end": "09:10"
  }, {
    "id": 2,
    "title": "Apresentação",
    "start": "09:10",
    "end": "09:20"
  }, {
    "id": 3,
    "title": "Explore o mundo do IoT com o Matrix",
    "description": "Você já tentou desenvolver algo para IoT e teve que procurar o sensor certo para resolver o seu problema? Além de tudo, você já teve que aprender algum tipo de linguagem de baixo nível para dar vida a sua ideia? Então, nessa talk venha conhecer o projeto MATRIX. Com ele, é possível prototipar a sua solução de internet das coisas e tornar o seu sonho realidade.",
    "speaker": "Diego Leite",
    "start": "09:20",
    "end": "10:00"
  }, {
    "id": 4,
    "title": "O papel do UI/UX em restaurar a função do designer enquanto projetista",
    "description": "Designer Gráfica formada pela UNIFACS, com passagens pela Parsons University of Design e MIT Media Lab . Seu interesse em plataformas web, experiência do usuário e jogos guiam seu trabalho, que se mantém no limite entre Design Gráfico, Web Design e Hardware aplicados à estrutura tácteis e interativas na solução de problemas cotidianos.",
    "speaker": "Isa Sobrinho",
    "start": "10:00",
    "end": "10:40"
  }, {
    "id": 5,
    "title": "Coffee Break",
    "start": "10:40",
    "end": "11:10"
  }, {
    "id": 6,
    "title": "Web Underground",
    "description": "Você já ouviu falar da URL API? ou da Payment Request API? ou da especificação CSS Scroll Snap Points? Se ainda não, nesta talk irei explicar o que estas e muitas outras tecnologias discutidas na comunidade são e o porque que elas deveriam constar no seu leque de opções tecnológicas para um desenvolvimento web moderno e otimizado.",
    "speaker": "Beto Muniz",
    "start": "11:10",
    "end": "12:00"
  }, {
    "id": 7,
    "title": "Almoço",
    "start": "12:00",
    "end": "14:00"
  }, {
    "id": 8,
    "title": "GraphQL @ Jusbrasil",
    "description": "Uma visão geral sobre GraphQL, das etapas iniciais a como ele ajudou a remodelar a arquitetura do site Jusbrasil (React + GraphQL + Relay).",
    "speaker": "Rodrigo Ribeiro",
    "start": "14:00",
    "end": "14:40"
  }, {
    "id": 9,
    "title": "Componentes Funcionais usando React e RamdaJs",
    "description": "React e Programação Funcional são tópicos cada vez mais relevantes no meio tecnológico, o objetivo dessa talk é mostrar como você pode construir componentes no React de uma maneira funcional usando a biblioteca RamdaJS.",
    "speaker": "Maria Clara Santana",
    "start": "14:40",
    "end": "15:20"
  }, {
    "id": 10,
    "title": "Scratching React Fiber",
    "description": "React Fiber é uma reescrita do algoritmo core do React, sendo uma futura features do React, entenda o que muda e quais o benefícios dessa nova abordagem. A palestra detalhará conceitos das etapas de renderização do React. Fiber é um resultado de mais de 2 anos de trabalho do core team do React.",
    "speaker": "Raphael Amorim",
    "start": "15:20",
    "end": "16:00"
  }, {
    "id": 11,
    "title": "Coffee Break",
    "start": "16:00",
    "end": "16:20"
  }, {
    "id": 12,
    "title": "Programação Reativa com RxJs",
    "description": "Nesta palestra serão apresentados conceitos de Programação Reativa através de exemplos práticos usando a biblioteca RxJs. Falaremos sobre observables, streams, async e programação funcional.",
    "speaker": "Jonata Weber",
    "start": "16:20",
    "end": "17:00"
  }, {
    "id": 13,
    "title": "Coisas que eu acho que vocês não sabem sobre CSS",
    "description": "O CSS é cheio de propriedades para facilitar a sua estilização. Nessa light talk irei falar sobre algumas propriedades ‘desconhecidas’ e que podem ser uma grande mão na roda na hora de desenvolver seus sites e apps.",
    "speaker": "Jefferson Moura",
    "start": "17:00",
    "end": "17:20"
  }, {
    "id": 14,
    "title": "Sobre aviões, performance, aplicativos e pessoas",
    "description": "Mais rápido sempre é melhor? No fim dos anos 60 fomos a lua, e acreditávamos que era apenas uma questão de tempo para começarmos a voar pra lá com a mesma facilidade que fazemos uma ponte aérea, e que poderíamos muito em breve dar uma volta ao mundo em pouquíssimo tempo com aviões ultra sônicos. Em 2017, a aviação comercial é mais *lenta* do que 30 anos atrás, e ninguém fala mais de ida a lua ou aviões supersônicos. Nessa palestra, vamos entender por que isso aconteceu e o que diabos tudo isso tem haver com status da web.",
    "speaker": "Joselito Júnior",
    "start": "17:20",
    "end": "18:00"
  }, {
    "id": 15,
    "title": "Encerramento",
    "start": "18:00",
  } 
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Schedule schedule={eventSchedule} />
        <Footer />
      </div>
    );
  }
}

export default App;
