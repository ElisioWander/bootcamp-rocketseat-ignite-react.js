import { RepositoryItem } from './RepositoryItem'

const repository = {
    name: 'umform',
    description: 'Forms in React',
    link: 'https://github/umform/umform'
}

export function RepositoryList() {
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