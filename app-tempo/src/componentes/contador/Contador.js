import React, { Component } from 'react';

class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 0,
            visibilidade: false,
            congelado: false
        };
    }

    adicionarUm = () => {
        this.setState((prevState) => {
            return {
                contador: prevState.contador + 1
            }
        })
    }

    subtrairUm = () => {
        this.setState(prevState => {
            return {
                contador: prevState.contador - 1
            }
        })
    }

    resetar = () => {
        this.setState(() => {
            return {
                contador: 0,
                congelado: false
            }
        })
    }

    alternarVisibilidade = () => {
        this.setState((estadoAnterior) => {
            return {
                visibilidade: !estadoAnterior.visibilidade
            }
        })
    }

    congelarContador = () => {
        this.setState(() => {
            return {
                congelado: true
            }
        })
    }

    render() {
        return (
            <div className="contador">
                <p>{this.state.contador}</p>
                <button onClick={this.alternarVisibilidade}>{this.state.visibilidade === true ? "Fechar Contador" : "Abrir Contador"}</button>
                <div>
                    {this.state.visibilidade && (
                    <div>
                        <button className="btnMaisUm" disabled={this.state.congelado} onClick={this.adicionarUm}>+1</button>
                        <button className="btnMenosUm" disabled={this.state.congelado} onClick={this.subtrairUm}>-1</button>
                        <button className="btnResetar" onClick={this.props.resetar}>resetar</button>
                    </div>
                    )}
                </div>
                <div>
                    <button onClick={this.congelarContador}>Finalizar contador</button>
                </div>
            </div>
        )
    }
}
export default Contador;