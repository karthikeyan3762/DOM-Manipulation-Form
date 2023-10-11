const dataForm = document.getElementById('data-form');
const dataTable = document.getElementById('data-table');
const tbody = dataTable.querySelector('tbody');

dataForm.addEventListener('submit', function (e) {
    e.preventDefault();

    
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
    const food = Array.from(foodCheckboxes).map(checkbox => checkbox.value).join(', ');
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${food}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    // Append the row to the table
    tbody.appendChild(row);

    // Clear form fields
    dataForm.reset();
});