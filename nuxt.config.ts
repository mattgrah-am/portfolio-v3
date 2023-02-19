// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  components: [{ path: "~/components/", pathPrefix: false }],
  app: {
    head: {
      title: "Matt Grah.am // Web Developer",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content: "The personal portfolio of Matt Graham.",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://api.fonts.coollabs.io/css2?family=Bebas+Neue&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
    },
  },
});
