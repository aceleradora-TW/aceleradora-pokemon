import axios from "axios"
import { useEffect, useState } from "react"

export default function Lista(props){
    const {alunas} = props

    const [name, setName] = useState('')
    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{
        console.log('Chegou aqui')
        getAllPokeomns()
    },[])

    useEffect(()=>{
        console.log('Chegou aqui de novo o ' + name)
    }, [name])

    function testeDeClique(){
        return alert('Clicou no botão')
    }

    async function getAllPokeomns(){
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
        
        data.results.forEach(async (result)=>{
            const img = await getDetails(result.url)
            console.log(img)
            pokemons.push(
                {name:result.name, image:img}
            )
            setPokemons([...pokemons])
        })
    }

    async function getDetails(url){
        const {data} = await axios.get(url)
        return data.sprites.front_default
    }


    function testeEvento(event){
        // console.log(event.target.value)
        setName(event.target.name)
    }
    
    return (
        <>
            <ul>
                {pokemons.map(pokemon=>{
                    return (
                        <li key={Math.random()}>{pokemon.name}
                        <img src={pokemon.image} alt=''/>'
                        </li>
                    )
                })}
            </ul>
            <button onClick={()=>testeDeClique()}>Clicar</button>
            <p/>
                Nome: <input type='text' onChange={(event)=>testeEvento(event)} />
            {name}
        </>
    )
}