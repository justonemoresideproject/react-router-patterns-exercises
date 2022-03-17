import React from 'react' 
import { Link, Router, Route } from 'react-router-dom'

function Dogs({dogs}) {
    return (
    <>
        <ul>
            {dogs.map(dog => {
                return (
                <li key={dog.id}>
                    <Link 
                        key={`${dog.id}.link`} 
                        to={`/dogs/${dog.name}`}>
                        <h3>{dog.name}</h3>
                        <img src={dog.src} alt={dog.name}></img>
                    </Link>
                </li>
                )
            })}
        </ul>
    </>
    )
}

export default Dogs;