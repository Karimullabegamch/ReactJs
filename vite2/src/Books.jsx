import React from 'react'
import Book from './Book'
import booksData from "./data";
export default function Books() {
  return (
    <div className="cbs">
    {
            booksData.map(function(n)

            {
            
                return (
                   
                       <div  >
                        <Book url={n.url} title={n.title}/>
                       
                        
                        

                    </div>
                        
                )
            })}
    </div>
  )
}
