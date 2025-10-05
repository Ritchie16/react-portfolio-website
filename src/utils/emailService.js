import emailjs from "emailjs";

const SERVICE_ID = "";
const TEMPLATE_ID = "";
const PUBLIC_KEY = "";

//initialize EmailJS
emailjs.init(PUBLIC_KEY);

export const sendEmail = async (FormData) => {
    try {
        const result = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: FormData.name,
                from_email: FormData.email,
                message: FormData.message,
                to_name: "Richard Munthali",
            }
        );

        return {success: true, result};
    } catch (error) {
        console.error("Email sending failed", error);
        return {success: false, error};
    }
}