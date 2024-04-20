"use client";
import Matrix from "../layout/matrix";

export default function HeroSection() {
    return (
        <div className="h-full relative">
            <div className="flex justify-center items-center h-screen">
                <div className="absolute z-0">
                    <Matrix />
                </div>
                <div className="h-full w-full flex flex-col justify-center items-center z-10 gap-20 pt-[320px] sm:pt-24">
                    <img src="/images/glorp-compressed.gif" alt="" className="w-[94%] sm:w-[400px] sm:h-[400px] rounded-md drop-shadow-lg" />
                    <div className="border border-[#0f0] py-2 px-4 sm:px-8 rounded-full text-[12px] sm:text-xl font-medium
                    bg-black/30">
                        FkBF9u1upwEMUPxnXjcydxxVSxgr8f3k1YXbz7G7bmtA
                    </div>
                </div>
            </div>
        </div>
    )
}