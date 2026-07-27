const url = 'https://api.sheety.co/703deca33d64b0ee8e95c22396a84a00/careers/sheet1';

async function run() {
  const payload = {
    sheet1: {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      mobile: '9999999999',
      gender: 'Male',
      position: 'Accountant',
      dob: '1990-01-01',
      qualification: 'CA',
      experience: '5 years',
    },
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  console.log('status', response.status);
  const text = await response.text();
  console.log('body', text);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
