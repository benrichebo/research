module.exports = {
  env: {
    MONGODB_URI:
      "mongodb+srv://freelancing:XG9tbcK8FbtxyTQW@cluster0.3ndms.mongodb.net/?retryWrites=true&w=majority",
    MONGODB_DB: "research",

    NEXT_SECRET: "683caef9-86dd-4d69-bf0f-d152f0049d94",

    MAIL_HOST: "mail.research.com",
    MAIL_PORT: 465,
    MAIL_AUTH_USER: "info@research.com",
    MAIL_AUTH_PASSWORD: "yuCg7TcxY]00",

    CLOUDINARY_NAME: "alpha-digital-agency",
    CLOUDINARY_API_KEY: "628934891732292",
    CLOUDINARY_API_SECRET: "Cc9w0mgYrq5616bnz3VLuT8ZPzg",

    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      "pk_live_51LOegJHXnfnykrDde7lwFkwrYsgVdc0fHnPwgp7CQhBdowyBf0l0dRzboWofGii9ZsLSnpKQgXwdKi4oxV00ZCOz00YHviOllQ",
    STRIPE_SECRET:
      "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",

    SERVER_URL: "http://localhost:3000",

    SMS_API_KEY: "V1ZNVExweWp5em9qdGJRRG1rYmY=",
    TINY_MCE: "85mw9cftsyryl2jkjosgvgrex99fiehbkjs9ck8keqwt1oyc",
    PRICE: 10000,
  } /* 
  basePath: "/home",
  rewrites: [{source: "/", destination: "/home"}], */,
  images: {
    domains: ["res.cloudinary.com"],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};
