import Image from "next/image";

export default function Values() {
    return (
        <div className="sect1">
            <div >
                <Image
                    src={"/picture1.jpeg"}
                    alt="values"
                    width={700}
                    height={700}
                ></Image>
            </div>
            <div className="mt-[10%]">
                <h1 className="text-5xl mt-[10%]  text-artisticblue">Values</h1>
                <ul className=" mt-4 text-xl text-artisticblue">
                    <li className="py-3"><b>Sustainability</b>: We are committed to environmental sustainability in all our operations.</li>
                    <li className="py-3"><b>Ethical Sourcing</b>: We ensure all products are sourced ethically and responsibly.</li>
                    <li className="py-3"><b>Community</b>: We foster a community of like-minded individuals who are passionate about sustainable fashion.</li>
                </ul>
            </div>
        </div>
    )
}   