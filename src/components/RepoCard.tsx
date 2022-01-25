import { useState, useEffect } from "react";

import { RepositoryList } from "../types/RepositoryList";

interface Repository {
    repository: RepositoryList[];
}

const RepoCard = () => {

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/matheustanaka/repos`)
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Repository List</h1>

            <ul>
                {repositories.map((repository) => {
                    return <h1>repository.name</h1>
                })}
            </ul>
        </section>
    )
}

export default RepoCard;