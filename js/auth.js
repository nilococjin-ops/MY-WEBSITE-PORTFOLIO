// PRELOADER
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if(preloader){
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 600);
    }
});

// LOGIN SYSTEM
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;

        if (user === "nilo" && pass === "masternilo") {
            localStorage.setItem("loggedIn", "true");
            window.location.href = "index.html";
        } else {
            document.getElementById("errorMessage").textContent =
                "Invalid username or password.";
        }
    });
}

// PROTECTED PAGES
if (!loginForm) {
    // Only redirect if not logged in
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
}

// LOGOUT BUTTON WITH CONFIRMATION
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        const confirmLogout = confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            localStorage.removeItem("loggedIn");
            window.location.href = "login.html";
        }
        // If user clicks Cancel, do nothing
    });
}
