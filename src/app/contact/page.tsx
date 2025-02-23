import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen p-8 mt-10 sm:mt-0 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 sm:items-start">
        <h2 className="text-2xl font-bold">Contact Information for Bermel Georgis Travel Associations</h2>

        <p>
          Several travel associations specialize in taking travelers to Bermel Georgis. The following are the most popular ones, chosen by many for their reliable services. These associations provide accommodations at Bermel Georgis, handle baptism reservations, and ensure a seamless experience from departure to return.
        </p>

        <section>
          <h3 className="text-xl font-semibold">1. Elshaday Travel Association and Charity</h3>
          <p className="m-0">
            Elshaday runs three YouTube media channels: Elshaday Media, Dorqa Media, and Elda Media. These platforms share interviews with baptized witnesses. The association was founded by Alaye and his team.
          </p>
          <Image
            className="my-4"
            src="/elshaday-media-logo-1.png"
            alt="Elshaday Travel Association Logo"
            width={150}
            height={150}
            loading="lazy"
          />
          <ul className="space-y-2">
            <li><a href="tel:+2510965454545" className="text-green-700 hover:text-green-900">+251 0965 45 45 45</a></li>
            <li><a href="tel:+2510906787878" className="text-green-700 hover:text-green-900">+251 0906 78 78 78</a></li>
            <li><a href="tel:+2510954777779" className="text-green-700 hover:text-green-900">+251 0954 77 77 79</a></li>
            <li><a href="tel:+2510969917070" className="text-green-700 hover:text-green-900">+251 0969 91 70 70</a></li>
            <li><a href="tel:+2510941161616" className="text-green-700 hover:text-green-900">+251 0941 16 16 16</a></li>
            <li><a href="tel:+2510943121212" className="text-green-700 hover:text-green-900">+251 0943 12 12 12</a></li>
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
          <p className="m-0">
            Terbinos operates the Terbinos YouTube Media channel. It was founded by Solomon and his team.
          </p>
          <Image
            className="my-4"
            src="/terbinos-media-logo-1.png"
            alt="Terbinos Travel Agency Logo"
            width={150}
            height={150}
            loading="lazy"
          />
          <ul className="space-y-2">
            <li><a href="tel:+2510910101073" className="text-green-700 hover:text-green-900">+251 0910 10 10 73</a></li>
            <li><a href="tel:+2510918181867" className="text-green-700 hover:text-green-900">+251 0918 18 18 67</a></li>
            <li><a href="tel:+2510968424344" className="text-green-700 hover:text-green-900">+251 0968 42 43 44</a></li>
            <li><a href="tel:+2510969424344" className="text-green-700 hover:text-green-900">+251 0969 42 43 44</a></li>
            <li><a href="tel:+2510970424344" className="text-green-700 hover:text-green-900">+251 0970 42 43 44</a></li>
            <li><a href="tel:+12065568244" className="text-green-700 hover:text-green-900">+1 206 556 8244</a></li>
            <li><a href="tel:+4917641751202" className="text-green-700 hover:text-green-900">+49 176 4175 1202 (Germany)</a></li>
            <li><a href="tel:+4917641750635" className="text-green-700 hover:text-green-900">+49 176 4175 0635 (Germany)</a></li>
            <li><a href="tel:+14705466354" className="text-green-700 hover:text-green-900">+1 470 546 6354 (Atlanta)</a></li>
          </ul>
          <div className="space-x-4 mt-2">
            <a id="tiktok-terbinos" href="https://www.tiktok.com/@terbinos_media" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a id="telegram-terbinos" href="https://t.me/Terbinos_Media" target="_blank" rel="noopener noreferrer">Telegram</a>
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
          <p className="m-0">
            Emahus operates the Sbuha YouTube media channel. The association was founded by Deacon HaileMariam and Teacher Abraham.
          </p>
          <Image
            className="my-4"
            src="/sebuha-media-logo-1.png"
            alt="Emahus Travel Association Logo"
            width={150}
            height={150}
            loading="lazy"
          />
          <ul className="space-y-2">
            <li><a href="tel:+2510945160000" className="text-green-700 hover:text-green-900">+251 0945 16 00 00</a></li>
            <li><a href="tel:+2510940141516" className="text-green-700 hover:text-green-900">+251 0940 14 15 16</a></li>
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
          <p className="m-0">
            The church is currently undergoing reconstruction, 
            designed by Bereket, who volunteered his 3D design 
            for free. All baptizands contribute joyfully to the 
            construction. If you&apos;d like to support this 
            project financially or through labor, contact 
            Bereket:
          </p>
          <ul className="space-y-2">
            <li><a href="tel:+2510911734304" className="text-green-700 hover:text-green-900">+251 0911 73 43 04</a></li>
            <li><a href="tel:+2510911961294" className="text-green-700 hover:text-green-900">+251 0911 96 12 94</a></li>
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
          <a href="tel:+2510914817114" className="text-green-700 hover:text-green-900">+251 0914 81 71 14</a>
        </p>

        <div className="mt-8">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="underline font-bold">Back to Bermel Georgis</Link>
            </li>
            <li>
              <Link href="/map" className="underline font-bold">View Bermel Georgis Location</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
