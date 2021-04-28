
export default function Lista(props){
    const {alunas} = props
    
    return <ul>
            {alunas.map(p=>{
                return (
                    <li>{p}</li>
                )
            })}
        </ul>
}