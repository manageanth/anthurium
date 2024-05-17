"use server"
import { EmailTemplate, userForm } from '@/components/EmailTemplate';
import { Resend } from 'resend';

export const sendEmail = async (seenForm: userForm) => {
    try {
        const resend = new Resend('re_6e8Av29e_6HNqzVjeSyB1Z9HmFVW39wU6');

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "manageanth@gmail.com",
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