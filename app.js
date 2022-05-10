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
                if(res.userProfile.message === "Not Found"){
                    // Show Alert
                    ui.showAlart("Profile does not found", "alert alert-danger")
                } else {
                    // Show UI Profile
                    const userProfile = res.userProfile;
                    ui.showProfile(userProfile);
                    console.log(res);
                }
                
            })
    } else{
        // Clear Profile
        ui.clearProfile();
    }
   
}