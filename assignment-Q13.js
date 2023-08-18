// Save Function
function handleSave() {

  // Edit Function
  function handleEdit(event) {
    let row = event.target.parentNode.parentNode;

    // Get the cells within the row
    let nameCell = row.cells[0];
    let emailCell = row.cells[1];

    // Prompt the user to enter updated values
    let nameInput =
      prompt("Enter the updated name:",
        nameCell.innerHTML);
    let emailInput =
      prompt("Enter the updated email:",
        emailCell.innerHTML);

    // Update the cell contents with the new values
    nameCell.innerHTML = nameInput;
    emailCell.innerHTML = emailInput;
  }

  // Delete Function
  function handleDelete(event) {
    var td = event.target.parentNode;
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
  }

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const tbody = document.getElementById('tableBody');
  const tr = document.createElement('tr');
  const tdName = document.createElement('td');
  tdName.innerText = name;
  const tdEmail = document.createElement('td');
  tdEmail.innerText = email;
  const tdAction = document.createElement('td');
  const btnEdit = document.createElement('button');
  btnEdit.innerText = "Edit";
  btnEdit.style.margin = "6px"
  btnEdit.style.backgroundColor = "rgb(78, 169, 226)"
  btnEdit.style.color = "white"
  btnEdit.addEventListener("click", handleEdit);

  const btnDelete = document.createElement('button');
  btnDelete.innerText = "Delete";
  btnDelete.style.backgroundColor = "red"
  btnDelete.style.color = "white"
  btnDelete.addEventListener("click", handleDelete);

  tdAction.append(btnEdit, btnDelete);
  tr.append(tdName, tdEmail, tdAction);
  tbody.appendChild(tr);
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
}