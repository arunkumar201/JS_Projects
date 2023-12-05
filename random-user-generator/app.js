//lets define the fun to get the random user from  api

const getRandomUserFromApi = async () => {
	console.log("object");
	try {
		const response = await fetch("https://randomuser.me/api?results=5000");

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

const displayUser = (user) => {
	const userDiv = document.querySelector(".user-container");
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

//select the fetch function
const fetchButton = document.getElementById("fetch-btn");

//we will add the event handler to the button when user  clicks on the
fetchButton.addEventListener("click", getRandomUserFromApi);
