export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user.Token);

  if (user.Token) {
    // For Spring Boot back-end
    // return { Authorization: "Bearer " + user.accessToken };

    // for Node.js Express back-end
    return { "Auth-Token": user.Token };
  } else {
    return {};
  }
}
