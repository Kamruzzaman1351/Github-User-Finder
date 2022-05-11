class GitHub extends GitHubMain{
    // constructor
    constructor() {
        super();      
        this.repo_count = 6;
        this.repo_sort = "created: asc";
    }

    async getUser(userName) {
        const profileResponse = await fetch(`https://api.github.com/users/${userName}?client_id=${this.gitCredential.client_ID}&client_secret=${this.gitCredential.client_Secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.gitCredential.client_ID}&client_secret=${this.gitCredential.client_Secret}`);
        const userProfile = await profileResponse.json();
        const userRepos = await reposResponse.json();
        return {
            userProfile,
            userRepos
        }

    }
}