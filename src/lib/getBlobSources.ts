import fs from "fs";
import path from "path";

export async function getBlobSources() {
  const blobDirectory = path.join(process.cwd(), "public/assets/blobs");
  const files = fs.readdirSync(blobDirectory);

  return files.map((file) => `/assets/blobs/${file}`);
}
