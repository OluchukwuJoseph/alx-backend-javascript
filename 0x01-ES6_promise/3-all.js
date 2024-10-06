import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const myObject = {};

  myObject.body = await uploadPhoto()
    .then((response) => response.body)
    .catch(() => new Error('Signup system offline'));

  myObject.user = await createUser()
    .then((reponse) => reponse)
    .catch(() => new Error('Signup system offline'));

  console.log(`${myObject.body} ${myObject.user.firstName} ${myObject.user.lastName}`);
}
