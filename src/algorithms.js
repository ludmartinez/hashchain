const algorithms = [
  {
    name: "Message Diggest",
    types: ["md2", "md4", "md5"]
  },
  {
    name: "Secure Hash Algorithm",
    types: ["sha-1", "sha-2", "sha-3"]
  },
  {
    name: "Data Encryption Standar",
    types: ["des"]
  }
];

export default () => new Promise(resolve => resolve(algorithms));
