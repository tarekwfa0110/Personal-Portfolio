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
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-1/2"
        >
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                placeholder="Name"
                className="bg-[#222222] rounded-md py-1 pl-2"
                id="name"
                required
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-md py-1 pl-2 bg-[#222222]"
                id="email"
                required
            />
            <label htmlFor="subject">Subject</label>
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="rounded-md py-1 pl-2 bg-[#222222]"
                id="subject"
                required
            />
            <label htmlFor="message">Message</label>
            <textarea
                name="message"
                id="message"
                cols={30}
                rows={5}
                placeholder="Message"
                className="rounded-md py-1 pl-2 bg-[#222222]"
                required
            ></textarea>
            <button
                type="submit"
                className="bg-[#D3E97A] text-[#222222] font-semibold p-3 rounded-md"
            >
                Send
            </button>
            {/* Success/Error Messages */}
            {formStatus === "success" && (
                <p className="text-green-500 font-semibold mt-4">
                    🎉 Your message has been sent successfully!
                </p>
            )}
            {formStatus === "error" && (
                <p className="text-red-500 font-semibold mt-4">
                    ❌ Oops! {errorMessage}
                </p>
            )}
        </form>
    );
};

export default ContactForm;