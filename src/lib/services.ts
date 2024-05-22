'use server';

import nodemailer from 'nodemailer';
import { TransportOptions } from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVER_SERVICE,
  port: process.env.EMAIL_SERVER_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
} as TransportOptions);

export async function sendMail(obj: {
  name: string;
  email: string;
  message: string;
}) {
  const mailOptions = {
    from: obj.email,
    to: process.env.EMAIL_SERVER_USER,
    subject: 'Contact form submission',
    text: obj.message,
    html: `
		<p>${obj.message}</p>
		<p>${obj.name}</p>
		<p>${obj.email}</p>
		`,
  };

  await transporter.sendMail(mailOptions);
}
