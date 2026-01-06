import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex justify-center pt-[350px] gap-[10px]">
            <Link
                className="w-[50px] h-[200px] bg-orange-300 flex justify-center items-center text-white font-bold rounded-[30px]"
                href={"/dog"}
            >
                Easy
            </Link>
            <Link
                className="w-[75px] h-[200px] bg-yellow-600 flex justify-center items-center text-white font-bold rounded-[30px]"
                href={"/doggy"}
            >
                Medium
            </Link>
            <Link
                className="w-[50px] h-[200px] bg-orange-300 flex justify-center items-center text-white font-bold rounded-[30px]"
                href={"/dogs"}
            >
                Hard
            </Link>
        </div>
    );
}