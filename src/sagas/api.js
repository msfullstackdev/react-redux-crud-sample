export const fetchUsers = () => {
  fetch("https://localhost:44384/api/users", {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(response => {
      response.json();
    })
    .then(user => user, error => "json failed");
};
