
document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  var age = document.getElementById("ageInput").value;

  if (isNaN(age) || age === "") {
    alert("Please enter a valid age.");
    return;
  }

  if (age < 18) {
    alert("Sorry, you are underaged. Come back when you grew up!");
    // Redirect or display a message for underaged users.
  } else {
    window.location.href = "alcoholPage.html"; // Redirect to the alcohol page.
  }
});
