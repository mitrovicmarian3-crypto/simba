import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: 'simbafacility@outlook.com',
      subject: `Kontaktanfrage: ${validatedData.subject}`,
      text: `Name: ${validatedData.name}\nFirma: ${validatedData.company || 'Nicht angegeben'}\nEmail: ${validatedData.email}\nTelefon: ${validatedData.phone || 'Nicht angegeben'}\nBetreff: ${validatedData.subject}\n\nNachricht:\n${validatedData.message}`,
      html: `
        <h3>Neue Kontaktanfrage von der Website</h3>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Firma:</strong> ${validatedData.company || 'Nicht angegeben'}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Telefon:</strong> ${validatedData.phone || 'Nicht angegeben'}</p>
        <p><strong>Betreff:</strong> ${validatedData.subject}</p>
        <br>
        <p><strong>Nachricht:</strong></p>
        <p style="white-space: pre-wrap;">${validatedData.message}</p>
      `,
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Error' }, { status: 400 });
  }
}
