export interface Sermon {
  id: string;
  title: string;
  description: string;
  youtubeId?: string;
  date: string;
  tags: string[];
  duration?: string;
  series?: string;
  scripture?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  readTime?: string;
  author?: string;
  featured?: boolean;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  price: string;
  badge?: string;
  available: boolean;
  format?: string[];
  stripeUrl?: string;
  paypalUrl?: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  episodeNumber: number;
  spotifyEpisodeId?: string;
  appleUrl?: string;
  youtubeId?: string;
}

export interface DonationTier {
  label: string;
  value: string;
  description: string;
  recommended?: boolean;
  impact?: string;
  stripeUrl?: string;
  paypalUrl?: string;
}

export interface PrayerRequest {
  name: string;
  email: string;
  request: string;
  isAnonymous: boolean;
}

export interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  isOnline: boolean;
}

export interface SmallGroup {
  id: string;
  name: string;
  description: string;
  day?: string;
  time?: string;
  leader?: string;
  capacity?: number;
}
