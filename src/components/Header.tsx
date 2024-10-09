import React from 'react'
import useTodosStore from '../todos/store'

type Props = {}

function Header({}: Props) {
    //const {todos} = useTodosStore()
    //permite acceder a una propiedad de Zustand y que no RE-REnderice todo el componente
    const total = useTodosStore((state)=>state.total)
  return (
    <div>{total}</div>
  )
}

export default Header