import React from 'react';
import './DisplayCharacter.css'
// Import FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserInjured} from '@fortawesome/free-solid-svg-icons'

const DisplayCharacter = (props) => {
    
    // Destructring Data
    const {name,realName,demand,img,url,aboutCharacter}=props.character;
    // font awosome icon
    const Casting = <FontAwesomeIcon icon={faUserInjured} />
    
    return (
           <div className="display">
                    <div><img src={img} alt="" /></div>
                    <div>
                    <h4 className="display-name">{name}</h4>
                    <h4>Actor Name: {realName} </h4>
                    <h4>Actor Demand : ${demand}</h4>
                    <h4>Actor Details:  <a href={url} target="_blank" rel="noopener noreferrer">Details</a></h4>
                    <h5>About This Character : <small>{aboutCharacter}</small></h5>
                    <button onClick={()=>props.handleAddToCart(props.character)} className="btn">{Casting} Select Character</button>
            </div>
            
            
        </div> 
        
        
    );
};

export default DisplayCharacter;