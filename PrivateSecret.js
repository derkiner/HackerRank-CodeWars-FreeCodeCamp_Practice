
const privateSecret = () => {
  const secret = "foo";
  
  return () => secret;
};

const getSecret = privateSecret();
console.log(getSecret());
