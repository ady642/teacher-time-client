import {Client} from "@/common/utils/client";
import ContactForm from "@/modules/Contact/models/ContactForm";

export default class ContactClient extends Client {
    sendMail = async (contactForm = new ContactForm()) => {
    	await this.client.post(`${process.env.SERVER_URL}/mail/contact`, contactForm)
    }
}
