document.addEventListener("DOMContentLoaded", function () {
    // Initialize user data
    let users = [
        { name: "Florence Shaw", role: "Creator", lastActive: "Mar 4, 2024", dateAdded: "Mar 1, 2024", quizzesCreated: 5, quizzesModerated: 0 },
        { name: "John Doe", role: "Admin", lastActive: "Mar 3, 2024", dateAdded: "Feb 28, 2024", quizzesCreated: 10, quizzesModerated: 5 },
        { name: "Alice Smith", role: "User", lastActive: "Mar 2, 2024", dateAdded: "Feb 20, 2024", quizzesCreated: 15, quizzesModerated: 0 },
        { name: "Bob Johnson", role: "User", lastActive: "Mar 1, 2024", dateAdded: "Feb 25, 2024", quizzesCreated: 7, quizzesModerated: 0 },
        { name: "Eve Martinez", role: "Creator", lastActive: "Mar 4, 2024", dateAdded: "Mar 2, 2024", quizzesCreated: 3, quizzesModerated: 1 },
        { name: "Sam Wilson", role: "Admin", lastActive: "Mar 3, 2024", dateAdded: "Feb 28, 2024", quizzesCreated: 8, quizzesModerated: 6 },
        { name: "Michael Brown", role: "User", lastActive: "Mar 5, 2024", dateAdded: "Mar 3, 2024", quizzesCreated: 2, quizzesModerated: 0 },
        { name: "Sarah Johnson", role: "Creator", lastActive: "Mar 4, 2024", dateAdded: "Feb 29, 2024", quizzesCreated: 9, quizzesModerated: 2 }
    ];

    let editingIndex = null;
    let currentPage = 1;
    const usersPerPage = 8;

    // DOM Elements
    const usersGrid = document.getElementById("users-grid");
    const popup = document.getElementById("userPopup");
    const closeBtn = document.querySelector(".close-btn");
    const addUserBtn = document.getElementById("add-user-btn");
    const userForm = document.getElementById("userForm");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const roleInput = document.getElementById("role");
    const popupTitle = document.getElementById("popupTitle");
    const searchInput = document.getElementById("search");
    const prevPageBtn = document.getElementById("prevPage");
    const nextPageBtn = document.getElementById("nextPage");
    const pageNumbers = document.getElementById("pageNumbers");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Toggle mobile menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // Get initials for avatar
    function getInitials(name) {
        return name.split(' ').map(part => part[0]).join('').toUpperCase();
    }

    // Get role class for styling
    function getRoleClass(role) {
        return `role-${role.toLowerCase()}`;
    }

    // Render users in grid with pagination
    function renderUsers(page = 1, userList = users) {
        currentPage = page;
        const startIndex = (page - 1) * usersPerPage;
        const endIndex = startIndex + usersPerPage;
        const paginatedUsers = userList.slice(startIndex, endIndex);

        usersGrid.innerHTML = "";
        paginatedUsers.forEach((user, index) => {
            const card = document.createElement("div");
            card.className = "user-card";
            card.innerHTML = `
                        <div class="user-header">
                            <div class="user-avatar">${getInitials(user.name)}</div>
                            <div>
                                <div class="user-name">${user.name}</div>
                                <span class="user-role ${getRoleClass(user.role)}">${user.role}</span>
                            </div>
                        </div>
                        <div class="user-details">
                            <div class="detail-row">
                                <span class="detail-label">Last Active</span>
                                <span class="detail-value">${user.lastActive}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Date Added</span>
                                <span class="detail-value">${user.dateAdded}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Quizzes Created</span>
                                <span class="detail-value">${user.quizzesCreated}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Quizzes Moderated</span>
                                <span class="detail-value">${user.quizzesModerated}</span>
                            </div>
                        </div>
                        <div class="user-actions">
                            <button class="action-btn edit-btn" onclick="editUser(${startIndex + index})">
                                <i class="fas fa-edit"></i> Edit
                            </button>
                            <button class="action-btn delete-btn" onclick="deleteUser(${startIndex + index})">
                                <i class="fas fa-trash"></i> Delete
                            </button>
                        </div>
                    `;
            usersGrid.appendChild(card);
        });

        renderPagination(userList.length);
    }

    // Render pagination controls
    function renderPagination(totalUsers) {
        const totalPages = Math.ceil(totalUsers / usersPerPage);
        pageNumbers.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement("button");
            pageBtn.className = `page-btn page-number ${i === currentPage ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.addEventListener("click", () => renderUsers(i));
            pageNumbers.appendChild(pageBtn);
        }

        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    }

    // Event listeners for pagination buttons
    prevPageBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            renderUsers(currentPage - 1);
        }
    });

    nextPageBtn.addEventListener("click", () => {
        const totalPages = Math.ceil(users.length / usersPerPage);
        if (currentPage < totalPages) {
            renderUsers(currentPage + 1);
        }
    });

    // Popup handling functions
    function openPopup(editMode = false, index = null) {
        popup.classList.add("active");
        if (editMode && index !== null) {
            popupTitle.textContent = "Edit User";
            editingIndex = index;
            const user = users[index];
            usernameInput.value = user.name;
            roleInput.value = user.role.toLowerCase();
            emailInput.value = `${user.name.replace(/\s+/g, '.').toLowerCase()}@example.com`;
        } else {
            popupTitle.textContent = "Add User";
            editingIndex = null;
            userForm.reset();
        }
    }

    function closePopup() {
        popup.classList.remove("active");
    }

    // Add or update user
    function addOrUpdateUser(event) {
        event.preventDefault();

        const newUser = {
            name: usernameInput.value,
            role: roleInput.value.charAt(0).toUpperCase() + roleInput.value.slice(1),
            lastActive: "Just now",
            dateAdded: new Date().toLocaleDateString(),
            quizzesCreated: 0,
            quizzesModerated: 0
        };

        if (editingIndex !== null) {
            users[editingIndex] = newUser;
        } else {
            users.push(newUser);
        }

        renderUsers(currentPage);
        closePopup();
    }

    // Search functionality
    searchInput.addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase();
        const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm) ||
            user.role.toLowerCase().includes(searchTerm)
        );
        renderUsers(1, filteredUsers);
    });

    window.editUser = function (index) {
        openPopup(true, index);
    };

    window.deleteUser = function (index) {
        if (confirm("Are you sure you want to delete this user?")) {
            users.splice(index, 1);
            renderUsers(currentPage);
        }
    };

    // Event listeners
    addUserBtn.addEventListener("click", () => openPopup());
    closeBtn.addEventListener("click", closePopup);
    userForm.addEventListener("submit", addOrUpdateUser);

    // Initial render
    renderUsers();
});
