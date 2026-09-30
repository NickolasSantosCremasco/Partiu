import nodemailer from "nodemailer";

export async function POST(request: any) {
    const data = await request.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        await transporter.sendMail({ 
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "Novo Pedido do Partiu",
            text: JSON.stringify(data),
        });

    return new Response("recebido")
}