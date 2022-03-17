import React from 'react'
import { Link } from 'react-router-dom'

function Nav({dogs}) {
    return (
        <ul>
            {dogs.map(dog => {
                return (
                <li key={`${dog.id}.navLi`}>
                    <Link key={`${dog.id}.linkId`} to={`/${dog.name}`}>
                        {dog.name}
                    </Link>
                </li>
                )
            })}
        </ul>
    )
}

export default Nav