import { NextRequest, NextResponse } from "next/server";
import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY!,
  process.env.MAILJET_SECRET_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, profession } = body;

    if (!name || !email || !phone || !profession) {
      return NextResponse.json(
        { error: "Molimo popunite sva obavezna polja" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Molimo unesite validnu email adresu" },
        { status: 400 }
      );
    }

    const mailData = {
      Messages: [
        {
          From: {
            Email: process.env.SITE_MAIL_SENDER!,
            Name: "OPS Forma za učlanjenje",
          },
          To: [
            {
              Email: process.env.SITE_MAIL_RECEIVER!,
              Name: "OPS Udruženje",
            },
          ],
          Subject: `Novi zahtev za članstvo od ${name}`,
          TextPart: `
Novi zahtev za članstvo u udruženju OPS

Ime i prezime: ${name}
Email: ${email}
Telefon: ${phone}
Zanimanje: ${profession}
`,
          HTMLPart: `
            <h2>Novi zahtev za članstvo u udruženju OPS</h2>
            <p><strong>Ime i prezime:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>Zanimanje:</strong> ${profession}</p>
          `,
        },
      ],
    };

    await mailjet.post("send", { version: "v3.1" }).request(mailData);

    return NextResponse.json(
      {
        message:
          "Zahtev za članstvo uspešno poslat! Kontaktiraćemo vas uskoro.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending membership email:", error);
    return NextResponse.json(
      { error: "Greška prilikom slanja zahteva. Molimo pokušajte ponovo." },
      { status: 500 }
    );
  }
}
