class UI {
    // constructor
    constructor() {
        this.profileDiv = document.getElementById("profile");
    }

    showProfile(user) {
        console.log(user.avatar_url);
        this.profileDiv.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3 mb-4">
                    <img class="img-fluid mb-2" src="${user.avatar_url}"/>
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge bg-primary mb-2">Public Repos: ${user.public_repos}</span>
                    <span class="badge bg-secondary mb-2">Public Gists: ${user.public_gists}</span>
                    <span class="badge bg-success mb-2">Followers: ${user.followers}</span>
                    <span class="badge bg-info mb-2">Following: ${user.following}</span>
                    <br>
                    <br>
                    <h4>${user.name}</h4>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Scice: ${user.created_at}</li>
                    </ul>
                </div>                
            </div>
        </div>
        <h3 class="page-heading mb3">Latest Repos</h3>
        <div id="repos"></div>
        `
    }

    // Clear UI
    clearProfile() {
        this.profileDiv.innerText ="";
    }

    // Show Alart
    showAlart(msg, className) {
        this.clearAlert();
        const div = document.createElement("div");
        div.className = className;
        div.appendChild(document.createTextNode(msg));
        const parentDiv = document.querySelector(".search-container");
        const searchDiv = document.querySelector(".search");
        parentDiv.insertBefore(div,searchDiv);
        setTimeout(() => {
            this.clearAlert();
        },2500);
    }

    // Clear Alert
    clearAlert() {
        const currentAlert = document.querySelector(".alert-danger")
        if(currentAlert) {
            currentAlert.remove()
        }
        
    }
}