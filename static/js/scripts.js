document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    if (signupForm) {
        signupForm.onsubmit = async (event) => {
            event.preventDefault();
            const username = document.getElementById("signupUsername").value;
            const password = document.getElementById("signupPassword").value;

            const response = await fetch("/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({ username, password })
            });
            const data = await response.json();
            document.getElementById("responseMessage").innerText = data.message || data.detail;
        };
    }

    if (loginForm) {
        loginForm.onsubmit = async (event) => {
            event.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;

            const response = await fetch("/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({ username, password })
            });
            const data = await response.json();
            document.getElementById("responseMessage").innerText = data.message || data.detail;
        };
    }
});
