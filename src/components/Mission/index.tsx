import Image from "next/image";

export default function Mission() {
    return (
        <div className="sect1 ml-[5%]">
            <div className="mt-[5%]">
                <h1 className="text-5xl mt-[10%]  text-artisticblue">Mission</h1>
                <p className="text-xl text-artisticblue pt-4">
                    At Eco-Threads Hub, our mission is to promote sustainable fashion
                    and reduce <br /> textile waste. We connect second-hand sellers
                    with recycling companies, fostering a circular economy for
                    clothing and accessories that benefits both the planet and the
                    community.
                </p>
            </div>
            <div>
                <Image
                    src={"/picture2.jpeg"}
                    width={750}
                    height={750}
                    className=""
                    alt="mission"
                ></Image>
            </div>
        </div>
    )
}   