import { getStorage, getDownloadURL } from "firebase-admin/storage";
import mime from "mime-types";
import path from "path";
import fs from "fs";

export async function uploadImageByBuffer(file: any, destination: string) {
  const bucket = getStorage().bucket();
  const fileRef = bucket.file(`${destination}/${file.originalname}`);

  await fileRef.save(file.buffer, {
    metadata: {
      contentType: file.mimetype,
    },
  });

  const downloadURL = await getDownloadURL(fileRef);
  return downloadURL;
}

export async function uploadImageByPath(filePath: string, destination: string) {
  const bucket = getStorage().bucket();
  const fileRef = bucket.file(`${destination}/${path.basename(filePath)}`);

  await fileRef.save(
    fs.readFileSync(path.join(__dirname, "../public/images", filePath)),
    {
      metadata: {
        contentType: mime.lookup(filePath) || "image/png",
      },
    }
  );

  const downloadURL = await getDownloadURL(fileRef);
  return downloadURL;
}
