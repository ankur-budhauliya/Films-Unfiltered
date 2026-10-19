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
    image: '/artists/singer_stage_lights.jpg',
    badge: 'Live Stage',
    city: 'Delhi NCR (Noida / Gurgaon)',
    tags: ['singer', 'vocalist', 'indie', 'live music'],
  },
  {
    id: 'filmmaker',
    title: 'Devin Cole',
    role: 'Cinematographer & Director',
    genre: 'Narrative & Music Videos',
    image: '/artists/cam_operator.jpg',
    badge: '4K Cinema',
    city: 'Mumbai',
    tags: ['filmmaker', 'director', 'camera', 'cinematography'],
  },
  {
    id: 'dj',
    title: 'DJ KAIRO',
    role: 'Electronic Producer & DJ',
    genre: 'Melodic Techno',
    image: '/artists/dj.jpg',
    badge: 'Club Resident',
    city: 'Bengaluru',
    tags: ['dj', 'electronic', 'techno', 'producer', 'club'],
  },
  {
    id: 'actor',
    title: 'Maya Lin',
    role: 'Stage & Method Actor',
    genre: 'Theatre & Short Film',
    image: '/artists/actor_curly.jpg',
    badge: 'Festival Nominee',
    city: 'New York',
    tags: ['actor', 'actress', 'theatre', 'drama', 'film'],
  },
  {
    id: 'dancer',
    title: 'Zayn & Tasha',
    role: 'Contemporary Dancers',
    genre: 'Choreography & Movement',
    image: '/artists/dancer_leap.jpg',
    badge: 'Choreographer',
    city: 'London',
    tags: ['dancer', 'choreography', 'contemporary', 'movement'],
  },
  {
    id: 'comedian',
    title: 'Rohan Joshi',
    role: 'Stand-up Comic',
    genre: 'Crowd Work & Special',
    image: '/artists/comedian_stage.jpg',
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

/**
 * Categories for the Discover Artists section filter tabs
 */
export const DISCOVER_FILTER_CATEGORIES = [
  { id: 'all', label: 'All Artists' },
  { id: 'singers', label: 'Singers' },
  { id: 'djs', label: 'DJs' },
  { id: 'actors', label: 'Actors' },
  { id: 'comedians', label: 'Comedians' },
  { id: 'dancers', label: 'Dancers' },
  { id: 'filmmakers', label: 'Filmmakers' },
];

/**
 * Editorial Profiles for the "Discover Artists" section
 * NOTE: All profiles are fictional demonstration profiles for frontend presentation.
 */
export const DISCOVER_ARTISTS = [
  {
    id: 'aria-vance',
    name: 'Aria Vance',
    category: 'singers',
    role: 'Singer & Songwriter',
    location: 'Delhi',
    bio: 'Soulful indie-pop vocalist blending intimate acoustic songwriting with atmospheric live sets.',
    image: '/artists/singer_stage_lights.jpg',
    specialty: 'Indie Pop · Live Acoustic',
    collaborations: 'Open for session vocals & songwriting collaborations',
    experience: '8+ Years Live',
    demoTag: 'Demo Profile',
  },
  {
    id: 'dj-kairo',
    name: 'DJ Kairo',
    category: 'djs',
    role: 'DJ & Producer',
    location: 'Noida',
    bio: 'Electronic producer crafting deep melodic techno journeys and peak-time club experiences.',
    image: '/artists/dj.jpg',
    specialty: 'Melodic Techno · Sound Design',
    collaborations: 'Looking for vocalists & visual stage designers',
    experience: 'Resident DJ',
    demoTag: 'Demo Profile',
  },
  {
    id: 'maya-lin',
    name: 'Maya Lin',
    category: 'actors',
    role: 'Actor',
    location: 'Mumbai',
    bio: 'Method actor with a background in experimental theatre, voice work, and indie narrative films.',
    image: '/artists/actor_curly.jpg',
    specialty: 'Independent Film · Stage Drama',
    collaborations: 'Available for short films, features & script readings',
    experience: 'Theatre & Film',
    demoTag: 'Demo Profile',
  },
  {
    id: 'zayn-mehta',
    name: 'Zayn Mehta',
    category: 'comedians',
    role: 'Stand-up Comedian',
    location: 'Bengaluru',
    bio: 'Sharp observational comic known for high-relatability crowd work and touring club specials.',
    image: '/artists/comedian_stage.jpg',
    specialty: 'Stand-up · Improv & Sketch',
    collaborations: 'Writing rooms & comedy festival showcases',
    experience: 'Touring Comic',
    demoTag: 'Demo Profile',
  },
  {
    id: 'tara-sen',
    name: 'Tara Sen',
    category: 'dancers',
    role: 'Dancer & Choreographer',
    location: 'Delhi',
    bio: 'Contemporary movement artist exploring cinematic narrative storytelling and physical theatre.',
    image: '/artists/dancer_leap.jpg',
    specialty: 'Contemporary · Cinematic Choreography',
    collaborations: 'Music videos, stage direction & brand films',
    experience: 'Choreographer',
    demoTag: 'Demo Profile',
  },
  {
    id: 'devin-cole',
    name: 'Devin Cole',
    category: 'filmmakers',
    role: 'Filmmaker',
    location: 'Pune',
    bio: 'Cinematographer and director focusing on rich low-light aesthetics, music videos, and documentaries.',
    image: '/artists/cam_operator.jpg',
    specialty: 'Cinematography · Narrative Directing',
    collaborations: 'Co-directing, camera crew & color grading',
    experience: 'Director of Photography',
    demoTag: 'Demo Profile',
  },
];

/**
 * Categories for the Explore Shows section filter tabs
 */
export const SHOW_CATEGORIES = [
  { id: 'all', label: 'All Events' },
  { id: 'live-music', label: 'Live Music' },
  { id: 'dj-nights', label: 'DJ Nights' },
  { id: 'comedy', label: 'Comedy' },
  { id: 'theatre', label: 'Theatre' },
  { id: 'dance', label: 'Dance' },
];

/**
 * Preset demo locations for show exploration
 */
export const SHOW_LOCATIONS = [
  'All Locations',
  'Noida',
  'Delhi',
  'Gurugram',
  'Mumbai',
  'Bengaluru',
];

/**
 * Editorial demonstration catalog for "Explore Shows" section
 * NOTE: All events, venues, and schedules are fictional for frontend demonstration.
 */
export const ALL_SHOWS = [
  {
    id: 'indie-after-dark',
    title: 'Indie After Dark',
    category: 'live-music',
    categoryLabel: 'Live Music',
    isFeatured: true,
    date: '24 October 2026',
    time: '7:30 PM',
    city: 'Noida',
    venue: 'The Acoustic Attic, Sector 18, Noida',
    description: 'An intimate night of independent music, emerging voices, and unforgettable live performances.',
    longDescription: 'Curated by Films Unfiltered, Indie After Dark brings together regional indie-pop acts, acoustic songwriters, and emerging vocalists in an atmospheric, low-lit setting. Experience raw originals, collaborative acoustic sets, and artist conversations.',
    image: '/artists/event.jpg',
    badge: 'Featured Showcase',
    demoTag: 'Fictional Demo Event',
  },
  {
    id: 'midnight-frequencies',
    title: 'Midnight Frequencies',
    category: 'dj-nights',
    categoryLabel: 'DJ Night',
    isFeatured: false,
    date: '25 October 2026',
    time: '10:00 PM',
    city: 'Noida',
    venue: 'Warehouse 9, Sector 18, Noida',
    description: 'Electronic music and late-night sets.',
    longDescription: 'A late-night sonic journey through melodic techno, experimental electronica, and driving club rhythms featuring underground regional DJs and synchronized visual projections.',
    image: '/artists/dj_live.jpg',
    badge: 'Club Night',
    demoTag: 'Fictional Demo Event',
  },
  {
    id: 'mic-check',
    title: 'Mic Check',
    category: 'comedy',
    categoryLabel: 'Comedy',
    isFeatured: false,
    date: '26 October 2026',
    time: '8:00 PM',
    city: 'Delhi',
    venue: 'The Laugh Cellar, Hauz Khas, Delhi',
    description: 'An evening of stand-up and fresh material.',
    longDescription: 'Stand-up comics take the stage to test brand-new jokes, sharp observational crowd work, and tour-ready material in an intimate club environment.',
    image: '/artists/comedian_speaking.jpg',
    badge: 'Stand-up Showcase',
    demoTag: 'Fictional Demo Event',
  },
  {
    id: 'theatre-unplugged',
    title: 'Theatre Unplugged',
    category: 'theatre',
    categoryLabel: 'Theatre',
    isFeatured: false,
    date: '31 October 2026',
    time: '7:00 PM',
    city: 'Noida',
    venue: 'Studio Blackbox, Sector 62, Noida',
    description: 'An intimate independent theatre performance.',
    longDescription: 'An independent dramatic performance exploring interpersonal connection, modern ambitions, and vulnerability, staged with minimal set pieces to emphasize intense acting and character depth.',
    image: '/artists/actor_portrait.jpg',
    badge: 'Stage Play',
    demoTag: 'Fictional Demo Event',
  },
  {
    id: 'move-in-motion',
    title: 'Move in Motion',
    category: 'dance',
    categoryLabel: 'Dance',
    isFeatured: false,
    date: '1 November 2026',
    time: '6:30 PM',
    city: 'Gurugram',
    venue: 'Pulse Movement Studio, Cyber City, Gurugram',
    description: 'Contemporary dance and movement performances.',
    longDescription: 'An evocative movement showcase featuring contemporary dancers, physical theatre choreographers, and collaborative soundscapes that push the boundaries of modern movement.',
    image: '/artists/dancer_stage.jpg',
    badge: 'Dance Showcase',
    demoTag: 'Fictional Demo Event',
  },
];

/**
 * Categories for the Collaborate & Create section filters
 */
export const COLLABORATION_CATEGORIES = [
  { id: 'all', label: 'All Opportunities' },
  { id: 'music', label: 'Music' },
  { id: 'film', label: 'Film' },
  { id: 'performance', label: 'Performance' },
  { id: 'dance', label: 'Dance' },
];

/**
 * Editorial sample collaboration calls
 * NOTE: All listings are fictional demonstration content for frontend presentation.
 */
export const COLLABORATION_OPPORTUNITIES = [
  {
    id: 'opp-vocalist',
    title: 'Looking for a Vocalist',
    category: 'music',
    categoryLabel: 'Music',
    location: 'Delhi',
    creator: 'Acoustic & Synth Lab',
    creatorRole: 'Music Producer',
    description: 'An independent music producer is looking for a vocalist for an original track.',
    fullDescription: 'Currently completing an atmospheric indie-electronic EP. Seeking an expressive vocalist (open to any vocal range) to co-write lyrics and record lead vocal melodies for an original featured single.',
    requirements: ['Original songwriting collaboration', 'Acoustic / indie vocal style', 'Studio recording session in Delhi NCR'],
    image: '/artists/singer.jpg',
    tags: ['Vocals', 'Songwriting', 'Recording Session'],
    demoTag: 'Demo Opportunity',
  },
  {
    id: 'opp-short-film',
    title: 'Short Film Casting',
    category: 'film',
    categoryLabel: 'Film',
    location: 'Noida',
    creator: 'Sector 62 Filmworks',
    creatorRole: 'Independent Director',
    description: 'An independent filmmaker is looking for actors for a short-film project.',
    fullDescription: 'Casting two expressive lead actors for a 15-minute narrative drama shooting in Noida. The story explores late-night conversations, ambition, and departures. Table read scheduled next week.',
    requirements: ['Method or naturalistic acting', '2 Lead Roles (playing ages 22-35)', 'Weekend filming schedule in Noida'],
    image: '/artists/filmmaker_camera.jpg',
    tags: ['Acting', 'Lead Roles', 'Narrative Drama'],
    demoTag: 'Demo Opportunity',
  },
  {
    id: 'opp-comedy-showcase',
    title: 'Live Comedy Showcase',
    category: 'performance',
    categoryLabel: 'Performance',
    location: 'Gurugram',
    creator: 'The Underground Collective',
    creatorRole: 'Comedy Curator',
    description: 'A comedy collective is seeking performers for a collaborative showcase.',
    fullDescription: 'Curating a collaborative 90-minute evening featuring 4 distinct comedic voices. Seeking comics with 7-10 minutes of polished observational material or improv sketch work ready for a live audience.',
    requirements: ['7-10 minute tight set', 'Observational / improv comedy', 'Rehearsal and lineup run-through in Gurugram'],
    image: '/artists/comedian_stage2.jpg',
    tags: ['Stand-up', 'Improv', 'Stage Showcase'],
    demoTag: 'Demo Opportunity',
  },
  {
    id: 'opp-dance-collab',
    title: 'Dance Video Collaboration',
    category: 'dance',
    categoryLabel: 'Dance',
    location: 'Delhi',
    creator: 'Kinesis Studio & Lens',
    creatorRole: 'Choreographer & DP',
    description: 'A choreographer and videographer want to create a collaborative dance film.',
    fullDescription: 'Seeking contemporary movement artists to co-create an outdoor conceptual dance film shot in Delhi heritage architecture. Looking for dancers comfortable with fluid improvisation and cinematic lighting.',
    requirements: ['Contemporary movement background', 'Comfortable with location shooting', 'Improvisational choreography'],
    image: '/artists/dancer_pose.jpg',
    tags: ['Contemporary Dance', 'Cinematography', 'Concept Film'],
    demoTag: 'Demo Opportunity',
  },
];

