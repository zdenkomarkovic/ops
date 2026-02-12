"use client";

import { useState } from "react";
import { FaSpinner, FaCheckCircle } from "react-icons/fa";

type Termin = { datumOd?: string; datumDo?: string; mesto?: string };

type Props = {
  nazivKursa: string;
  termini?: Termin[];
};

function formatTermin(t: Termin) {
  const fmt = (iso?: string) =>
    iso
      ? new Date(iso).toLocaleDateString("sr-RS", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      : "";
  const period =
    t.datumOd && t.datumDo
      ? `${fmt(t.datumOd)} – ${fmt(t.datumDo)}`
      : fmt(t.datumOd);
  return t.mesto ? `${period} · ${t.mesto}` : period;
}

const RADNA_OBLAST_OPTIONS = [
  "Da",
  "Ne",
  "Želim da počnem da radim u ovoj oblasti",
  "Radim sa decom ali ne u medicinskoj struci",
  "Ostalo",
];

const initialForm = {
  termin: "",
  ime: "",
  email: "",
  telefon: "",
  jmbgLicenca: "",
  zanimanje: "",
  radnaOblast: "",
  radnaOblastOstalo: "",
  placanje: "",
  posaljiCV: "",
  saglasnost: "",
};

export default function PrijavaForm({ nazivKursa, termini }: Props) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<typeof initialForm>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: keyof typeof initialForm, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const validate = () => {
    const e: Partial<typeof initialForm> = {};
    if (!form.termin) e.termin = "Izaberite termin.";
    if (!form.ime.trim()) e.ime = "Obavezno polje.";
    if (!form.email.trim()) e.email = "Obavezno polje.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Unesite ispravnu email adresu.";
    if (!form.telefon.trim()) e.telefon = "Obavezno polje.";
    if (!form.jmbgLicenca.trim()) e.jmbgLicenca = "Obavezno polje.";
    if (!form.zanimanje.trim()) e.zanimanje = "Obavezno polje.";
    if (!form.radnaOblast) e.radnaOblast = "Izaberite opciju.";
    if (form.radnaOblast === "Ostalo" && !form.radnaOblastOstalo.trim())
      e.radnaOblastOstalo = "Unesite opis.";
    if (!form.placanje) e.placanje = "Izaberite način plaćanja.";
    if (!form.posaljiCV) e.posaljiCV = "Izaberite opciju.";
    if (!form.saglasnost) e.saglasnost = "Obavezno je dati saglasnost.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/prijava", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kurs: nazivKursa, ...form }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Greška");
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Greška pri slanju.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <FaCheckCircle className="text-green-500 mx-auto mb-3" size={40} />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Prijava poslata!</h3>
        <p className="text-gray-600">
          Hvala na prijavi. Kontaktiraćemo vas u najkraćem roku.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 md:p-8 space-y-5"
    >
      <h2 className="text-xl font-bold text-gray-900">Prijava za kurs</h2>

      {/* Kurs – read only */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Kurs
        </label>
        <input
          type="text"
          value={nazivKursa}
          readOnly
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-600 cursor-default"
        />
      </div>

      {/* Termin */}
      {termini && termini.length > 0 && (
        <Field label="Termin" error={errors.termin} required>
          <select
            value={form.termin}
            onChange={(e) => set("termin", e.target.value)}
            className={selectCls(!!errors.termin)}
          >
            <option value="">— Izaberite termin —</option>
            {termini.map((t, i) => (
              <option key={i} value={formatTermin(t)}>
                {formatTermin(t)}
              </option>
            ))}
          </select>
        </Field>
      )}

      {/* Ime i prezime */}
      <Field label="Ime i prezime" error={errors.ime} required>
        <input
          type="text"
          value={form.ime}
          onChange={(e) => set("ime", e.target.value)}
          className={inputCls(!!errors.ime)}
          placeholder="Npr. Marija Petrović"
        />
      </Field>

      {/* Email */}
      <Field label="Mejl adresa" error={errors.email} required>
        <input
          type="email"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          className={inputCls(!!errors.email)}
          placeholder="ime@primer.com"
        />
      </Field>

      {/* Telefon */}
      <Field label="Kontakt telefon" error={errors.telefon} required>
        <input
          type="tel"
          value={form.telefon}
          onChange={(e) => set("telefon", e.target.value)}
          className={inputCls(!!errors.telefon)}
          placeholder="+381 6x xxx xxxx"
        />
      </Field>

      {/* JMBG i licenca */}
      <Field label="JMBG i broj licence" error={errors.jmbgLicenca} required>
        <input
          type="text"
          value={form.jmbgLicenca}
          onChange={(e) => set("jmbgLicenca", e.target.value)}
          className={inputCls(!!errors.jmbgLicenca)}
          placeholder="JMBG / broj licence"
        />
      </Field>

      {/* Zanimanje */}
      <Field label="Po zanimanju sam" error={errors.zanimanje} required>
        <input
          type="text"
          value={form.zanimanje}
          onChange={(e) => set("zanimanje", e.target.value)}
          className={inputCls(!!errors.zanimanje)}
          placeholder="npr. fizioterapeut, defektolog..."
        />
      </Field>

      {/* Radna oblast */}
      <Field
        label="Da li već radite u oblasti dečije habilitacije i rehabilitacije?"
        error={errors.radnaOblast}
        required
      >
        <select
          value={form.radnaOblast}
          onChange={(e) => set("radnaOblast", e.target.value)}
          className={selectCls(!!errors.radnaOblast)}
        >
          <option value="">— Izaberite —</option>
          {RADNA_OBLAST_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>

      {/* Ostalo – conditionally shown */}
      {form.radnaOblast === "Ostalo" && (
        <Field label="Ostalo – opišite" error={errors.radnaOblastOstalo} required>
          <input
            type="text"
            value={form.radnaOblastOstalo}
            onChange={(e) => set("radnaOblastOstalo", e.target.value)}
            className={inputCls(!!errors.radnaOblastOstalo)}
            placeholder="Unesite opis..."
            autoFocus
          />
        </Field>
      )}

      {/* Plaćanje */}
      <Field label="Način plaćanja" error={errors.placanje} required>
        <select
          value={form.placanje}
          onChange={(e) => set("placanje", e.target.value)}
          className={selectCls(!!errors.placanje)}
        >
          <option value="">— Izaberite —</option>
          <option value="U celosti (15% popust)">
            U celosti (15% popust)
          </option>
          <option value="Na rate">Na rate</option>
        </select>
      </Field>

      {/* CV */}
      <Field label="Želim da mi pošalješ svoj CV" error={errors.posaljiCV} required>
        <select
          value={form.posaljiCV}
          onChange={(e) => set("posaljiCV", e.target.value)}
          className={selectCls(!!errors.posaljiCV)}
        >
          <option value="">— Izaberite —</option>
          <option value="Da">Da</option>
          <option value="Ne">Ne</option>
        </select>
      </Field>

      {/* Saglasnost */}
      <Field
        label="Saglasnost za obradu podataka"
        error={errors.saglasnost}
        required
        hint="Saglasan/saglasna sam da se moji podaci o ličnosti prikupljaju i obrađuju u svrhu izrade sertifikata, u skladu sa važećim propisima o zaštiti podataka o ličnosti. Upoznat/a sam da mogu povući pristanak u svakom trenutku."
      >
        <select
          value={form.saglasnost}
          onChange={(e) => set("saglasnost", e.target.value)}
          className={selectCls(!!errors.saglasnost)}
        >
          <option value="">— Izaberite —</option>
          <option value="Da">Da</option>
          <option value="Ne (sertifikat neće biti potpun)">
            Ne (sertifikat neće biti potpun)
          </option>
        </select>
      </Field>

      {status === "error" && (
        <p className="text-red-600 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
      >
        {status === "loading" ? (
          <>
            <FaSpinner className="animate-spin" size={16} />
            Slanje...
          </>
        ) : (
          "Pošalji prijavu"
        )}
      </button>
    </form>
  );
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function Field({
  label,
  error,
  required,
  hint,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {hint && (
        <p className="text-xs text-gray-500 mb-2 leading-relaxed">{hint}</p>
      )}
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

const base =
  "w-full rounded-xl border px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-400 transition";

function inputCls(hasError: boolean) {
  return `${base} ${hasError ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"}`;
}

function selectCls(hasError: boolean) {
  return `${base} ${hasError ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"}`;
}
