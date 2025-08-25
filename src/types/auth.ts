/* Authentication types */

/**
 * Interface for OAuth2 token response.
 */
export interface OAuth2Token {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}

/**
 * Interface for authentication credentials.
 */
export interface Credentials {
  username: string;
  password: string;
}