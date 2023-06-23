import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Sample() {
    
    const[data,setData]=useState()
    const[name,setName]=useState()
    const[weight,setWeight]=useState()
    const[number,setNumber]=useState(1)

    URL=`https://pokeapi.co/api/v2/pokemon/${number}`

    useEffect(()=>{
        axios.get(URL).then((res)=>{
            console.log(res.data)
            setData(res.data)
            setName(res.data.name)
            setWeight(res.data.weight)
        }).catch((err)=>{
            window.alert(err)
        })
    },[URL])

    
  return (
    <div>Sample
        <input
        type="number"
        onChange={(e)=>{setNumber(parseInt(e.target.value))}}
        />
        <button >show</button>
      <h1>Name : {name}</h1>
      <h1>Weight : {weight}</h1>
      <img src={data?data.sprites.other.dream_world.front_default:"<p>Loading..</p>"}/>
      <p>My abilites are :</p>
      {data ? data.abilities.map((item,index)=>{
        return(
            <div key={index}>
                {item.ability.name}
        </div>
        )
      }):""}
    </div>
  )
}

export default Sample