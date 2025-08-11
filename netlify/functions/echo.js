export const config = { path: "/api/echo" };

export default async (request, context) => {
  try {
    const json = await request.json();
    return new Response(JSON.stringify({ ok: true, youSent: json }), { headers: { 'content-type': 'application/json; charset=utf-8' } });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON body' }), { status: 400, headers: { 'content-type': 'application/json; charset=utf-8' } });
  }
};
