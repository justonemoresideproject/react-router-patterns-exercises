import React from 'react' 
import { Link } from 'react-router-dom'
import Dog from './Dog'

function Dogs({dogs}) {
    return (
        <>
            {console.log(dogs)}
            {/* <switch >
                {dogs.map(dog => {
                    return (
                    <Route exact path={`/${dog.name}`}>
                        <Dog 
                        name={dog.name} 
                        age={dog.age} 
                        src={dog.src} 
                        facts={dog.facts}/>
                    </Route>
                    )
                })}
                <Route><Dogs /></Route>
            </switch> */}

            <ul>
                {dogs.map(dog => {
                    return (
                    <li key={dog.id}>
                        <Link to={`/${dog.name}`}>
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