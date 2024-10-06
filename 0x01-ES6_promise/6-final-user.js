import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const array = [];
  try {
    const firstPromise = await signUpUser(firstName, lastName)
      .then((response) => response)
      .catch((error) => error);
    array.push({ status: 'fulfilled', value: firstPromise });
  } catch (error) {
    array.push({ status: 'rejected', value: error });
  }
  try {
    const secondPromise = await uploadPhoto(filename)
      .then((response) => response)
      .catch((error) => error);
    array.push({ status: 'fulfilled', value: secondPromise });
  } catch (error) {
    array.push({ status: 'rejected', value: error });
  }

  return array;
}
