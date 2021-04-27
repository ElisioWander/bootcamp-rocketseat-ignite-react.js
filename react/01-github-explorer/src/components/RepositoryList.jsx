import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

const repository = {
    name: 'umform',
    description: 'Forms in React',
    link: 'https://github/umform/umform'
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    console.log(repositories)

    return (
        <section className="repository-list">
            <h1>Lista de Repositório</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
        
}