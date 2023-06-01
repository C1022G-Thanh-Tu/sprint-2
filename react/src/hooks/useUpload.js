import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { useState } from "react";
import { storage } from "../firebase/firebase";

export const useUpload = () => {
  const [url, setUrl] = useState(null);
  const [progressPercent, setProgressPercent] = useState(0);

  const onUpload = async (file) => {
    const uploadFile = () =>
      new Promise((resolve, reject) => {
        if (!file) return;
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgressPercent(progress);
          },
          (error) => {
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setUrl(downloadURL);
            resolve(downloadURL);
            setProgressPercent(0)
          }
        );
      });

    await uploadFile();
  };

  return {
    url,
    onUpload,
    progressPercent,
    setUrl,
  };
};
