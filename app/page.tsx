import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-center mt-8 font-extrabold">
        Hack The Money...Hacking...
      </h1>
      <div className="flex justify-center">
        <Link href="/savings" className="bg-green-700 p-3 rounded mx-2">
          Savings
        </Link>
        <Link href="/investing" className="bg-green-700 p-3 rounded mx-2">
          Investing
        </Link>
        <Link href="/daily-budget" className="bg-green-700 p-3 rounded mx-2">
          Budget
        </Link>
        <Link href="/about" className="bg-red-700 p-3 rounded mx-2">
          About
        </Link>
      </div>
    </main>
  );
}
