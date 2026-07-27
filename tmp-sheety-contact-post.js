const url = 'https://api.sheety.co/703deca33d64b0ee8e95c22396a84a00/contactForm/sheet1';

async function run() {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sheet1: {
        name: 'Test',
        city: 'Test',
        eMail: 'test@test.com',
        mobile: '1234567890',
        message: 'Hello',
      },
    }),
  });

  console.log('status', response.status);
  console.log(await response.text());
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
