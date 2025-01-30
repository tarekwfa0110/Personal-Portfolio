import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm: React.FC = () => {
    const [state, handleSubmit] = useForm("xrbgwqaa"); // Your Formspree form ID

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full sm:w-3/4 md:w-1/2">
            {/* Name Field */}
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="bg-[#222222] rounded-md py-1 pl-2 w-full"
                required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            {/* Email Field */}
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="bg-[#222222] rounded-md py-1 pl-2 w-full"
                required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            {/* Message Field */}
            <label htmlFor="message">Message</label>
            <textarea
                name="message"
                id="message"
                cols={30}
                rows={5}
                placeholder="Message"
                className="bg-[#222222] rounded-md py-1 pl-2 w-full"
                required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            {/* Submit Button */}
            <button
                type="submit"
                disabled={state.submitting}
                className={`bg-[#D3E97A] text-black font-semibold p-3 rounded-md w-fit ${state.submitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
            >
                {state.submitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Success Message */}
            {state.succeeded && <p className="text-green-500">Message sent successfully! 🎉</p>}
        </form>
    );
};

export default ContactForm;