import React, { Component } from 'react'

export default class TelaPlaylist extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.irParaCadastro}> Cadastrar Playlist</button>
        <h1>Playlist</h1>
      </div>
    )
  }
}
