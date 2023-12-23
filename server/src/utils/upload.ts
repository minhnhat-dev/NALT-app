import { getStorage } from "firebase-admin/storage";

export async function uploadImage(file: any, destination: string) {
  const bucket = getStorage().bucket();
  const bucketFile = bucket.file(`${destination}/${file.originalname}`);

  await bucketFile.save(file.buffer, {
    metadata: {
      contentType: file.mimetype,
    },
  });

  const [url] = await bucketFile.getSignedUrl({
    action: "read",
    expires: Date.now() + 1000 * 60 * 60 * 24 * 365,
  });

  return url;
}
