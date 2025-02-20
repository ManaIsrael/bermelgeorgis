import Link from "next/link";
import Image from "next/image";

export default function Map() {
    return(
        <div className="min-h-screen p-10 sm:p-20 font-sans">
            <main className="flex flex-col gap-8 sm:items-start">
                <h2>The Location of Bermel Georgis</h2>
                <p>
                    Bermel Georgis is located in Qwara, a hot region where 
                    temperatures exceed 36&deg;C in the summer. The area is home to local 
                    villagers. For baptizands, shelters have been prepared by 
                    travel agencies, offering standard amenities such as 
                    toilets, closets, dining areas, and sleeping rooms. 
                    Baptizands typically bring their own food or purchase 
                    meals from small restaurants and shops nearby.
                </p>

                <table className="border border-separate border-spacing-3">
                    <caption>The coordinates of Bermel Georgis</caption>
                    <thead>
                        <tr>
                            <th className="border">Type</th>
                            <th className="border">Latitude</th>
                            <th className="border">Longitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border">GeoCoordinates</td>
                            <td className="border">12.390050322463525</td>
                            <td className="border">35.74829690239708</td>
                        </tr>
                    </tbody>
                </table>

                <div className="relative w-full h-96 overflow-hidden">
                    <iframe
                    width="600"
                    height="450"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.1523896545773!2d35.745723574238994!3d12.390034887874435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x165eaf0018138d6b%3A0xcba7cbfe9da7ffaa!2sBermel%20Georgis!5e1!3m2!1sen!2set!4v1740079813958!5m2!1sen!2set" 
                    title="Bermel Georgis Map"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl absolute top-0 left-0 w-full h-full"
                    loading="lazy"
                    ></iframe>
                </div>
                {/* photos of sites/places */}
                {/* carousel of the photos */}
                <p>
                    Bermel Georgis is in the Qwara Desert in Ethiopia, approximately 940 
                    kilometers from Addis Ababa. It is about an hour journey from Addis Ababa 
                    Bole airport to Bahirdar airport via airplane. There is bus transportation 
                    from Bahirdar to Bermel Georgis which takes about 14 hours ride approximately.
                    There are travel associations which make the journey comfortable.
                    Travel agencies like Elshaday, Terbinos, and Emahus provide all 
                    the necessary transportation options to get you to 
                    Bermel Georgis, including airplanes, buses, and boats.
                </p>
               
                <p>
                    The travel associations provide shelters equipped with all the 
                    essentials, including sleeping, prayer, and dining rooms, 
                    toilets, and more, at Bermel Georgis for their travelers. 
                    If you choose to travel independently, you may consider bringing 
                    your own tent, using shelters provided by the church, or possibly 
                    renting a house in the nearby village.
                </p>
                <caption className="ml-4">Lake Tana on the way to Bahirdar airport:</caption>
                <Image
                className="mx-4"
                src="/images/sites-on-the-way-five.png"
                alt="Lake Tana photo captured from airplane on the way to Bahirdar."
                width={750}
                height={500}
                loading="lazy"
                />
                {/* Terbinos and Elshaday travelers photos */}
                <p>
                    The area is a desert, but there is a village and small shops 
                    near Bermel Georgis. Additionally, there is an Ethiopian 
                    Orthodox Tewahedo Church dedicated to Mother Virgin Mary 
                    and Saint George. A nearby river serves as a place where 
                    baptizands can shower. There are also other holy water 
                    sites called Mrt Delego Kidane Mihret and Yordanos, which 
                    are very similar to Bermel Georgis and located not far from it.
                </p>
                
                <ul>
                    <li className="mb-4">
                        <Link 
                        href="/" 
                        className="underline font-bold"
                        aria-label="Navigate to home page"
                        >Bermel Georgis</Link>
                    </li>

                    <li className="mb-4">
                        <Link 
                        href="/contact" 
                        className="underline font-bold"
                        aria-label="Navigate to contact page"
                        >Contact</Link>
                    </li>

                    <li>
                        <Link 
                        href="/faq" 
                        className="underline font-bold"
                        aria-label="Navigate to frequently asked questions page"
                        >Questions</Link>
                    </li>
                </ul>
                
            </main>
        </div>
    );
}