import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <aside>
                <Image height={50} width={190} src="/img/logo.png" alt="logo" />
                <p>
                LEARNETIC Industries Ltd.
                <br />
                Providing reliable tech since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <Link href="/courses" className="hover:underline">Web Development</Link>
                <Link href="/courses" className="hover:underline">Digital Marketing</Link>
                <Link href="/courses" className="hover:underline">Design</Link>
                <Link href="/courses" className="hover:underline">Bussiness</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link href='/aboutUs' className="hover:underline ">About Us</Link>
                <a className="link link-hover">Contact : learnatic53@gmailcom</a>
            </nav>
        </footer>
    );
};

export default Footer;