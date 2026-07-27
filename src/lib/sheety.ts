export type SheetContactRow = {
  name: string;
  city: string;
  email: string;
  mobile: string;
  message: string;
  submittedAt?: string;
};

const SHEETY_API_URL = "https://api.sheety.co/703deca33d64b0ee8e95c22396a84a00/contactForm/sheet1";

async function handleJsonResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Sheety request failed: ${response.status} ${response.statusText} ${text}`);
  }
  return response.json();
}

export async function fetchContactRows() {
  const response = await fetch(SHEETY_API_URL);
  const data = await handleJsonResponse<{ sheet1: SheetContactRow[] }>(response);
  return data.sheet1;
}

export async function createContactRow(row: SheetContactRow) {
  const payload = {
    sheet1: {
      name: row.name,
      city: row.city,
      eMail: row.email,
      mobile: row.mobile,
      message: row.message,
    },
  };

  const response = await fetch(SHEETY_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await handleJsonResponse<{ sheet1: SheetContactRow }>(response);
  return data.sheet1;
}

export async function updateContactRow(id: string | number, row: Partial<SheetContactRow>) {
  const payload = {
    sheet1: {
      ...row,
      eMail: row.email,
    } as Partial<SheetContactRow> & { eMail?: string },
  };

  if (payload.sheet1.email !== undefined) {
    delete (payload.sheet1 as any).email;
  }

  const response = await fetch(`${SHEETY_API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await handleJsonResponse<{ sheet1: SheetContactRow }>(response);
  return data.sheet1;
}

export async function deleteContactRow(id: string | number) {
  const response = await fetch(`${SHEETY_API_URL}/${id}`, {
    method: "DELETE",
  });
  return handleJsonResponse(response);
}

export type SheetCareerRow = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  gender: string;
  position: string;
  dob: string;
  qualification: string;
  experience: string;
  resume?: string;
  submittedAt?: string;
};

const SHEETY_CAREERS_API_URL = "https://api.sheety.co/703deca33d64b0ee8e95c22396a84a00/careers/sheet1";

export async function fetchCareerRows() {
  const response = await fetch(SHEETY_CAREERS_API_URL);
  const data = await handleJsonResponse<{ sheet1: SheetCareerRow[] }>(response);
  return data.sheet1;
}

export async function createCareerRow(row: SheetCareerRow) {
  const response = await fetch(SHEETY_CAREERS_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sheet1: row }),
  });
  const data = await handleJsonResponse<{ sheet1: SheetCareerRow }>(response);
  return data.sheet1;
}

export async function updateCareerRow(id: string | number, row: Partial<SheetCareerRow>) {
  const response = await fetch(`${SHEETY_CAREERS_API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sheet1: row }),
  });
  const data = await handleJsonResponse<{ sheet1: SheetCareerRow }>(response);
  return data.sheet1;
}

export async function deleteCareerRow(id: string | number) {
  const response = await fetch(`${SHEETY_CAREERS_API_URL}/${id}`, {
    method: "DELETE",
  });
  return handleJsonResponse(response);
}
