import Counter from '@/components/counter';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Image
        src="/logo.jpeg"
        width={100}
        height={100}
        priority
        fetchPriority="high"
        quality={100}
        alt="Logo"
        className="object-cover mt-12"
      />

      <h1 className="text-4xl text-primary mt-2 font-[700] text-center">
        JOIN THE MOVEMENT
      </h1>
      <p className="text-center font-normal text-base mt-3">
        The team is growing everyday and scroing wins for the planet. <br />{' '}
        Plant with us and track our progress!
      </p>

      <Counter from={0} to={12323212} />
    </main>
  );
}
