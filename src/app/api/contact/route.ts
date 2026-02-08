import { NextRequest, NextResponse } from "next/server";
import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY!,
  process.env.MAILJET_SECRET_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Molimo popunite sva obavezna polja" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Molimo unesite validnu email adresu" },
        { status: 400 }
      );
    }

    // Send email via Mailjet
    const mailData = {
      Messages: [
        {
          From: {
            Email: process.env.SITE_MAIL_SENDER!,
            Name: "OPS Kontakt Forma",
          },
          To: [
            {
              Email: process.env.SITE_MAIL_RECEIVER!,
              Name: "OPS Udruženje",
            },
          ],
          Subject: `Nova poruka sa sajta od ${name}`,
          TextPart: `
Ime: ${name}
Email: ${email}
${phone ? `Telefon: ${phone}` : ""}

Poruka:
${message}
          `,
          HTMLPart: `
            <h2>Nova poruka sa kontakt forme</h2>
            <p><strong>Ime:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
            <h3>Poruka:</h3>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        },
      ],
    };

    await mailjet.post("send", { version: "v3.1" }).request(mailData);

    return NextResponse.json(
      { message: "Poruka uspešno poslata!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Greška prilikom slanja poruke. Molimo pokušajte ponovo." },
      { status: 500 }
    );
  }
}
