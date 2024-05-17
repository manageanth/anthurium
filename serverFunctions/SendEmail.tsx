"use server"
import { EmailTemplate, userForm } from '@/components/EmailTemplate';
import { Resend } from 'resend';

export const sendEmail = async (seenForm: userForm) => {
    try {
        const resend = new Resend('re_7Si8ZSyp_DzoWeYjR3FHpBB1kEAYS8x7y');

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "quantumbuilder32@gmail.com",
            subject: `new customer inquiry from - ${seenForm.name}`,
            react: <EmailTemplate seenForm={seenForm} />,
        });

        console.log(`$sending mail succesfully `);

        return true
    } catch (error) {
        console.log(`$error sending email`, error);
        return false
    }
}