import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

const upload = async (file) => {
  if (!file) {
    throw new Error("No file provided for upload");
  }

  const date = new Date().toISOString();
  const storageRef = ref(storage, `images/${date}_${file.name}`);

  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.error("Upload failed", error);
        reject(new Error("Something went wrong: " + error.code));
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (error) {
          console.error("Failed to get download URL", error);
          reject(new Error("Failed to get download URL: " + error.message));
        }
      }
    );
  });
};

export default upload;
