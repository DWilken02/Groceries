window.onload = () => {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
}

function handleFormSubmission(event) {
  event.preventDefault();
  document.getElementById("grocery-list").style.display="none";
  let inputs = document.querySelectorAll("input");
  const ulElement = document.createElement("ul");
  let uppercaseStringArray = [];
  inputs.forEach(function(itemInput) {
    const uppercaseString = itemInput.value.toUpperCase();
    uppercaseStringArray.push(uppercaseString);   
  });
  uppercaseStringArray.sort();
  uppercaseStringArray.forEach(function(string) {
    const liElement = document.createElement("li");
    liElement.append(string);
    ulElement.append(liElement);
  })
  const body = document.querySelector("body");
  body.append(ulElement);
}