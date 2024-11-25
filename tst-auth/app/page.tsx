import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (
  <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <Image
        width={256}
        height={256}
        src="/logo-with-name.png"
        alt=""
        className="max-w-sm rounded-lg shadow-2xl ml-10" />
      <div>
        <h1 className="text-5xl font-bold">Get started with <br/>Lautan API!</h1>
        <p className="py-6">
          API paling keren sejagad raya<br/>
          kabarnya semua full-stack developer KETAR-KETIR<br/>
          melihat ini!
        </p>
        <Link href="/documentation" className="btn btn-primary">Get Started</Link>
      </div>
    </div>
  </div>
  );
}
