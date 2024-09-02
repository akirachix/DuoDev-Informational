import Image from "next/image";

export default function Community() {
    return (
        <div>
            <h1 className="text-5xl mb-[2%] mt-[5%] text-artisticblue text-center">Community</h1>
            <div className="sect2 mt-9">
                <div>
                    <div className="ml-[25%] pb-3">
                        <section className="flex justify-center rounded-full w-[200px] h-[200px] overflow-hidden ">
                            <Image
                                src={"/profile2.jpg"}
                                alt="Eco-Shopper"
                                width={300}
                                height={300}
                            ></Image>
                        </section>
                    </div>
                    <p className="text-xl">"I've always been mindful of my environmental impact, and Eco-Threads Hub has been a game-changer. From recycled home decor to eco-friendly accessories, I can find everything I need to live sustainably.”</p>
                    <h1 className="font-bold  pt-5 text-xl"> Emily, Eco- Shopper</h1>
                </div>
                <div>
                    <div className="ml-[25%] pb-3">
                        <section className="flex justify-center rounded-full w-[200px] h-[200px] overflow-hidden ">
                            <Image
                                src={"/profilepic1.jpg"}
                                alt="Eco-Shopper"
                                width={300}
                                height={300}
                            ></Image>
                        </section>
                    </div>
                    <p className="text-xl">"Eco-Threads Hub not only helps me source ethically-made and recycled products but also connects me with recycling partners. It's an all-in-one platform for running my sustainable business."</p>
                    <h1 className="font-bold text-xl pt-5">Carlos, Eco-Seller</h1>
                </div>
                <div>
                    <div className="ml-[25%] pb-3">
                        <section className="flex justify-center rounded-full w-[200px] h-[200px] overflow-hidden ">
                            <Image
                                src={"/profile3.jpg"}
                                alt="Eco-Shopper"
                                width={300}
                                height={300}
                            ></Image>
                        </section>
                    </div>
                    <p className="text-xl">"Living sustainably doesn't mean sacrificing quality or style. Thanks to Eco-Threads Hub, I'm able to find innovative, recycled products that match my lifestyle and values."</p>
                    <h1 className="font-bold text-xl pt-5">Aisha,  Eco-Recycler</h1>
                </div>
            </div>
        </div>
    )
}