export default ({
  app
}, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('scrollToTopIfCurrentPageIs', routeName => {
    if ($nuxt.$route.name === routeName) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  });
}
