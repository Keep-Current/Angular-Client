interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
  }

  export const AUTH_CONFIG: AuthConfig = {
    clientID: 'YiWI6rmDX56tO72HSHmaoMOm5aExw6bG',
    domain: 'keepcurrent.eu.auth0.com',
    callbackURL: 'http://${AUTH_CONFIG.domain}/callback'
  };
