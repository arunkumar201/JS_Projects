//lets define the fun to get the random user from  api

const getRandomUserFromApi = async () => {
	try {
		const response = await fetch("https://randomuser.me/api?results=0");

		if (!response.ok) {
			throw new Error(
				"Failed to get random user from API status: ",
				response.status
			);
		}
		const data = await response.json();
		displayUser(data);
	} catch (error) {
		console.log(`error while getting random user from api : ${error.message}`);
	}
};

const getUserProfileFromGithub = async (userName = "arunkumar201") => {
	if (!userName) {
		throw new Error("Username cannot be empty.");
	}
	try {
		const response = await fetch(`https://api.github.com/users/${userName}`);

		if (!response.ok) {
			throw new Error(
				`Failed to get user from GitHub API. Status: ${response.status}`
			);
		}

		const userData = await response.json();
		displayGithubUserProfile(userData);
	} catch (error) {
		console.error(
			`Error while getting user profile from GitHub API: ${error.message}`
		);
	}
};

const displayUser = (user) => {
	const userDiv = document.querySelector(".user-container");
	if (!user && user.length < 0) {
		userDiv.innerHTML = `<p>No User found or Something went wrong</p>`;
	}
	userDiv.innerHTML = user.results
		.map(
			(user) => `
    <div class='user-details'>
	<div class='inner-user-details'>
	<img src="${user.picture.large}" alt="User Avatar" class='user-img'>
	<h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
	<p>${user.gender}, ${user.dob.age} years old</p>
	<p>Email: ${user.email}</p>
	<p>Location: ${user.location.city}, ${user.location.state}, ${user.location.country}</p>
	<p>Phone: ${user.phone}</p>
	</div>
    </div>
  `
		)
		.join("");
};

const displayGithubUserProfile = (user) => {
	const githubUserDiv = document.querySelector(".github-user-container");
	if (!user) {
		githubUserDiv.innerHTML = `<p>No User found or Something went wrong</p>`;
	} else {
		const { login, name, avatar_url, bio, html_url } = user;

		const userProfileHTML = `
			<div class="user-profile">
				<img src="${avatar_url}" alt="${login}" class="avatar">
				<div class="user-details" style="width: 5rem;">
					<h2>${name}</h2>
					<p>${bio}</p>
					<a href="${html_url}" target="_blank" class="profile-link">${login}'s GitHub Profile</a>
				</div>
			</div>
		`;

		githubUserDiv.innerHTML = userProfileHTML;
		const cssStyles = `
		.github-user-container {
			width:100%;
			
			font-family: Arial, sans-serif;
			margin-top: 20px;
			display:flex;
			flex-direction:colum;
			border: 1px solid #ccc;
			padding: 5px;
			border-radius: 5px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		}

		.user-profile {
			width:100%;
			display: flex;
			padding:2px;
			align-items: center;
			flex-direction:column;
		}

		.avatar {
			width: 100px;
			height: 100px;
			border-radius: 50%;
			margin-right: 20px;
		}

		.user-details {
         width: 100%;
		 word-wrap: break-word;
		}

		.profile-link {
			text-decoration: none;
			color: #0366d6;
		}
	`;

		const styleElement = document.createElement("style");
		styleElement.innerHTML = cssStyles;
		document.head.appendChild(styleElement);
	}
};

//select the fetch function
const fetchButton = document.getElementById("fetch-btn");

// select the fetch github user
const fetchGithubUserButton = document.querySelector(".fetch-github-profile");

//we will add the event handler to the button when user  clicks on the
fetchButton.addEventListener("click", getRandomUserFromApi);

// we will
fetchGithubUserButton.addEventListener("click", async () => {
	const inputBox = document.querySelector(".github-username");
	const userName = inputBox.value;
	await getUserProfileFromGithub(userName);
});
