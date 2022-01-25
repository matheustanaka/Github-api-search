import axios from "axios";
import { useState, useEffect } from "react";

import RepoDetails from "./RepoDetails";

const RepoList = () => {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [details, setDetails] = useState({});
    const [detailsLoading, setDetailsLoading] = useState(false);

    useEffect(() => {
        setRepos([]);
        setDetails({});
    }, [username]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        searchRepos();
    }

    const searchRepos = () => {
        setLoading(true);
        axios({
            method: "get",
            url: `https://api.github.com/users/${username}/repos`,
        })
            .then(response => {
                setLoading(false);
                setRepos(response.data);
            })
    }

    const renderRepo = (repo: any) => {
        return (
            <div className="row" onClick={() => getDetails(repo.name)} key={repo.id}>
                <h2 className="repo-name">
                    {repo.name}
                </h2>
            </div>
        )
    }

    const getDetails = (repoName: string) => {
        setDetailsLoading(true);
        axios({
            method: "get",
            url: `https://api.github.com/repos/${username}/${repoName}`
        })
        .then(response => {
            setDetails(false);
            setDetails(response.data);
        })
    }

    return (
        <div className="page-container">
            <div className="form-content">
                <form className="form">
                    <input
                        className="input"
                        value={username}
                        placeholder="Type username"
                        onChange={e => setUsername(e.target.value)}
                    />
                    <button className="button" onClick={handleSubmit}>{loading ? "Searching..." : "Search"}</button>
                </form>
            </div>
            <div className="results-container">
                {repos.map(renderRepo)}
            </div>
            <RepoDetails details={details} loading={detailsLoading} />
        </div>
    )
}

export default RepoList;