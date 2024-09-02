import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-[100%] bg-artisticblue text-slate-200">
            <div className="mx-[5%]">
                <h1 className="text-xl p-[30px]">©2024 Eco-Threads Hub</h1>
                <div className="sect1">
                    <section className="pb-5">
                        <ul className="text-xl flex  ">
                            <li className="mx-5">Home</li>
                            <li className="mx-5">About</li>
                            <li className="mx-5">Contact</li>
                        </ul>
                    </section>
                    {/* icons */}
                    <section className="flex text-xl list none ml-[70%] ">
                        <ul className="flex">
                            <Link href="https://www.facebook.com/"> <li className="px-2"> <FaFacebookF /></li></Link>
                            <Link href="https://www.linkedin.com/"> <li className="px-2"><FaLinkedinIn /></li></Link>
                            <Link href="https://www.twitter.com/"><li className="px-2"><FaTwitter /></li></Link>
                            <Link href="https://www.youtube.com/"><li className="px-2"><FaYoutube /></li></Link>
                            <Link href="https://www.instagram.com/"><li className="px-2"> <FaInstagram /></li></Link>
                        </ul>
                    </section>
                </div>
                <hr className="w-[100%] pb-9" />
            </div>
        </footer>

    )
}