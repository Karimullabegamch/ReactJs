
function Book(props)
{
   console.log(props)
    return(
    
            
        <div className='cb'>
            
        <img src={props.url} alt="image"/>
        <h1>{props.title}</h1>
        </div>
     
    )
}
export default Book