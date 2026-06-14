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
    title: "nothing phone 3a",
    subtitle: "nothing",
    category: "product",
    url: "https://us.nothing.tech/products/phone-3a",
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
    url: "https://home.lamarzocco.com/en/linea-mini/",
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
    title: "kintsu pull-down faucet",
    subtitle: "brizo",
    category: "product",
    url: "https://www.brizo.com/kitchen/faucets/pull-down-faucets/kintsu",
    image: "/curated/brizo-faucet.png",
    tag: "product",
  },
]
