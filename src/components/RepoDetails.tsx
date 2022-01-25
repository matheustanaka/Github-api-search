const RepoDetails = (details: any, loading: any) => {
    if(loading) {
        return (
            <h1 className="loader">Loading...</h1>
        )
    }

    return (
    <div className="repo-details-container">
        <div className="repo-details">
            <label className="label">Name: </label>
            <h2 className="value">{details.name}</h2>
        </div>
        <div className="repo-details">
            <label className="label">Description: </label>
            <span className="value">{details.description}</span>
        </div>
        <div className="repo-details">
            <label className="label">Language: </label>
            <span className="value">{details.language}</span>
        </div>
        <div className="repo-details">
            <label className="label">Forks Count: </label>
            <span className="value">{details.forks}</span>
        </div>
        <div className="repo-details">
            <label className="label">Starts: </label>
            <span className="value">{details.stargazers_count}</span>
        </div>
    </div>
    )
}

export default RepoDetails;