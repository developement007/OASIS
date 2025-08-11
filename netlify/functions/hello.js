export const config = { path: "/api/hello" };

export default async (request, context) => {
  const body = { ok: true, message: 'Hello from Netlify Functions! 👋', now: new Date().toISOString() };
  return new Response(JSON.stringify(body), { headers: { 'content-type': 'application/json; charset=utf-8' } });
};
