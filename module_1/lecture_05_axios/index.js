function fetchUserInfo() {
  const inputEle = document.getElementById("input");
  const username = inputEle.value;

  const imageEle = document.getElementById("avatarImg");
  const nameEle = document.getElementById("profileName");
  const companyEle = document.getElementById("profileCompany");
  const locationEle = document.getElementById("profileLocation");

  axios
    .get("https://api.github.com/users/" + username)
    .then(function (response) {
        if(response.status === 200){
            const data = response.data;
            imageEle.src = data.avatar_url;
            nameEle.innerText = data.name;
            companyEle.innerText = data.company;
            locationEle.innerText = data.location;
        }
    })
    .catch(function (error) {
      console.log(error);
    });
}
