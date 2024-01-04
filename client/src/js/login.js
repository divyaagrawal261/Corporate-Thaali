const loginurl = "https://corporate-thaali-backend.onrender.com/users/login";
const getUserDetailsUrl = "https://corporate-thaali-backend.onrender.com/users/current";

const loginBtn = document.querySelector(".log_butt");
var accessToken;

const login = (event) => {
  event.preventDefault();
  const loginEmail = document.querySelector(".loginEmail").value;
  const loginPassword = document.querySelector(".loginPassword").value;
  try {
    fetch(loginurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data,"is the data");
        accessToken = data.token;
        window.location.href=data.redirectUrl;
        setAccessTokenWithExpiry(accessToken, 15)
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

function setAccessTokenWithExpiry(accessToken, expiresInMinutes) {
  const now = new Date();
  const expirationTime = now.getTime() + expiresInMinutes * 60 * 1000; 
  localStorage.setItem('accessToken', JSON.stringify({
    token: accessToken,
    expiry: expirationTime
  }));
}

loginBtn.addEventListener("click", login);
