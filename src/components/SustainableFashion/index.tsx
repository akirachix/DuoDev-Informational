import Image from "next/image";

export default function SustainableFashion() {
    return (
        <div className="sect1 mt-5 ">
            <div className=" mt-[15%] pl-20">
                <h1 className="text-6xl mt-[10%] pb-5 text-artisticblue">
                    Discover Sustainable <br />
                    Fashion at Eco-Threads Hub
                </h1>
                <p className="text-xl text-artisticblue">
                    Join the movement towards a greener future by exploring <br />
                    our curated selection of eco-friendly clothing and accessories.{" "}
                    <br />
                    At Eco-Threads Hub, we believe in sustainability and the power of{" "}
                    <br />
                    community-driven fashion.
                </p>
            </div>
            <div className="ml-[15%]">
                <Image
                    src={"/sustainabletrends.png"}
                    width={750}
                    height={750}
                    alt="Sustainable fashion"
                    className="mt-[10%]"
                ></Image>
            </div>
        </div>

    )
}