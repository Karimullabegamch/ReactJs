function Flower(props)
{
   
    
    /*    const obj=props// OBJECT DESTRUCTION
     <img src={obj.url} alt="image"/>
            <h3>{obj.title}</h3>
    */
        return(
           <div className="flw">
            
             <img src={props.url} alt="image"/>   
            <h3>{props.title}</h3>
           </div>
        )
    
}
export default Flower