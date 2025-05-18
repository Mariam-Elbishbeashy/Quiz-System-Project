/* public\js\admin.js */

// Section: Initialize User Data
document.addEventListener("DOMContentLoaded", function () {
 let users = [
    { name: "Florence Shaw", role: "Creator", lastActive: "Mar 4, 2024", dateJoined: "Mar 1, 2024", quizzesCreated: 5, quizzesModerated: 0 },
    { name: "John Doe", role: "Admin", lastActive: "Mar 3, 2024", dateJoined: "Feb 28, 2024", quizzesCreated: 10, quizzesModerated: 5 },
    { name: "Alice Smith", role: "User", lastActive: "Mar 2, 2024", dateJoined: "Feb 20, 2024", quizzesCreated: 15,quizzesModerated: 0 },
    { name: "Bob Johnson", role: "User", lastActive: "Mar 1, 2024", dateJoined: "Feb 25, 2024", quizzesCreated: 7,quizzesModerated: 0 },
    { name: "Eve Martinez", role: "Creator", lastActive: "Mar 4, 2024", dateJoined: "Mar 2, 2024", quizzesCreated: 3, quizzesModerated: 1 },
    { name: "Sam Wilson", role: "Admin", lastActive: "Mar 3, 2024", dateJoined: "Feb 28, 2024", quizzesCreated: 8, quizzesModerated: 6 }
];


    let editingIndex = null; 

    // Section: Get DOM Elements
    const userTable = document.getElementById("user-table");
    const popup = document.getElementById("userPopup");
    const closeBtn = document.querySelector(".close-btn");
    const addUserBtn = document.getElementById("add-user-btn");
    const userForm = document.getElementById("userForm");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const roleInput = document.getElementById("role");

    // Section: Render Users in Table
    function renderUsers() {
        userTable.innerHTML = "";
        users.forEach((user, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.role}</td>
        <td>${user.lastActive}</td>
        <td>${user.dateAdded}</td>
        <td>${user.quizzesCreated}</td>
        <td>${user.quizzesModerated}</td>
        <td>
        <button class="edit-btn" style="display: inline-block; margin-right: 5px;" onclick="editUser(${index})">Edit</button>
        <button class="delete-btn" style="display: inline-block;" onclick="deleteUser(${index})">Delete</button>
        </td>
    `;
            userTable.appendChild(row);
        });
    }

    // Section: Popup Handling Functions
    function openPopup(editMode = false) {
        popup.classList.add("active");
        if (!editMode) {
            userForm.reset();
            editingIndex = null;
        }
    }

    function closePopup() {
        popup.classList.remove("active");
    }

    // Section: Add or Update User
    function addOrUpdateUser(event) {
        event.preventDefault();

        const newUser = {
            name: usernameInput.value,
            role: roleInput.value,
            lastActive: "Just now",
            dateAdded: new Date().toLocaleDateString(),
            quizzesCreated: 0,
            quizzesModerated: 0
        };

        if (editingIndex !== null) {
            users[editingIndex] = newUser;
            editingIndex = null;
        } else {
            users.push(newUser);
        }

        renderUsers();
        closePopup();
    }

    // Section: Edit User
    window.editUser = function (index) {
        editingIndex = index;
        const user = users[index];

        usernameInput.value = user.name;
        roleInput.value = user.role;

        openPopup(true);
    };

    // Section: Delete User
    window.deleteUser = function (index) {
        users.splice(index, 1);
        renderUsers();
    };

    // Section: Event Listeners
    addUserBtn.addEventListener("click", () => openPopup());
    closeBtn.addEventListener("click", closePopup);
    userForm.addEventListener("submit", addOrUpdateUser);

    // Section: Initial Render
    renderUsers();
});

// Section: User Search Functionality
document.getElementById("search").addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchValue));

    renderFilteredUsers(filteredUsers);
});

// Section: Search Filtering in Table
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const userTable = document.getElementById("user-table");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();
        const rows = userTable.getElementsByTagName("tr");

        for (let row of rows) {
            let cells = row.getElementsByTagName("td");
            let match = false;

            for (let cell of cells) {
                if (cell.textContent.toLowerCase().includes(searchText)) {
                    match = true;
                    break;
                }
            }

            row.style.display = match ? "" : "none";
        }
    });
});
