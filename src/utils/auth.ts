import passport from 'passport';
import { Strategy as OAuth2Strategy } from 'passport-oauth2';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error('Invalid token');
  }
}

export function isAdmin(token: string): boolean {
  const decoded = verifyToken(token);
  return decoded && decoded.role === 'admin';
}

passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: 'https://example.com/auth',
      tokenURL: 'https://example.com/token',
      clientID: 'your-client-id',
      clientSecret: 'your-client-secret',
      callbackURL: 'https://your-app.com/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // Verify user logic here
      done(null, profile);
    }
  )
);

export default passport;
