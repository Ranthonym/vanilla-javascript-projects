// init GitHub class
const github = new GitHub();

// init UI class
const ui = new UI();

// search input
const searchUser = document.getElementById("searchUser");

const fetchUser = (e) => {
  // get input text
  const userText = e.target.value;

  if (userText !== "") {
    // make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
};

let timerId;

const debounce = (func, delay) => {
  clearTimeout(timerId);

  timerId = setTimeout(func, delay);
};

// search input event listener
searchUser.addEventListener("keyup", (event) => {
  debounce(fetchUser(event), 2000);
});
