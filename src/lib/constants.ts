import type { Memory, Photo, Reason, LoveQuote } from './types';

export const START_DATING_DATE = new Date(2025, 4, 17); // Month is 0-indexed, so May is 4

export const INITIAL_MEMORIES: Memory[] = [
  {
    id: '1',
    date: new Date(2025, 4, 17),
    title: 'Nossa Jornada Começou',
    description: 'O lindo dia em que oficialmente começamos a namorar e nossos corações se entrelaçaram.',
    tags: ['aniversário', 'amor'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'casal feliz',
  },
  {
    id: '2',
    date: new Date(2025, 5, 10),
    title: 'Primeiro Encontro no Cinema',
    description: 'Assistimos aquela comédia romântica e não parávamos de rir. Lembra do incidente da pipoca?',
    tags: ['encontro', 'diversão'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'cinema casal',
  },
  {
    id: '3',
    date: new Date(2025, 6, 22),
    title: 'Felicidade na Praia',
    description: 'Nossa primeira viagem à praia juntos. O pôr do sol era quase tão lindo quanto você.',
    tags: ['viagem', 'natureza'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'praia por do sol',
  },
];

export const INITIAL_PHOTOS: Photo[] = [
  {
    id: '1',
    src: 'https://placehold.co/600x400.png',
    alt: 'Uma linda lembrança juntos',
    caption: 'Aquela vez que fomos caminhar e nos perdemos (mas encontramos uma vista maravilhosa!).',
    date: new Date(2025, 7, 5),
    dataAiHint: 'casal caminhada'
  },
  {
    id: '2',
    src: 'https://placehold.co/600x400.png',
    alt: 'Celebrando uma ocasião especial',
    caption: 'Seu jantar de aniversário - você estava deslumbrante!',
    date: new Date(2025, 8, 12),
    dataAiHint: 'casal celebração'
  },
  {
    id: '3',
    src: 'https://placehold.co/600x400.png',
    alt: 'Uma noite aconchegante em casa',
    caption: 'Noite de cinema com pizza caseira. Melhor combinação!',
    date: new Date(2025, 9, 3),
    dataAiHint: 'casal aconchego'
  },
  {
    id: '4',
    src: 'https://placehold.co/600x400.png',
    alt: 'Explorando uma nova cidade',
    caption: 'Nossa aventura de fim de semana.',
    date: new Date(2025, 10, 18),
    dataAiHint: 'casal viagem'
  },
];

export const INITIAL_REASONS: Reason[] = [
  { id: '1', text: 'Seu lindo sorriso que ilumina meu mundo inteiro todos os dias.' },
  { id: '2', text: 'Sua bondade e compaixão inabaláveis por todos que você conhece.' },
  { id: '3', text: 'A maneira como você me faz rir até a barriga doer, mesmo nos dias difíceis.' },
  { id: '4', text: 'Sua inteligência incrível e a forma como você vê o mundo.' },
  { id: '5', text: 'O quanto você apoia meus sonhos e ambições.' },
  { id: '6', text: 'Seu espírito aventureiro e disposição para experimentar coisas novas comigo.' },
];

export const INITIAL_QUOTES: LoveQuote[] = [
  { id: '1', text: 'Amar não é olhar um para o outro, é olhar juntos na mesma direção.', author: 'Antoine de Saint-Exupéry' },
  { id: '2', text: 'O amor é a amizade que pegou fogo.', author: 'Ann Landers' },
  { id: '3', text: 'Sei que vou te amar por toda a minha vida.', author: 'Vinicius de Moraes' },
  { id: '4', text: 'Te amo não pelo que você é, mas pelo que sou quando estou com você.', author: 'Roy Croft' },
  { id: '5', text: 'Onde há amor, há vida.', author: 'Mahatma Gandhi' },
];
