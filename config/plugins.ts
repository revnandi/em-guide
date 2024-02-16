
export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT'),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('SMTP_EMAIL'),
        defaultReplyTo: env('SMTP_EMAIL'),
      },
    },
  },
  'admin-email-notifications': {
    enabled: true,
    resolve: './src/plugins/admin-email-notifications'
  },
  'admin-comments': {
    enabled: true,
    resolve: './src/plugins/admin-comments'
  }
});