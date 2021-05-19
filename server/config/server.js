module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://shny.mbacalan.tk/api/',
  proxy: true,
  admin: {
    url: '/admin/',
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8f2844d139b7fea4d6158fc078d2d09d'),
    },
  },
});
