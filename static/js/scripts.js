document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    const showMessage = (message, isSuccess = false) => {
        const responseMessage = document.getElementById("responseMessage");
        responseMessage.innerText = message;
        responseMessage.className = isSuccess ? "success" : "error";
    };

    if (signupForm) {
        signupForm.onsubmit = async (event) => {
            event.preventDefault();
            const username = document.getElementById("signupUsername").value.trim();
            const password = document.getElementById("signupPassword").value.trim();

            if (username.length < 3 || password.length < 6) {
                showMessage("Username must be at least 3 characters and password at least 6 characters.");
                return;
            }

            const response = await fetch("/register/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ username, password })
            });
            const data = await response.json();
            showMessage(data.message || data.detail, response.ok);
        };
    }

    if (loginForm) {
        loginForm.onsubmit = async (event) => {
            event.preventDefault();
            const username = document.getElementById("loginUsername").value.trim();
            const password = document.getElementById("loginPassword").value.trim();

            const response = await fetch("/login/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ username, password })
            });
            const data = await response.json();
            showMessage(data.message || data.detail, response.ok);
        };
    }
});
