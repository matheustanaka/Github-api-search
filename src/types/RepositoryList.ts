export interface RepositoryList {
    name: string;
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
        html_url: string;
    }
    description: string;
    language: string;
    stargazers_count: string;
    forks: number;

}