import axios from 'axios';

const getPokemonDitto = (name="ditto") => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.data)
}

const getPokemonById = (id) =>{
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.data)
}
export {
    getPokemonDitto,
    getPokemonById
}