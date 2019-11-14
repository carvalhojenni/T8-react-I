import React from 'react';
import Previsao from './componentes/previsao/Previsao'
import Contador from './componentes/contador/Contador'
import Comentarios from './componentes/comentarios/Comentarios'
import comentarios from './dados/comentarios'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // visibilidade: true
    }
  }

  render() {
    return (
      <div className="container">
        <Previsao />

          <Contador />

        <div className="comentarios">
          {comentarios.map((comentario) => (
            <Comentarios
              nome={comentario.autora.nome}
              imagem={comentario.autora.imagem}
              subtitulo={comentario.subtitulo}
              texto={comentario.texto}
            />
          ))
          }
        </div>
      </div>
    );
  }
}

export default App;
