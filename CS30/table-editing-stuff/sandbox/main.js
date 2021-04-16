// Add Event Listeners on every <td>

let tdEls = document.querySelectorAll("td");

for (let i = 0; i < tdEls.length; i++) {
  tdEls[i].addEventListener("click", convertToInput);
}

function convertToInput(e) {
  // Get the current innerHTML of clicked <td>
  let tdContent = e.target.innerHTML;

  // Create an input element with the current innerHTML as the value
  let inputEl = document.createElement("input");
  inputEl.value = tdContent;
  inputEl.addEventListener("keydown", processInputChange);

  // Replace <td> content with the input element
  e.target.innerHTML = "";
  e.target.append(inputEl);
}

function processInputChange(e) {
  if (e.keyCode === 13) { // Enter key
    // Turn table cell back into a <td> with the new value
    let newContent = e.target.value;
    let tdEl = e.target.parentElement;
    let rowEl = tdEl.parentElement;
    tdEl.innerHTML = newContent;

    // Submit change to server
    console.log("hi");

    document.location = `index.php?id=${rowEl.dataset.id}`;

    // fetch("test.php", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       id: rowEl.dataset.id
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8"
    //     }
    //   })
    //   .catch(err => console.log(err));
  }
}