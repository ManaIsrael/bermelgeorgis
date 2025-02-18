import Link from "next/link";
import Image from "next/image";

export default function Map() {
    return(
        <div className="min-h-screen p-8 sm:p-20 font-sans">
            <main className="flex flex-col gap-8 sm:items-start">
                google maps
                latitude longitude
                photos of sites/places
                {/* carousel of the photos */}
                <Image
                className="m-4"
                src="/sites-on-the-way-five.png"
                alt="Sites of Bermel Georgis"
                width={750}
                height={500}
                loading="lazy"
                />
                Terbinos and Elshaday travelers photos
                initial, mid way and destinations
                it is possible to go on self but comfortable with
                agencies
                how far are yordanos and mrt delego from bermel
                transportation methods
                plane,boat,bus,foot
                shelters near
                {/* <iframe src=""></iframe> */}
                <Link href="/">Bermel Georgis</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/faq">Questions</Link>
            </main>
        </div>
    );
}