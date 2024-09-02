import Image from "next/image";
export default function  Navigationbar(){
    return(
        <nav className="flex p-5 bg-artisticblue justify-between px-10 items-center ">
            <Image
                src={"/logo.jpeg"}
                width={300}
                height={300}
                alt="Eco-Threads logo"
            ></Image>
            <section>
                <ul className="text-xl text-white flex cursor-pointer  ">
                    <li className="mx-5 hover:text-forestgreen">Home</li>
                    <li className="mx-5 hover:text-forestgreen">About</li>
                    <li className="mx-5 hover:text-forestgreen">Contact</li>
                </ul>
            </section>
        </nav>
    )
}