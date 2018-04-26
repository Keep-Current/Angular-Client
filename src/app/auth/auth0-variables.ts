interface AuthConfig {
    clientID: string;
    domain: string;
    callbackUrlDev: string;
    callbackUrlProd: string;
  }

  export const AUTH_CONFIG: AuthConfig = {
    clientID: 'YiWI6rmDX56tO72HSHmaoMOm5aExw6bG',
    domain: 'keepcurrent.eu.auth0.com',
    callbackUrlDev: 'http://localhost:4200/callback',
    callbackUrlProd: 'https://keepcurrent.online/callback'
  };
