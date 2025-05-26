import type { Memory, Photo, Reason } from './types';

export const START_DATING_DATE = new Date(2025, 4, 17); // Month is 0-indexed, so May is 4

export const INITIAL_MEMORIES: Memory[] = [
  {
    id: '1',
    date: new Date(2025, 4, 17),
    title: 'Our Journey Began',
    description: 'The beautiful day we officially started dating and our hearts intertwined.',
    tags: ['anniversary', 'love'],
  },
  {
    id: '2',
    date: new Date(2025, 5, 10),
    title: 'First Movie Date',
    description: 'We watched that romantic comedy and couldn\'t stop laughing. Remember the popcorn incident?',
    tags: ['date', 'fun'],
  },
  {
    id: '3',
    date: new Date(2025, 6, 22),
    title: 'Beach Day Bliss',
    description: 'Our first trip to the beach together. The sunset was almost as beautiful as you.',
    tags: ['trip', 'nature'],
  },
];

export const INITIAL_PHOTOS: Photo[] = [
  {
    id: '1',
    src: 'https://placehold.co/600x400.png',
    alt: 'A beautiful memory together',
    caption: 'That time we went hiking and got lost (but found a gorgeous view!).',
    date: new Date(2025, 7, 5),
    dataAiHint: 'couple hiking'
  },
  {
    id: '2',
    src: 'https://placehold.co/600x400.png',
    alt: 'Celebrating a special occasion',
    caption: 'Your birthday dinner - you looked stunning!',
    date: new Date(2025, 8, 12),
    dataAiHint: 'couple celebration'
  },
  {
    id: '3',
    src: 'https://placehold.co/600x400.png',
    alt: 'A cozy evening in',
    caption: 'Movie night with homemade pizza. Best combo!',
    date: new Date(2025, 9, 3),
    dataAiHint: 'couple cozy'
  },
  {
    id: '4',
    src: 'https://placehold.co/600x400.png',
    alt: 'Exploring a new city',
    caption: 'Our weekend getaway adventure.',
    date: new Date(2025, 10, 18),
    dataAiHint: 'couple travel'
  },
];

export const INITIAL_REASONS: Reason[] = [
  { id: '1', text: 'Your beautiful smile that lights up my entire world every single day.' },
  { id: '2', text: 'Your unwavering kindness and compassion towards everyone you meet.' },
  { id: '3', text: 'The way you make me laugh until my stomach hurts, even on tough days.' },
  { id: '4', text: 'Your incredible intelligence and the way you see the world.' },
  { id: '5', text: 'How supportive you are of my dreams and ambitions.' },
  { id: '6', text: 'Your adventurous spirit and willingness to try new things with me.' },
];
