import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type DemoRequest = {
  id: string;
  name: string;
  email: string;
  clinicName: string;
  specialty: string;
  monthlyVisits: string;
  notes: string;
  createdAt: string;
};

const dataDirectory = path.join(process.cwd(), "data");
const dataFile = path.join(dataDirectory, "demo-requests.json");

async function ensureDataFile() {
  await mkdir(dataDirectory, { recursive: true });

  try {
    await readFile(dataFile, "utf8");
  } catch {
    await writeFile(dataFile, "[]\n", "utf8");
  }
}

export async function appendDemoRequest(
  request: Omit<DemoRequest, "id" | "createdAt">,
) {
  await ensureDataFile();

  const existing = await readFile(dataFile, "utf8");
  const parsed = JSON.parse(existing) as DemoRequest[];

  const entry: DemoRequest = {
    ...request,
    id: `demo_${Date.now()}`,
    createdAt: new Date().toISOString(),
  };

  parsed.unshift(entry);
  await writeFile(dataFile, `${JSON.stringify(parsed, null, 2)}\n`, "utf8");

  return entry;
}
