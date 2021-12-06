export const formatFirebaseError = (error) => {
  const formattedError = error.split(":")[1].trim();
  return formattedError.split("(")[0];
};
