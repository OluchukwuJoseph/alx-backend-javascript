export default function signUpUser(firstName, lastName) {
  const newPromise = Promise.resolve({ firstName, lastName });
  return newPromise;
}
