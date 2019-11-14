import React, { Component } from 'react';


class Comentarios extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="comentario">
                <img className="comentario__perfil" alt="Perfil usuario" src={this.props.imagem}/>
                <div>
                    <h3 className="comentario__nome">{this.props.nome}</h3>
                    <p className="comentario__subtitulo">{this.props.subtitulo}</p>
                    <hr />
                    <p>{this.props.texto}</p>
                </div>
            </div>  
        )
    }
}
export default Comentarios;