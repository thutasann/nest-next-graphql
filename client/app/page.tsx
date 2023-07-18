import CounterSection from '@/section/CounterSection';
import Image from 'next/image';

export default async function Hxome() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Image
        src="/logo.png"
        width={100}
        height={100}
        priority
        fetchPriority="high"
        quality={100}
        alt="Logo"
        className="object-cover mt-12"
      />

      <h1 className="text-4xl text-primary mt-2 font-[800] text-center uppercase">
        Nestjs Nextjs Graphql
      </h1>
      <p className="text-center font-normal text-base mt-3">
        This is the Mini Fullstack App along with real-time data crafted with{' '}
        <br />
        <b>Nestjs</b>, <b>Nextjs</b>, <b>Graphql</b>, <b>Prisma</b>,{' '}
        <b>Mongodb</b>
      </p>
      <CounterSection />
    </main>
  );
}
