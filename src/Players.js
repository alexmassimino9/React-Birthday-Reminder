import React, {useState} from "react";


    const Players = () => {
       const data = [
            {id: 1, name: 'Messi', age: 34, dob: 'June 24', key: 1},
             {id: 2,name: 'Ronaldo', age: 36, dob: 'Feb 2', key: 2},
             {id: 3,name: 'Neymar', age: 29, dob: 'Feb 2',  key: 3},
           {id: 4,name: 'Henry', age: 44, dob: 'Aug 17',  key: 4},
            {id: 5,name: 'Ronaldinho', age: 41, dob: 'Mar 21',  key: 5}]
        
        const [players , setPlayers] = useState(data)
        
        // removes one player at a time 
        const removeItems = (id) =>{
            let newPlayers = players.filter((person)=> person.id !== id);
           setPlayers(newPlayers) }
            
        
       

        
        
    return (
        <>

        
        {players.map((person) =>{ 
            const {id, name, age , dob, key} = person
            return(
           
            <>
            <div key={id} className="playerCard">
            <img className="img" alt="PlayerPic" src={require(`./Images/${name}.jpg`)}></img>
            <h3 className="name">{name}</h3>
            <h5>{age}</h5>
            <span>{dob}</span>
            <button    id={id} className='btn' type='button' onClick={()=>removeItems(id)}>Remove Item</button>
            </div> 
           
            </>)
            
        })}
            <button className="btn" type="btn" onClick={()=>{setPlayers([])}}>Clear Items </button>
        </>
    )
}

export default Players