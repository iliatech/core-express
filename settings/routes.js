export const routes = {
  // System.
  root: "/",
  system: "/system",
  favicon: "/favicon.ico",

  // Auth.
  auth_with_one_time_token: "/auth-with-one-time-token",
  user: "/user",

  // Telegram.
  telegram_webhook: `/telegram-web-hook/${process.env.TELEGRAM_WEBHOOK_SECRET}`,

  // Google drive.
  googleDrive: "/google-drive",

  // Credential.
  credential: "/credential",

  // Word.
  word: "/word",
  translation: "/translation",
};

export const ROUTES_WITHOUT_AUTHORIZATION = [
  routes.root,
  routes.favicon,
  routes.auth_with_one_time_token,
  routes.telegram_webhook,
];
