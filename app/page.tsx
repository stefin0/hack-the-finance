import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-center mt-8 font-extrabold">
        Hack The Finance...Hacking...
      </h1>
      <p>This is a paragraph, it has words in it</p>
    </main>
  );
}
