import Image from "next/image";

export default function Community() {
    return (
        <div id="community"  >
            <h1 className=" sm: text-bold md:text-5xl text-3xl text-center mt-8  lg:mt-[10%] pb-5 mr-8 text-artisticblue ">Meet Our Community</h1>
            <div className="sm:grid lg:flex md:grid m-3 mt-5">
                <div className="sm:mt-5">
                    <div className="flex items-center justify-center pb-3 mb-3 box-shadow">
                        <section className="flex justify-center rounded-full w-[200px] h-[200px] overflow-hidden ">
                            <Image
                                src={"/profile2.jpg"}
                                alt="Eco-Shopper"
                                width={300}
                                height={300}
                                className="object-cover md: items-center"
                            />
                        </section>
                    </div>
                    <p className="m-3 md:text-xl text-[16px]">
                        &quot;I&apos;ve always been mindful of my environmental impact, and Eco-Threads Hub has been a game-changer. From recycled home decor to eco-friendly accessories, I can find everything I need to live sustainably.&quot;</p>
                    <h1 className="m-2 text-center pb-5 md:font-bold   text-xl"> Emily, Eco- Shopper</h1>
                </div>
                <div className="sm:mt-5">
                    <div className="flex items-center justify-center pb-3 mb-3 box-shadow">
                        <section className="flex justify-center rounded-full w-[200px] h-[200px] overflow-hidden ">
                            <Image
                                src={"/profilepic1.jpg"}
                                alt="Eco-Shopper"
                                width={300}
                                height={300}
                                className="object-cover md: items-center"
                            />
                        </section>
                    </div>
                    <p className="m-3 md:text-xl text-[16px]">
                    &quot;Eco-Threads Hub not only helps me source ethically-made and recycled products but also connects me with recycling partners. It&apos;s an all-in-one platform for running my sustainable business.&quot;</p>
                    <h1 className="m-2 text-center pb-5 md:font-bold text-xl ">Carlos, Eco-Seller</h1>
                </div>
                <div className="sm:mt-5">
                    <div className="flex items-center justify-center pb-3 mb-3 box-shadow">
                        <section className="flex justify-center rounded-full w-[200px] h-[200px] overflow-hidden ">
                            <Image
                                src={"/profile3.jpg"}
                                alt="Eco-Shopper"
                                width={300}
                                height={300}
                                className="object-cover md: items-center"
                            />
                        </section>
                    </div>
                    <p className="m-3 md:text-xl text-[16px]">
                    &quot;Living sustainably doesn&apos;t mean sacrificing quality or style. Thanks to Eco-Threads Hub, I&apos;m able to find innovative, recycled products that match my lifestyle and values.&quot;</p>
                    <h1 className="m-2 text-center  md:font-bold text-xl ">Aisha,  Eco-Recycler</h1>
                </div>
            </div>
        </div>
    )
}