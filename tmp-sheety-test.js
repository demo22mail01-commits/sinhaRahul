const url = 'https://api.sheety.co/703deca33d64b0ee8e95c22396a84a00/contactForm/sheet1';

async function run() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
