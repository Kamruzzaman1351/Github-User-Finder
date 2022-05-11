// Init GitHub
const gitHub = new GitHub;
// Init UI
const ui = new UI;
// UI Variables
const searchUserUI = document.getElementById("search-user");


// Event Listner
searchUserUI.addEventListener("keyup", getUserInfo);

// Get User Profile
function getUserInfo(e) {
    const userName = e.target.value;
    if(userName !== "") {
        gitHub.getUser(userName)
            .then((res) => {
                let masg ="API rate limit exceeded for 103.14.72.167. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)";

                if(res.userProfile.message === "Not Found"){
                    // Show Alert
                    ui.showAlart("Profile does not found", "alert alert-danger")
                } else if(res.userProfile.message === masg){                    
                    ui.showAPILimit(masg, "alert alert-primary");
                } else {
                    // Show UI Profile & Repo
                    const userProfile = res.userProfile;
                    const userRepos = res.userRepos;
                    ui.showProfile(userProfile);
                    ui.showRepo(userRepos);
                    // console.log(userRepos)
                }
                
            })
    } else{
        // Clear Profile
        ui.clearProfile();
    }
   
}