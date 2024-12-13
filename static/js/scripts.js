document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.onsubmit = async (event) => {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            try {
                // Use URLSearchParams to encode form data
                const response = await fetch("/register/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({ username, password }),
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
