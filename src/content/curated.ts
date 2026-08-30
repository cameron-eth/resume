export type CuratedItem = {
  id: string
  title: string
  subtitle?: string
  category: "photo" | "music" | "product" | "video"
  url?: string
  image?: string
  youtubeId?: string
  youtubeStart?: number
  tag?: string
}

export const curated: CuratedItem[] = [
  {
    id: "skate",
    title: "san diego",
    subtitle: "2021",
    category: "photo",
    image: "/curated/skate.jpg",
    tag: "35mm",
  },
  {
    id: "rushes",
    title: "rushes",
    subtitle: "frank ocean · endless",
    category: "music",
    youtubeId: "Z-rXSJsgk-w",
  },
  {
    id: "nothing-phone",
    title: "nothing phone 3",
    subtitle: "nothing",
    category: "product",
    url: "https://us.nothing.tech/products/phone-3?Colour=White&Capacity=12%2B256GB",
    image: "/curated/nothing-phone.jpg",
    tag: "product",
  },
  {
    id: "church",
    title: "marin",
    subtitle: "2024",
    category: "photo",
    image: "/curated/church.jpg",
    tag: "4K Sony",
  },
  {
    id: "elephant-graveyard",
    title: "how comedy was destroyed by an anti-reality doomsday cult",
    subtitle: "the elephant graveyard",
    category: "video",
    youtubeId: "ewvRS3NwIlQ",
  },
  {
    id: "lamarzocco",
    title: "linea mini",
    subtitle: "la marzocco",
    category: "product",
    url: "https://clivecoffee.com/products/la-marzocco-linea-mini-espresso-machine?variant=42832913563736",
    image: "/curated/lamarzocco.png",
    tag: "product",
  },
  {
    id: "mamiya",
    title: "mamiya 645",
    subtitle: "medium format",
    category: "product",
    url: "https://camerapedia.fandom.com/wiki/Mamiya_645",
    image: "/curated/mamiya.png",
    tag: "product",
  },
  {
    id: "brizo-faucet",
    title: "litze bar faucet",
    subtitle: "brizo",
    category: "product",
    url: "https://www.brizo.com/kitchen/product/61063LF-PC",
    image: "/curated/brizo-faucet.png",
    tag: "product",
  },
  {
    id: "godspeed",
    title: "godspeed",
    subtitle: "frank ocean · blonde",
    category: "music",
    url: "https://open.spotify.com/track/34xTFwjPQ1dC6uJmleno7x",
    image: "/curated/blond.jpg",
  },
  {
    id: "send-it-on",
    title: "send it on",
    subtitle: "d'angelo · voodoo",
    category: "music",
    url: "https://open.spotify.com/track/5LIwaG8Wl9LfExcmiRQm7J",
    image: "/curated/voodoo.jpg",
  },
  {
    id: "whats-going-on",
    title: "what's going on",
    subtitle: "marvin gaye",
    category: "music",
    url: "https://open.spotify.com/track/34b3a3Pz9Jlz0092LMyNAB",
    image: "/curated/whats-going-on.jpg",
  },
]
