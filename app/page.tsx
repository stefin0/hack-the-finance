import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-center mt-8 font-extrabold">
        Hack The Money...Hacking...
      </h1>
      <p className="text-center font-bold">This is a paragraph.</p>
      <h2>This is a smaller header.</h2>
    </main>
  );
}
