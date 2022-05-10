class GitHub {
    // constructor
    constructor() {
        this.client_ID = "b9b84793c3663c3b66fe";
        this.client_Secret = "8fefd6fadb1d8c9d43bb2ceb6d9db53d6dfc7138";
    }

    async getUser(userName) {
        const response = await fetch(`https://api.github.com/users/${userName}
        ?client_id=${this.client_ID}$client_secret=${this.client_Secret}`);
        const userProfile = await response.json()
        return {
            userProfile
        }

    }
}