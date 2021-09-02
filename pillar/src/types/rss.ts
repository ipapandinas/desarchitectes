export type EpisodeType = {
  content: string
  contentSnippet: string
  creator: string
  'dc:creator': string
  enclosure: {
    url: string
    length: string
    type: string
  }
  guid: string
  isoDate: string
  itunes: {
    summary: string
    explicit: string
    duration: string
    image: string
    episode: string
    season: string
  }
  link: string
  pubDate: string
  title: string
}

export type FeedType = {
  author: string
  copyright: string
  creator: string
  description: string
  feedUrl: string
  generator: string
  image: {
    link: string
    title: string
    url: string
  }
  items: Array<EpisodeType>
  itunes: {
    summary: string
    explicit: string
    duration: string
    image: string
    episode: string
    season: string
  }
  language: string
  lastBuildDate: string
  link: string
  paginationLinks: {
    self: string
  }
  title: string
}
