const algorithms = [
  {
    name: "Message Diggest",
    types: ["md5"]
  },
  {
    name: "Secure Hash Algorithm",
    types: ["sha1", "sha224", "sha256", "sha384", "sha512", "sha3"]
  },
  {
    name: "RACE Integrity Primitives Evaluation Message Digest",
    types: ["RIPEMD160"]
  }
];

export default () => new Promise(resolve => resolve(algorithms));
