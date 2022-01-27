import axios from "axios";
import { useState, useEffect } from "react";

import RepoDetails from "./RepoDetails";

import "../styles/repoList.scss"


const RepoList = () => {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [details, setDetails] = useState({});
    const [detailsLoading, setDetailsLoading] = useState(false);

    //Clean search input
    useEffect(() => {
        setRepos([]);
        setDetails({});
    }, [username]);

    //submit an event to search repos
    const handleSubmit = (event) => {
        event.preventDefault();
        searchRepos();
    }

    //getting username from github api
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
    //Render data and getting the details 
    const renderRepo = (repo) => {
        return (
            <div className="repo-card" onClick={() => getDetails(repo.name)} key={repo.id}>
                <div className="img-title">
                    <img src={repo.owner.avatar_url} alt="userImage" />
                </div>
                <div className="others">
                <a href={repo.html_url}><h2>{repo.name}</h2></a>
                <p>{repo.description}</p>
                <p className="language">{repo.language}</p>
                <p>Stars {repo.stargazers_count}</p>

                </div>

            </div>
        )
    }

    //getting data of repositories
    const getDetails = (repoName) => {
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
                <h1>Search <span className="green">Github</span> Repositories</h1>
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
            <RepoDetails details={details} loading={detailsLoading}/>
        </div>
    )
}

export default RepoList;