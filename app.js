// Init GitHub
const gitHub = new GitHub;
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
                    console.log("Not Found")
                } else {
                    // Show UI Profile
                    console.log(res.userProfile)
                }
                
            })
    } else{
        // Clear Profile
    }
   
}