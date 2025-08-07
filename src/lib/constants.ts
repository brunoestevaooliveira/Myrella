import type { Memory, Photo, Reason, LoveQuote } from './types';

export const START_DATING_DATE = new Date(2025, 6, 2); // Month is 0-indexed, so July is 6

export const INITIAL_MEMORIES: Memory[] = [
  {
    id: '1',
    date: new Date(2025, 4, 17), // Corrigido para 17/05/2025
    title: 'Nossa Jornada Começou',
    description: 'O lindo dia em que oficialmente começamos a namorar e nossos corações se entrelaçaram.',
    tags: ['aniversário', 'amor'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'casal feliz',
  },
  {
    id: '2',
    date: new Date(2025, 7, 10),
    title: 'Primeiro Encontro no Cinema',
    description: 'Assistimos aquela comédia romântica e não parávamos de rir. Lembra do incidente da pipoca?',
    tags: ['encontro', 'diversão'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'cinema casal',
  },
  {
    id: '3',
    date: new Date(2025, 8, 22),
    title: 'Felicidade na Praia',
    description: 'Nossa primeira viagem à praia juntos. O pôr do sol era quase tão lindo quanto você.',
    tags: ['viagem', 'natureza'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'praia por do sol',
  },
   {
    id: '4',
    date: new Date(2025, 9, 15),
    title: 'Passeio de Outono',
    description: 'Um dia tranquilo aproveitando o ar fresco e as cores do outono, sempre juntos.',
    tags: ['passeio', 'natureza'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'casal outono',
  },
  {
    id: '5',
    date: new Date(2025, 10, 5),
    title: 'Abraço Aconchegante',
    description: 'Não há lugar no mundo onde eu me sinta mais seguro e amado do que em seus braços.',
    tags: ['carinho', 'amor'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'casal abraço',
  },
  {
    id: '6',
    date: new Date(2025, 11, 25),
    title: 'Nosso Primeiro Natal',
    description: 'Celebrando o Natal juntos, criando nossas próprias tradições e memórias.',
    tags: ['celebração', 'feriado'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'casal natal',
  },
  {
    id: '7',
    date: new Date(2026, 0, 1),
    title: 'Votos de Ano Novo',
    description: 'Brindando a um novo ano de amor, aventuras e felicidade um ao lado do outro.',
    tags: ['celebração', 'futuro'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'casal ano novo',
  },
];

export const INITIAL_PHOTOS: Photo[] = [
  {
    id: '1',
    src: 'https://placehold.co/521x927.png',
    alt: 'Um lindo abraço carinhoso',
    caption: 'Em seus braços, encontro meu porto seguro e todo o amor do mundo. ❤️',
    date: new Date(2025, 10, 5),
    dataAiHint: 'casal abraço'
  },
  {
    id: '2',
    src: 'https://placehold.co/1647x927.png',
    alt: 'Celebrando um momento especial',
    caption: 'Cada momento com você se torna uma celebração da nossa felicidade.',
    date: new Date(2025, 11, 25),
    dataAiHint: 'casal celebração'
  },
  {
    id: '3',
    src: 'https://placehold.co/1647x927.png',
    alt: 'Olhando para o futuro juntos',
    caption: 'Juntos, de mãos dadas, prontos para todos os lindos capítulos que ainda vamos escrever.',
    date: new Date(2026, 0, 1),
    dataAiHint: 'casal futuro'
  },
  {
    id: '4',
    src: 'https://placehold.co/522x927.png',
    alt: 'Passeio tranquilo e romântico',
    caption: 'A simplicidade de um passeio se torna extraordinária quando estou com você.',
    date: new Date(2025, 9, 15),
    dataAiHint: 'casal passeio'
  },
  {
    id: '5',
    src: 'https://placehold.co/522x927.png',
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

export const INITIAL_AFFECTION_MESSAGES: string[] = [
  "Você ilumina meu dia!",
  "Pensando em você ❤️",
  "Você é incrível!",
  "Um abraço virtual apertado!",
  "Mal posso esperar para te ver!",
  "Você me faz sorrir 😊",
  "Lembre-se: você é especial!",
  "Com carinho, para você.",
  "Cada momento ao seu lado é um presente.",
  "Você é meu pensamento favorito.",
  "Que seu dia seja tão lindo quanto você!",
  "Sua felicidade é a minha."
];
