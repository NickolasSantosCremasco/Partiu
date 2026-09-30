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
        text: `
            
            NOVO PEDIDO — PARTIU

            📍 Local: ${data.location}
            💰 Orçamento: ${data.budget}
            👥 Com quem: ${data.company}
            📅 Data: ${data.date}
            🎯 Tipo de rolê: ${data.type}
            📝 Observações: ${data.notes}
        `
    });


    return new Response("recebido");
    

}