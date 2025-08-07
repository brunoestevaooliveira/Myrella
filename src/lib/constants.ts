
import type { Memory, Photo, Reason, LoveQuote } from './types';

// The 'T00:00:00' part is important to avoid timezone issues and ensure the date is consistent.
export const START_DATING_DATE = new Date('2025-08-02T00:00:00');

export const INITIAL_MEMORIES: Memory[] = [
  {
    id: '1',
    date: new Date('2025-08-02T00:00:00'),
    title: 'Nossa Jornada Começou',
    description: 'O lindo dia em que oficialmente começamos a namorar e nossos corações se entrelaçaram.',
    tags: ['aniversário', 'amor'],
    image: 'https://i.pinimg.com/736x/81/71/51/8171515f162cc1254da32d59c23ad43f.jpg',
    dataAiHint: 'casal feliz',
  },
  {
    id: '2',
    date: new Date('2025-08-10T00:00:00'),
    title: 'Primeiro Encontro no Cinema',
    description: 'Assistimos aquela comédia romântica e não parávamos de rir. Lembra do incidente da pipoca?',
    tags: ['encontro', 'diversão'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'cinema casal',
  },
  {
    id: '3',
    date: new Date('2025-09-22T00:00:00'),
    title: 'Felicidade na Praia',
    description: 'Nossa primeira viagem à praia juntos. O pôr do sol era quase tão lindo quanto você.',
    tags: ['viagem', 'natureza'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'praia por do sol',
  },
   {
    id: '4',
    date: new Date('2025-10-15T00:00:00'),
    title: 'Passeio de Outono',
    description: 'Um dia tranquilo aproveitando o ar fresco e as cores do outono, sempre juntos.',
    tags: ['passeio', 'natureza'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'casal outono',
  },
  {
    id: '5',
    date: new Date('2025-11-05T00:00:00'),
    title: 'Abraço Aconchegante',
    description: 'Não há lugar no mundo onde eu me sinta mais seguro e amado do que em seus braços.',
    tags: ['carinho', 'amor'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'casal abraço',
  },
  {
    id: '6',
    date: new Date('2025-12-25T00:00:00'),
    title: 'Nosso Primeiro Natal',
    description: 'Celebrando o Natal juntos, criando nossas próprias tradições e memórias.',
    tags: ['celebração', 'feriado'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'casal natal',
  },
  {
    id: '7',
    date: new Date('2026-01-01T00:00:00'),
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
    date: new Date('2025-11-05T00:00:00'),
    dataAiHint: 'casal abraço'
  },
  {
    id: '2',
    src: 'https://placehold.co/1647x927.png',
    alt: 'Celebrando um momento especial',
    caption: 'Cada momento com você se torna uma celebração da nossa felicidade.',
    date: new Date('2025-12-25T00:00:00'),
    dataAiHint: 'casal celebração'
  },
  {
    id: '3',
    src: 'https://placehold.co/1647x927.png',
    alt: 'Olhando para o futuro juntos',
    caption: 'Juntos, de mãos dadas, prontos para todos os lindos capítulos que ainda vamos escrever.',
    date: new Date('2026-01-01T00:00:00'),
    dataAiHint: 'casal futuro'
  },
  {
    id: '4',
    src: 'https://placehold.co/522x927.png',
    alt: 'Passeio tranquilo e romântico',
    caption: 'A simplicidade de um passeio se torna extraordinária quando estou com você.',
    date: new Date('2025-10-15T00:00:00'),
    dataAiHint: 'casal passeio'
  },
  {
    id: '5',
    src: 'https://placehold.co/522x927.png',
    alt: 'Explorando uma nova cidade',
    caption: 'Nossa aventura de fim de semana.',
    date: new Date('2025-11-18T00:00:00'),
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
  { id: '7', text: 'A forma como você sempre sabe como me confortar quando estou para baixo.' },
  { id: '8', text: 'Seu abraço, que é o meu lugar favorito no mundo.' },
  { id: '9', text: 'A paciência infinita que você tem comigo.' },
  { id: '10', text: 'O jeito que seus olhos brilham quando você fala sobre algo que ama.' },
  { id: '11', text: 'Você me inspira a ser uma pessoa melhor a cada dia.' },
  { id: '12', text: 'Sua lealdade e a certeza de que posso contar com você para tudo.' },
  { id: '13', text: 'A forma como transformamos momentos simples em memórias inesquecíveis.' },
  { id: '14', text: 'Sua força para enfrentar qualquer desafio que a vida apresenta.' },
  { id: '15', text: 'O som da sua risada é a minha melodia favorita.' },
  { id: '16', text: 'Porque você me entende com apenas um olhar.' },
  { id: '17', text: 'A maneira como você cuida de mim e se preocupa com meu bem-estar.' },
  { id: '18', text: 'Seu gosto musical incrível, que me apresentou tantas músicas novas.' },
  { id: '19', text: 'Você me faz sentir a pessoa mais amada e especial do universo.' },
  { id: '20', text: 'A segurança que sinto ao segurar sua mão.' },
  { id: '21', text: 'Sua paixão pela vida e por aprender coisas novas.' },
  { id: '22', text: 'Como você consegue ser a pessoa mais fofa e a mais forte ao mesmo tempo.' },
  { id: '23', text: 'As conversas profundas que temos até tarde da noite.' },
  { id: '24', text: 'Porque até o silêncio ao seu lado é confortável.' },
  { id: '25', text: 'A forma como você se lembra dos pequenos detalhes sobre mim.' },
  { id: '26', text: 'Porque, com você, a vida é uma aventura muito mais bonita.' },
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
