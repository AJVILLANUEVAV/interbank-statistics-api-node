import jwt from 'jsonwebtoken';

export function requireJwt(secret) {
  return (request, response, next) => {
    const header = request.headers.authorization ?? '';
    if (!header.startsWith('Bearer ')) return response.status(401).json({ error: 'missing bearer token' });
    try {
      request.user = jwt.verify(header.slice(7), secret);
      return next();
    } catch {
      return response.status(401).json({ error: 'invalid or expired token' });
    }
  };
}
