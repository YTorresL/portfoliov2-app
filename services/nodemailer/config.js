import nodemailer from "nodemailer"

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass
    }
})

export const mailOptions = {
    from: email,
    to: email,
    subject: 'YTorres - Portfolio | New message from your website',
    text: 'You have a new message from your website'
}