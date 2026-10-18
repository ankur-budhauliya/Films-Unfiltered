/**
 * Films Unfiltered - Mock & Demonstration Data
 * 
 * NOTE: All data in this file is strictly for frontend demonstration and visual layout.
 * It is completely decoupled from real backend services, databases, or live APIs.
 */

export const ARTIST_CATEGORIES = [
  { id: 'singers', label: 'Singers', icon: 'Mic', queryTerm: 'Singer' },
  { id: 'djs', label: 'DJs', icon: 'Disc3', queryTerm: 'DJ' },
  { id: 'actors', label: 'Actors', icon: 'Clapperboard', queryTerm: 'Actor' },
  { id: 'comedians', label: 'Comedians', icon: 'Sparkles', queryTerm: 'Comedian' },
  { id: 'dancers', label: 'Dancers', icon: 'Activity', queryTerm: 'Dancer' },
  { id: 'filmmakers', label: 'Filmmakers', icon: 'Video', queryTerm: 'Filmmaker' },
];

export const STATS = [
  { value: '10K+', label: 'Artists' },
  { value: '2K+', label: 'Live Shows' },
  { value: '500+', label: 'Venues' },
  { value: '50+', label: 'Cities' },
];

export const CITIES = [
  'Delhi NCR (Noida / Gurgaon)',
  'Mumbai',
  'Bengaluru',
  'Goa',
  'New York',
  'London',
  'Berlin',
];

export const ARTIST_COLLAGE = [
  {
    id: 'singer',
    title: 'Aria Vance',
    role: 'Singer & Songwriter',
    genre: 'Soul / Indie Pop',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80',
    badge: 'Live Stage',
    city: 'Delhi NCR (Noida / Gurgaon)',
    tags: ['singer', 'vocalist', 'indie', 'live music'],
  },
  {
    id: 'filmmaker',
    title: 'Devin Cole',
    role: 'Cinematographer & Director',
    genre: 'Narrative & Music Videos',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
    badge: '4K Cinema',
    city: 'Mumbai',
    tags: ['filmmaker', 'director', 'camera', 'cinematography'],
  },
  {
    id: 'dj',
    title: 'DJ KAIRO',
    role: 'Electronic Producer & DJ',
    genre: 'Melodic Techno',
    image: 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&w=900&q=80',
    badge: 'Club Resident',
    city: 'Bengaluru',
    tags: ['dj', 'electronic', 'techno', 'producer', 'club'],
  },
  {
    id: 'actor',
    title: 'Maya Lin',
    role: 'Stage & Method Actor',
    genre: 'Theatre & Short Film',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    badge: 'Festival Nominee',
    city: 'New York',
    tags: ['actor', 'actress', 'theatre', 'drama', 'film'],
  },
  {
    id: 'dancer',
    title: 'Zayn & Tasha',
    role: 'Contemporary Dancers',
    genre: 'Choreography & Movement',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=900&q=80',
    badge: 'Choreographer',
    city: 'London',
    tags: ['dancer', 'choreography', 'contemporary', 'movement'],
  },
  {
    id: 'comedian',
    title: 'Rohan Joshi',
    role: 'Stand-up Comic',
    genre: 'Crowd Work & Special',
    image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=900&q=80',
    badge: 'Touring Now',
    city: 'Delhi NCR (Noida / Gurgaon)',
    tags: ['comedian', 'stand-up', 'comedy', 'special'],
  },
];

/**
 * Demo sample catalog for frontend search demonstration.
 * In production, this will be retrieved from the backend Elasticsearch/PostgreSQL API.
 */
export const DEMO_SEARCH_CATALOG = [
  {
    id: 'demo-1',
    type: 'artist',
    name: 'Aria Vance',
    category: 'Singer & Songwriter',
    location: 'Delhi NCR (Noida / Gurgaon)',
    venue: 'The Piano Man, Noida',
    rating: '4.9',
    matches: 'Indie, Acoustic, Vocalist',
  },
  {
    id: 'demo-2',
    type: 'event',
    name: 'Indie Night: Acoustic Sessions',
    category: 'Live Show',
    location: 'Delhi NCR (Noida / Gurgaon)',
    venue: 'The Piano Man, Noida',
    date: 'Fri, Oct 24 · 8:30 PM',
    matches: 'Live performance, 120 RSVP',
  },
  {
    id: 'demo-3',
    type: 'artist',
    name: 'DJ KAIRO',
    category: 'Electronic Producer & DJ',
    location: 'Bengaluru',
    venue: 'Indiranagar Social',
    rating: '4.8',
    matches: 'Techno, Synth, Club sets',
  },
  {
    id: 'demo-4',
    type: 'artist',
    name: 'Devin Cole',
    category: 'Cinematographer & Director',
    location: 'Mumbai',
    venue: 'Versova Studios',
    rating: '5.0',
    matches: 'Arri Alexa, Music Videos, Feature Films',
  },
  {
    id: 'demo-5',
    type: 'event',
    name: 'Open Mic Stand-up Spotlight',
    category: 'Comedy Night',
    location: 'Delhi NCR (Noida / Gurgaon)',
    venue: 'The Habitat, Noida',
    date: 'Sat, Oct 25 · 7:00 PM',
    matches: 'Stand-up comic showcase',
  },
  {
    id: 'demo-6',
    type: 'artist',
    name: 'Maya Lin',
    category: 'Stage & Method Actor',
    location: 'New York',
    venue: 'The Cherry Lane Theatre',
    rating: '4.9',
    matches: 'Short films, Theatre productions',
  },
];

/**
 * Configurable Footer Links & Navigation
 */
export const FOOTER_SECTIONS = {
  discover: {
    heading: 'Discover',
    links: [
      { label: 'Find Artists', key: 'discover' },
      { label: 'Explore Shows', key: 'shows' },
      { label: 'Browse Categories', key: 'categories' },
      { label: 'Discover Venues', key: 'venues' },
      { label: 'Trending Events', key: 'events' },
    ],
  },
  forArtists: {
    heading: 'For Artists',
    links: [
      { label: 'Create Artist Profile', action: 'signup' },
      { label: 'Connect with Artists', key: 'collaborate' },
      { label: 'Find Collaborations', key: 'collaborate' },
      { label: 'Promote Your Show', key: 'shows' },
      { label: 'Artist Resources', key: 'resources' },
    ],
  },
  company: {
    heading: 'Company',
    links: [
      { label: 'About Us', key: 'about' },
      { label: 'Contact', key: 'contact' },
      { label: 'Help Center', key: 'help' },
      { label: 'Privacy Policy', key: 'privacy' },
      { label: 'Terms of Service', key: 'terms' },
    ],
  },
};

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://instagram.com/filmsunfiltered_demo', handle: '@filmsunfiltered' },
  { name: 'YouTube', url: 'https://youtube.com/@filmsunfiltered_demo', handle: 'Films Unfiltered' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/filmsunfiltered_demo', handle: 'Films Unfiltered' },
  { name: 'Facebook', url: 'https://facebook.com/filmsunfiltered_demo', handle: 'filmsunfiltered' },
];
