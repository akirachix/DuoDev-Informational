import Image from "next/image";

export default function LandingPage() {
    return (
        <div className=" grid  lg:grid-cols-2 mt-2 " id="landing-page">
            <div className= "lg:mt-[20%] md:pl-[3%] pl-3 mt-5 ">
                <h1 className="md:text-5xl text-3xl   lg:mt-[10%] pb-5 text-artisticblue">
                    Discover Sustainable <br />
                    Fashion at Eco-Threads Hub
                </h1>
                <p className="md:text-xl text-[16px] text-artisticblue pr-4 ">
                    Join the movement towards a greener future by exploring 
                    our curated selection of eco-friendly clothing and accessories.
                    At Eco-Threads Hub, we believe in sustainability and the power of
                    community-driven fashion.
                </p>
            </div>
            <div className="md:ml-[10%] lg:ml-2">
                <Image
                    src={"/sustainabletrends.png"}
                    width={600}
                    height={500}
                    alt="Sustainable fashion"
                    className=""
                ></Image>
            </div>
        </div>

    )
}