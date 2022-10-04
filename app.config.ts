// the alternative to Nuxt theme https://nuxt-themes.netlify.app/
export default defineAppConfig({
  theme: {
    meta: {
      name: 'EkNote',
      description: 'Personal Knowledge base, archive and blog',
      author: 'Ekitcho',
      url: 'https://ekblogi-note.vercel.app/'
    },
    author: 'Ekitcho',
    email: 'mynameiskeo@gmail.com',
    avatar: '/default-avatar.png',
    favicon: '/default-favicon.ico',
    homePage: {
      showBlogPosts: true,
      postItemLimit: 4
    },
    subscribePage: true,
    articlePage: {
      showTime: true,
      outdated: {
        show: true,
        threshold: 30
      },
      showBlogCatalog: false,
      showNoteCatalog: false
    }
  }
})
