// Welcoming text
let userName = prompt("Enter your name:");
if (userName) {
  document.getElementById("welcome").innerText = "Hi " + userName;
}

// Form validation
document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("messageInput").value;

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("All fields must be filled!");
    return;
  }

  document.getElementById("result").innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
});