document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.onsubmit = async (event) => {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            try {
                const response = await fetch("/register/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, password }),
                });

                const data = await response.json();
                const responseMessage = document.getElementById("responseMessage");

                if (response.ok) {
                    responseMessage.textContent = data.message;
                    responseMessage.className = "success";
                } else {
                    responseMessage.textContent = data.detail || "Error during signup";
                    responseMessage.className = "error";
                }
            } catch (error) {
                console.error("Error:", error);
                document.getElementById("responseMessage").textContent = "An unexpected error occurred.";
            }
        };
    }
});

/**
 * Redirect to the login page.
 */
function redirectToLogin() {
    window.location.href = "/login"; // Adjust the URL if necessary
}
