import Image from 'next/image';

export default function AmorPage() {
  return (
    <div className="flex flex-col items-center justify-center -m-8">
      <div className="relative w-full h-screen">
        <Image
          src="https://i.pinimg.com/1200x/97/7d/6c/977d6c33ebb0f8a8f9acf71f4b07a943.jpg"
          alt="Céu azul com nuvens brancas"
          layout="fill"
          objectFit="cover"
          unoptimized
          className="opacity-90"
          data-ai-hint="blue sky clouds"
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-lora text-white/90 drop-shadow-lg animate-pulse">
            Amor
          </h1>
        </div>
      </div>
    </div>
  );
}
