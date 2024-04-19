import Link from "next/link";
import TwitterBird from "../icons/twitter-bird";
import Telegram from "../icons/telegram";
import DexScreener from "../icons/dexscreener";
import Jupiter from "../icons/jupiter";

export default function Footer() {
    return (
        <div>
            <footer className="bg-black text-white text-center p-4">
                <div className="flex flex-col w-full sm:w-3/4 sm:flex-row mx-auto justify-between items-center">
                    <div className="cursor-pointer">
                        <img src="/images/glorp.jpg" alt="" className="w-20 h-20 rounded-full" />
                    </div>

                    <div>
                        <nav>
                            <ul className="flex gap-10 items-center justify-center bg-black/40 py-5 px-6 sm:px-12 rounded-full">
                                <li className="nav-link">
                                    <Link href="https://twitter.com/glorpcatsol" target="_blank">
                                        <TwitterBird className="w-10 h-10" />
                                    </Link>
                                </li>
                                <li className="nav-link">
                                    <Link href="https://t.me/+dKo9P1LejJEyMmVk" target="_blank">
                                        <Telegram className="w-10 h-10" />
                                    </Link>
                                </li>
                                <li className="nav-link">
                                    <Link href="https://dexscreener.com/solana/GZqCkvYTrfNUiPuKs5sWYPuFb2FHqHCJazPkGYWunTng" target="_blank">
                                        <DexScreener className="w-12 h-12" />
                                    </Link>
                                </li>
                                <li className="nav-link">
                                    <Link href="https://jup.ag/swap/SOL-FkBF9u1upwEMUPxnXjcydxxVSxgr8f3k1YXbz7G7bmtA" target="_blank">
                                        <Jupiter className="w-10 h-10" />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    )
}