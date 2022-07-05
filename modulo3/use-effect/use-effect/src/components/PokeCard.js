import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
border: 2px solid black;

`

export default function PokeCard(props) {
   
    const [pokemon, setPokemon] = useState({})

    useEffect(()=>{
        pegaPokemon(props.pokemon)
    },[props.pokemon])

   const pegaPokemon = (pokemon) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => {
        
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err.response);
      });
   }
    

    return (
    <Container>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
    </Container>
  )
}
