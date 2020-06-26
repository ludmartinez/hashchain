const capitalize = value => {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const limitCharacters = (value, limit = 100) => {
  if (!value) return "";
  if (value.length < limit) return value;
  value = value.toString();
  return value.slice(0, limit) + " ...";
};

export { capitalize, limitCharacters };
