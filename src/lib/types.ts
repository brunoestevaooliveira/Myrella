export interface Memory {
  id: string;
  date: Date;
  title: string;
  description: string;
  tags?: string[];
  image?: string; // Optional image URL
}

export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption: string;
  date: Date;
  dataAiHint?: string;
}

export interface Reason {
  id: string;
  text: string;
}

export interface LoveQuote {
  id: string;
  text: string;
  author?: string;
}
