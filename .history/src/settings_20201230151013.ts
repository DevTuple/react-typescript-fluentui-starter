export default {
    AuthRedirectUrl: "/protected",
    AppName: "CriticalResponseSystem",
    description: "",
    AfterAuthDelay: 1000,
    links: [
      { name: "Home", to: "/", exact: true },
      { name: "Contact us", to: "/contact-us" },
      { name: "About us", to: "/about-us" },
    ],
    SERVER: "http://localhost:3000",
  };
  