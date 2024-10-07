import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const uploadPromise = await uploadPhoto()
      .then((response) => response);

    const userPromise = await createUser()
      .then((response) => response);

    return { photo: uploadPromise, user: userPromise };
  } catch (error) {
    return { photo: null, user: null };
  }
}
