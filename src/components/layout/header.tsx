"use client";
import Link from "next/link";
import TwitterBird from "../icons/twitter-bird";
import Telegram from "../icons/telegram";
import DexScreener from "../icons/dexscreener";
import Jupiter from "../icons/jupiter";

export default function Header() {
    return (
        <header className="absolute w-full p-2 z-50">
            <div className="py-7 w-[92%] lg:w-4/5 xl:w-3/5 mx-auto">
                <nav className="flex flex-col sm:flex-row justify-center items-center w-full">
                    <div className="flex-1 cursor-pointer drop-shadow-md">
                        <img src="/images/glorp.jpg" alt="" className="w-20 h-20 rounded-full" />
                    </div>
                    <ul className="flex gap-10 items-center justify-center bg-black/40 py-5 px-6 sm:px-12 rounded-full flex-1">
                        <li className={`nav-link`}>
                            <Link href={"https://twitter.com/glorpcatsol"} target="_blank">
                                <TwitterBird className="w-10 h-10" />
                            </Link>
                        </li>
                        <li className={`nav-link`}>
                            <Link href={"https://t.me/+dKo9P1LejJEyMmVk"} target="_blank">
                                <Telegram className="w-10 h-10" />
                            </Link>
                        </li>
                        <li className={`nav-link`}>
                            <Link href={"https://dexscreener.com/solana/GZqCkvYTrfNUiPuKs5sWYPuFb2FHqHCJazPkGYWunTng"} target="_blank">
                                <DexScreener className="w-12 h-12" />
                            </Link>
                        </li>
                        <li className={`nav-link`}>
                            <Link href={"https://jup.ag/swap/SOL-FkBF9u1upwEMUPxnXjcydxxVSxgr8f3k1YXbz7G7bmtA"} target="_blank">
                                <Jupiter className="w-10 h-10" />
                            </Link>
                        </li>
                    </ul>
                    <div className="w-fit flex-1 flex justify-end">
                        <Link href="https://raydium.io/swap/?outputCurrency=FkBF9u1upwEMUPxnXjcydxxVSxgr8f3k1YXbz7G7bmtA" target="_blank"
                            className="text-base lg:text-xl hover:bg-[#0f0] hover:text-black py-2.5 px-6 rounded-full
                        bg-black text-[#0f0] border border-[#0f0] transition-all font-medium">
                            Buy $GLORP
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}