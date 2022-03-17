import React from 'react'
import { Route, Link, Router } from 'react-router-dom'
import Dog from './Dog'
import Dogs from './Dogs'

function Routes({dogs}) {
    return (
        <switch >
            {dogs.map(dog => {
                return (
                <Route key={`${dog.id}.route`} exact path={`/dogs/${dog.name}`}>
                    <Dog 
                    name={dog.name} 
                    age={dog.age} 
                    src={dog.src} 
                    facts={dog.facts} key={dog.id}/>
                </Route>
                )
            })}
            <Route><Dogs /></Route>
        </switch>
    )
}



export default Routes