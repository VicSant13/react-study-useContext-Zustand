import React, { useReducer } from 'react'

type Props = {}
type Action = {
    /** | se llama union Ttype */
    type:'increment'|'decrement'|'reset',

}
const reducer = (contador:number,action:Action)=>{
    
    switch(action.type){
        case "increment":
            return contador+1;
        case "decrement":
            return contador-1;
        case "reset":
            return 0;
    }
    return contador;
}

function ReducerExample({}: Props) {
    //contador es el estado que se afecta, es
    const[contador,dispatch]=useReducer(reducer,0)
  return (
    <>
        <div> reducers example</div>
        <h1>{contador}</h1>
        
        <button onClick={()=>dispatch({type:'increment'})}>Incrementar</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrementar</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    
    </>
  )
}

export default ReducerExample