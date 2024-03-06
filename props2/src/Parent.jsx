import React from 'react'
import Child from './Child'
export default function Parent() {
    let names=["begam","mahi","lilli"]
    let age=[23,22,11]
  return (
    <div>
      {
        names.map(  function(n,i)
        {
            return( <Child nam={n} ag={age[i]} key={n}/>)
        })

      }
    </div>
  )
}
