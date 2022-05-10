class GitHub {
    // constructor
    constructor() {
        this.client_ID = "b9b84793c3663c3b66fe";
        this.client_Secret = "8fefd6fadb1d8c9d43bb2ceb6d9db53d6dfc7138";
        this.repo_count = 6;
        this.repo_sort = "created: asc";
    }

    async getUser(userName) {
        const profileResponse = await fetch(`https://api.github.com/users/${userName}?client_id=${this.client_ID}&client_secret=${this.client_Secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_ID}&client_secret=${this.client_Secret}`);
        const userProfile = await profileResponse.json();
        const userRepos = await reposResponse.json();
        return {
            userProfile,
            userRepos
        }

    }
}