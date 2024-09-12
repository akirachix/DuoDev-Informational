import Image from "next/image";

export default function Values() {
    return (
        <div className=" lg:grid  lg:grid-cols-2 flex flex-col-reverse px-5 ">
            <div >
                <Image
                    src={"/picture1.jpeg"}
                    alt="values"
                    width={700}
                    height={700}
                ></Image>
            </div>
            <div className="mt-[20%]">
                <h1 className=" md:text-5xl text-3xl lg:mt-[10%] md:text-start  font-bold  text-center  text-artisticblue">Values</h1>
                <ul className=" md:mt-4 text-[16px]  text-artisticblue pr-3">
                    <li className="py-3"><b>Sustainability</b>: We are committed to environmental sustainability in all our operations.</li>
                    <li className="py-3"><b>Ethical Sourcing</b>: We ensure all products are sourced ethically and responsibly.</li>
                    <li className="py-3"><b>Community</b>: We foster a community of like-minded individuals who are passionate about sustainable fashion.</li>
                </ul>
            </div>
        </div>
    )
}   