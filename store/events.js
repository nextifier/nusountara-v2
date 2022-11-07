export const state = () => ({
  list: [{
      id: 1,
      title: 'SELECTIVE',
      slug: 'selective',
      categories: [],
      date: 'Nov 4, 2022',
      time: '8 PM until late',
      location: 'Leon Goldstein, Jakarta',
      price: 'FREE',
      tiketDotComLink: '',
      loketDotComLink: '',
      status: 'passed',
      images: [
        '/selective-01/selective-cover.webp',
        '/selective-01/selective-josh-butler.webp',
        '/selective-01/selective-nandi.webp',
        '/selective-01/selective-hogi.webp',
        '/selective-01/selective-dhika.webp',
      ],
      description: `
        <p>We are more than excited to present you the first edition of our club night series. For the first party we collaborate with the biggest annual creative market @brightspotmrkt as their official satellite party. Come over to @leon_goldstein because you are selected!</p>
        <span>Also supporting the night:<span>
        <ul>
          <li>Nandi (House Cartel) // @anandiwp // @house_cartel</li>
          <li>Hogi (Future10) // @hogiwirjono // @future10.official</li>
          <li>Dhika (Rawspace) // @andhikaprawira // @rawspace</li>
        </ul>
      `
    },
    {
      id: 2,
      title: 'SELECTIVE',
      slug: 'selective-2',
      categories: [],
      date: 'Nov 4, 2022',
      time: '8 PM until late',
      location: 'Leon Goldstein, Jakarta',
      price: 'FREE',
      tiketDotComLink: '',
      loketDotComLink: '',
      status: 'Sold Out',
      images: [
        '/selective-01/selective-cover.webp',
        '/selective-01/selective-josh-butler.webp',
        '/selective-01/selective-nandi.webp',
        '/selective-01/selective-hogi.webp',
        '/selective-01/selective-dhika.webp',
      ],
      description: `
        <p>We are more than excited to present you the first edition of our club night series. For the first party we collaborate with the biggest annual creative market @brightspotmrkt as their official satellite party. Come over to @leon_goldstein because you are selected!</p>
        <span>Also supporting the night:<span>
        <ul>
          <li>Nandi (House Cartel) // @anandiwp // @house_cartel</li>
          <li>Hogi (Future10) // @hogiwirjono // @future10.official</li>
          <li>Dhika (Rawspace) // @andhikaprawira // @rawspace</li>
        </ul>
      `
    },
    {
      id: 3,
      title: 'SELECTIVE',
      slug: 'selective-3',
      categories: [],
      date: 'Nov 4, 2022',
      time: '8 PM until late',
      location: 'Leon Goldstein, Jakarta',
      price: 'FREE',
      tiketDotComLink: '',
      loketDotComLink: '',
      status: 'Sold Out',
      images: [
        '/selective-01/selective-cover.webp',
        '/selective-01/selective-josh-butler.webp',
        '/selective-01/selective-nandi.webp',
        '/selective-01/selective-hogi.webp',
        '/selective-01/selective-dhika.webp',
      ],
      description: `
        <p>We are more than excited to present you the first edition of our club night series. For the first party we collaborate with the biggest annual creative market @brightspotmrkt as their official satellite party. Come over to @leon_goldstein because you are selected!</p>
        <span>Also supporting the night:<span>
        <ul>
          <li>Nandi (House Cartel) // @anandiwp // @house_cartel</li>
          <li>Hogi (Future10) // @hogiwirjono // @future10.official</li>
          <li>Dhika (Rawspace) // @andhikaprawira // @rawspace</li>
        </ul>
      `
    },
    {
      id: 4,
      title: 'SELECTIVE',
      slug: 'selective-4',
      categories: [],
      date: 'Nov 4, 2022',
      time: '8 PM until late',
      location: 'Leon Goldstein, Jakarta',
      price: 'FREE',
      tiketDotComLink: '',
      loketDotComLink: '',
      status: 'Sold Out',
      images: [
        '/selective-01/selective-cover.webp',
        '/selective-01/selective-josh-butler.webp',
        '/selective-01/selective-nandi.webp',
        '/selective-01/selective-hogi.webp',
        '/selective-01/selective-dhika.webp',
      ],
      description: `
        <p>We are more than excited to present you the first edition of our club night series. For the first party we collaborate with the biggest annual creative market @brightspotmrkt as their official satellite party. Come over to @leon_goldstein because you are selected!</p>
        <span>Also supporting the night:<span>
        <ul>
          <li>Nandi (House Cartel) // @anandiwp // @house_cartel</li>
          <li>Hogi (Future10) // @hogiwirjono // @future10.official</li>
          <li>Dhika (Rawspace) // @andhikaprawira // @rawspace</li>
        </ul>
      `
    },
    {
      id: 5,
      title: 'SELECTIVE',
      slug: 'selective-5',
      categories: [],
      date: 'Nov 4, 2022',
      time: '8 PM until late',
      location: 'Leon Goldstein, Jakarta',
      price: 'FREE',
      tiketDotComLink: '',
      loketDotComLink: '',
      status: 'Sold Out',
      images: [
        '/selective-01/selective-cover.webp',
        '/selective-01/selective-josh-butler.webp',
        '/selective-01/selective-nandi.webp',
        '/selective-01/selective-hogi.webp',
        '/selective-01/selective-dhika.webp',
      ],
      description: `
        <p>We are more than excited to present you the first edition of our club night series. For the first party we collaborate with the biggest annual creative market @brightspotmrkt as their official satellite party. Come over to @leon_goldstein because you are selected!</p>
        <span>Also supporting the night:<span>
        <ul>
          <li>Nandi (House Cartel) // @anandiwp // @house_cartel</li>
          <li>Hogi (Future10) // @hogiwirjono // @future10.official</li>
          <li>Dhika (Rawspace) // @andhikaprawira // @rawspace</li>
        </ul>
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
