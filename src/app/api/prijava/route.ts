import { NextRequest, NextResponse } from "next/server";
import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY!,
  process.env.MAILJET_SECRET_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      kurs,
      termin,
      ime,
      email,
      telefon,
      jmbgLicenca,
      zanimanje,
      radnaOblast,
      radnaOblastOstalo,
      placanje,
      posaljiCV,
      saglasnost,
    } = body;

    if (!ime || !email || !telefon || !jmbgLicenca || !zanimanje || !radnaOblast || !placanje || !posaljiCV || !saglasnost) {
      return NextResponse.json(
        { error: "Molimo popunite sva obavezna polja." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Molimo unesite validnu email adresu." },
        { status: 400 }
      );
    }

    const radnaOblastPrikaz =
      radnaOblast === "Ostalo" && radnaOblastOstalo
        ? `Ostalo: ${radnaOblastOstalo}`
        : radnaOblast;

    const htmlBody = `
      <h2 style="color:#2563eb;">Nova prijava za kurs</h2>
      <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
        <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9;width:220px;">Kurs</td><td style="padding:8px;">${kurs}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9;">Termin</td><td style="padding:8px;">${termin}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9;">Ime i prezime</td><td style="padding:8px;">${ime}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9;">Email</td><td style="padding:8px;">${email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9;">Telefon</td><td style="padding:8px;">${telefon}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9;">JMBG i broj licence</td><td style="padding:8px;">${jmbgLicenca}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9;">Zanimanje</td><td style="padding:8px;">${zanimanje}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9;">Radna oblast</td><td style="padding:8px;">${radnaOblastPrikaz}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9;">Način plaćanja</td><td style="padding:8px;">${placanje}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9;">Slanje CV-a</td><td style="padding:8px;">${posaljiCV}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9;">Saglasnost</td><td style="padding:8px;">${saglasnost}</td></tr>
      </table>
    `;

    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.SITE_MAIL_SENDER!,
            Name: "OPS Prijava za kurs",
          },
          To: [
            {
              Email: process.env.SITE_MAIL_RECEIVER!,
              Name: "OPS Udruženje",
            },
          ],
          Subject: `Prijava za kurs: ${kurs} – ${ime}`,
          HTMLPart: htmlBody,
        },
      ],
    });

    return NextResponse.json({ message: "Prijava uspešno poslata!" }, { status: 200 });
  } catch (error) {
    console.error("Greška pri slanju prijave:", error);
    return NextResponse.json(
      { error: "Greška pri slanju. Molimo pokušajte ponovo." },
      { status: 500 }
    );
  }
}
