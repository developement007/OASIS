export const config = { path: "/form/submit" };

export default async (request, context) => {
  const form = await request.formData();
  const name = (form.get('name') || '').toString().trim();
  const email = (form.get('email') || '').toString().trim();
  const message = (form.get('message') || '').toString().trim();

  const errors = [];
  if (!name) errors.push('name');
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.push('email');
  if (!message) errors.push('message');

  if (errors.length) {
    return new Response(JSON.stringify({ ok: false, error: 'Missing or invalid fields', fields: errors }), { status: 400, headers: { 'content-type': 'application/json; charset=utf-8' } });
  }

  return new Response(JSON.stringify({ ok: true, received: { name, email, message } }), { headers: { 'content-type': 'application/json; charset=utf-8' } });
};
