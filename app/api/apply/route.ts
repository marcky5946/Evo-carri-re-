import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type Application = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  region: string;
  currentRole?: string;
  source?: string;
  message?: string;
  submittedAt: string;
};

const DB_PATH = path.join(process.cwd(), "applications.json");

function readApplications(): Application[] {
  try {
    if (!fs.existsSync(DB_PATH)) return [];
    const raw = fs.readFileSync(DB_PATH, "utf-8");
    return JSON.parse(raw) as Application[];
  } catch {
    return [];
  }
}

function saveApplication(app: Application): void {
  const apps = readApplications();
  apps.push(app);
  fs.writeFileSync(DB_PATH, JSON.stringify(apps, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Partial<Application>;

    const { firstName, lastName, email, phone, region } = body;

    if (!firstName || !lastName || !email || !phone || !region) {
      return NextResponse.json(
        { error: "Champs requis manquants (prénom, nom, email, téléphone, région)." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    const application: Application = {
      id: `app_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      region: region.trim(),
      currentRole: body.currentRole?.trim() ?? "",
      source: body.source ?? "",
      message: body.message?.trim() ?? "",
      submittedAt: new Date().toISOString(),
    };

    saveApplication(application);

    return NextResponse.json(
      {
        success: true,
        message: "Candidature reçue. Nous vous contacterons dans 24-48h.",
        id: application.id,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[/api/apply]", err);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Simple read endpoint (protect in production)
  const apps = readApplications();
  return NextResponse.json({ count: apps.length, applications: apps });
}
