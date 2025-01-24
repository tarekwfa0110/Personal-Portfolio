import React, { useState } from "react";

const ContactForm: React.FC = () => {
    const [formStatus, setFormStatus] = useState<"success" | "error" | null>(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formspree.io/f/xrbgwqaa", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setFormStatus("success");
                setErrorMessage("");
                e.currentTarget.reset();
            } else {
                const errorData = await response.json();
                setFormStatus("error");

                if (errorData.errors && errorData.errors.length > 0) {
                    setErrorMessage(errorData.errors.map((err: { message: string }) => err.message).join(", "));
                } else {
                    setErrorMessage("An unexpected server error occurred. Please try again.");
                }
            }
        } catch (error) {
            setFormStatus("error");
            if (error instanceof Error && error.message === "Failed to fetch") {
                setErrorMessage("Network error: Please check your internet connection.");
            } else {
                setErrorMessage("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Add your form fields here */}
            <button type="submit">Submit</button>
            {formStatus === "success" && <p>Form submitted successfully!</p>}
            {formStatus === "error" && <p>{errorMessage}</p>}
        </form>
    );
};

export default ContactForm;