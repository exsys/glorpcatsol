import { MEMES } from "@/assets/memes";

export default function MemeSection() {
    return (
        <div className="h-fit">
            <div className="flex flex-col gap-20 items-center py-20">
                <h1 className="text-5xl text-[#0f0]">
                    Embrace glorp
                </h1>
                <div className="w-4/5 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {MEMES.map((meme: any, index: number) => (
                            <div key={index}>
                                <img src={meme.src} alt="" className="rounded-lg" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}