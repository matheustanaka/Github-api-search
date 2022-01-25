export interface RepsoitoryList {
    name: string;
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
        html_url: string;
        repos_url: string;
    }

}