export const state = () => ({
  list: [{
      id: 1,
      title: 'Unhide Grojogan Watu Purbo',
      slug: 'unhide-grojogan-watu-purbo',
      categories: [],
      date: '24 - 25 Oct 2022',
      time: '18:00 - 22:00 WIB',
      location: 'Sleman, Yogyakarta',
      price: 'Rp200,000',
      tiketDotComLink: 'https://tiket.com/',
      loketDotComLink: 'https://loket.com/',
      status: 'upcoming',
      images: [
        '/unhide-grojogan/01.jpg',
        '/unhide-grojogan/02.jpg',
        '/unhide-grojogan/03.jpg',
        '/unhide-grojogan/04.jpg',
        '/unhide-grojogan/05.jpg',
        '/unhide-grojogan/06.jpg',
      ],
      description: `
      <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.</p>
    `
    },
    {
      id: 2,
      title: 'Experience Nusountara in Jakarta',
      slug: 'experience-nusountara-in-jakarta',
      categories: [],
      date: '10 Apr 2022',
      time: '19:00 - 21:00 WIB',
      location: 'Jakarta',
      price: 'Rp75,000',
      status: 'passed',
      images: [
        '/unhide-grojogan/02.jpg',
        '/unhide-grojogan/03.jpg',
        '/unhide-grojogan/04.jpg',
        '/unhide-grojogan/05.jpg',
        '/unhide-grojogan/06.jpg',
        '/unhide-grojogan/01.jpg',
      ],
      description: `
      <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.</p>
    `
    },
    {
      id: 3,
      title: 'Unleashing Party with Nusountara in Bali',
      slug: 'unleashing-party-with-nusountara-in-bali',
      categories: [],
      date: '2 Mei 2022',
      time: '18:00 - 23:00 WIB',
      location: 'Bali',
      price: 'Rp240,000',
      status: 'passed',
      images: [
        '/unhide-grojogan/03.jpg',
        '/unhide-grojogan/04.jpg',
        '/unhide-grojogan/05.jpg',
        '/unhide-grojogan/06.jpg',
        '/unhide-grojogan/01.jpg',
        '/unhide-grojogan/02.jpg',
      ],
      description: `
      <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.</p>
    `
    },
    {
      id: 4,
      title: 'Unhide Goa Langir Beach',
      slug: 'unhide-goa-langir-beach',
      categories: [],
      date: '24 - 25 Nov 2022',
      time: '18:00 - 22:00 WIB',
      location: 'Banten',
      price: 'Rp150,000',
      tiketDotComLink: 'https://tiket.com/',
      loketDotComLink: 'https://loket.com/',
      status: 'upcoming',
      images: [
        '/unhide-grojogan/04.jpg',
        '/unhide-grojogan/05.jpg',
        '/unhide-grojogan/06.jpg',
        '/unhide-grojogan/01.jpg',
        '/unhide-grojogan/02.jpg',
        '/unhide-grojogan/03.jpg',
      ],
      description: `
      <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.</p>
    `
    },
  ]
})

export const getters = {
  allEvents: state => state.events,

  getEventBySlug: (state) => (slug) => {
    return state.events.find(event => event.slug === slug);
  },
}

export const mutations = {}
