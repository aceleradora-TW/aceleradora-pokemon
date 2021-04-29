import { useEffect, useState } from "react"

export default function Lista(props){
    const {alunas} = props

    const [name, setName] = useState('')

    useEffect(()=>{
        console.log('Chegou aqui')
    },[])

    useEffect(()=>{
        console.log('Chegou aqui de novo o ' + name)
    }, [name])

    function testeDeClique(){
        return alert('Clicou no botão')
    }

    function testeEvento(nameEvent){
        // console.log(nameEvent)
        setName(nameEvent)
    }

    return (
        <>
            <ul>
                {alunas.map(aluna=>{
                    return (
                        <li key={Math.random()}>{aluna}</li>
                    )
                })}
            </ul>
            <button onClick={()=>testeDeClique()}>Clicar</button>
            <p/>
            Nome: <input type='text' onChange={(event)=>testeEvento(event.target.value)} />

            {name}

        </>
    )
}