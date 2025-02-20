import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 sm:items-start">
        <h2 className="text-2xl font-bold">Contact Information for Bermel Georgis Travel Associations</h2>

        <p>
          Several travel associations specialize in taking travelers to Bermel Georgis. The following are the most popular ones, chosen by many for their reliable services. These associations provide accommodations at Bermel Georgis, handle baptism reservations, and ensure a seamless experience from departure to return.
        </p>

        <section>
          <h3 className="text-xl font-semibold">1. Elshaday Travel Association and Charity</h3>
          <p>
            Elshaday runs three YouTube media channels: Elshaday Media, Dorqa Media, and Elda Media. These platforms share interviews with baptized witnesses. The association was founded by Alaye and his team.
          </p>
          <Image
            className="my-4"
            src="/elshaday-media-logo.png"
            alt="Elshaday Travel Association Logo"
            width={150}
            height={150}
            loading="lazy"
          />
          <ul className="space-y-2">
            <li><a href="tel:+2510965454545">+251 0965 454545</a></li>
            <li><a href="tel:+2510906787878">+251 0906 787878</a></li>
            <li><a href="tel:+2510954777779">+251 0954 777779</a></li>
            <li><a href="tel:+2510969917070">+251 0969 917070</a></li>
            <li><a href="tel:+2510941161616">+251 0941 161616</a></li>
            <li><a href="tel:+2510943121212">+251 0943 121212</a></li>
          </ul>
          <address className="mt-2">Megenagna Marathon Building, 6<sup>th</sup> Floor, Office 603, Addis Ababa, Ethiopia</address>
          <Image
            className="my-4"
            src="/images/sample-witness-thirty-three.png"
            alt="Founder Alaye interviewing a witness"
            width={750}
            height={500}
            loading="lazy"
          />
        </section>

        <section>
          <h3 className="text-xl font-semibold">2. Terbinos Travel Agency and Charity</h3>
          <p>
            Terbinos operates the Terbinos YouTube Media channel. It was founded by Solomon and his team.
          </p>
          <Image
            className="my-4"
            src="/terbinos-media-logo.png"
            alt="Terbinos Travel Agency Logo"
            width={150}
            height={150}
            loading="lazy"
          />
          <ul className="space-y-2">
            <li><a href="tel:+2510910101073">+251 0910 101073</a></li>
            <li><a href="tel:+2510918181867">+251 0918 181867</a></li>
            <li><a href="tel:+2510968424344">+251 0968 424344</a></li>
            <li><a href="tel:+2510969424344">+251 0969 424344</a></li>
            <li><a href="tel:+2510970424344">+251 0970 424344</a></li>
            <li><a href="tel:+12065568244">+1 206 556 8244</a></li>
            <li><a href="tel:+4917641751202">+49 176 4175 1202 (Germany)</a></li>
            <li><a href="tel:+4917641750635">+49 176 4175 0635 (Germany)</a></li>
            <li><a href="tel:+14705466354">+1 470 546 6354 (Atlanta)</a></li>
          </ul>
          <div className="space-x-4 mt-2">
            <a href="https://www.tiktok.com/@terbinos_media" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://t.me/Terbinos_Media" target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
          <Image
            className="my-4"
            src="/images/sample-witness-fourty-three.png"
            alt="Founder Solomon interviewing a witness"
            width={750}
            height={500}
            loading="lazy"
          />
        </section>

        <section>
          <h3 className="text-xl font-semibold">3. Emahus Travel Agency</h3>
          <p>
            Emahus operates the Sbuha YouTube media channel. The association was founded by Deacon HaileMariam and Teacher Abraham.
          </p>
          <Image
            className="my-4"
            src="/sebuha-media-logo.png"
            alt="Emahus Travel Association Logo"
            width={150}
            height={150}
            loading="lazy"
          />
          <ul className="space-y-2">
            <li><a href="tel:+2510945160000">+251 0945 160000</a></li>
            <li><a href="tel:+2510940141516">+251 0940 141516</a></li>
          </ul>
          <address className="mt-2">Office 805, 8<sup>th</sup> Floor, AB Star Diaspora Building, Megenagna, Addis Ababa, Ethiopia</address>
          <Image
            className="my-4"
            src="/images/emahus-founders.png"
            alt="Founders Deacon HaileMariam and Teacher Abraham"
            width={750}
            height={500}
            loading="lazy"
          />
        </section>

        <p>
          If these associations are too expensive, alternatives 
          include Mominas Travel Association &#40;with Abya Tube as their YouTube media&#41; 
          and Mahbere Sador Ze Orthodox Travel Association.
        </p>

        <section>
          <h3 className="text-xl font-semibold">Saint George Church of Bermel Georgis</h3>
          <p>
            The church is currently undergoing reconstruction, 
            designed by Bereket, who volunteered his 3D design 
            for free. All baptizands contribute joyfully to the 
            construction. If you&apos;d like to support this 
            project financially or through labor, contact 
            Bereket:
          </p>
          <ul className="space-y-2">
            <li><a href="tel:+2510911734304">+251 0911 734304</a></li>
            <li><a href="tel:+2510911961294">+251 0911 961294</a></li>
          </ul>
          <Image
            className="my-4"
            src="/images/plan-of-bermel-georgis-six.png"
            alt="Bereket's 3D design of the Church"
            width={750}
            height={500}
            loading="lazy"
          />
          <Image
            className="my-4"
            src="/images/the-progress-now.png"
            alt="Current progress of the church construction"
            width={750}
            height={500}
            loading="lazy"
          />
        </section>

        <p>
          Contact for Saint George Orthodox Tewahdo Church of Bermel Georgis:
          <a href="tel:+2510914817114">+251 0914 817114</a>
        </p>

        <div className="mt-8 space-y-4">
          <Link href="/" className="underline font-bold">Back to Bermel Georgis</Link>
          <Link href="/map" className="underline font-bold">View Bermel Georgis Location</Link>
        </div>
      </main>
    </div>
  );
}
