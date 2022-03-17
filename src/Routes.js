import React from 'react'
import { Route, Link } from 'react-router-dom'
import Dog from './Dog'

function Routes(dogs) {
    return (
        <switch>
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
        </switch>
    )
}

export default Routes