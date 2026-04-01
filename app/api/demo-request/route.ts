import { NextResponse } from "next/server";
import { appendDemoRequest } from "@/lib/demo-requests";

type DemoRequestBody = {
  name?: string;
  email?: string;
  clinicName?: string;
  specialty?: string;
  monthlyVisits?: string;
  notes?: string;
};

function normalize(value: string | undefined) {
  return value?.trim() ?? "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as DemoRequestBody;

  const name = normalize(body.name);
  const email = normalize(body.email);
  const clinicName = normalize(body.clinicName);
  const specialty = normalize(body.specialty);
  const monthlyVisits = normalize(body.monthlyVisits);
  const notes = normalize(body.notes);

  if (!name || !email || !clinicName || !specialty) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (
    name.length > 120 ||
    email.length > 160 ||
    clinicName.length > 160 ||
    specialty.length > 120 ||
    monthlyVisits.length > 60 ||
    notes.length > 1000
  ) {
    return NextResponse.json(
      { error: "One or more fields are too long." },
      { status: 400 },
    );
  }

  const submission = await appendDemoRequest({
    name,
    email,
    clinicName,
    specialty,
    monthlyVisits,
    notes,
  });

  return NextResponse.json({ ok: true, submissionId: submission.id });
}
