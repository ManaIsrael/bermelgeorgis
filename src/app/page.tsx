import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 sm:items-start">
        <section id="hero">
          <video
            loop
            muted
            autoPlay
            preload="auto"
            aria-label="A muted background video showcasing a baptism site in Ethiopia."
          >
            <source src="bermel.mp4" type="video/mp4" />
            Your browser does not support this video.
          </video>
          <div className="caption">
            <h1 className="text-2xl sm:text-3xl font-bold text-center">
              Bermel Georgis &#40;Bermel Giorgis&#41;
            </h1>
            <p className="text-lg text-center">
              A holy water site in Ethiopia, renowned for its spiritual impact. It&apos;s a place where visitors experience profound revelations and personal transformations.
            </p>
            <Link href="/map" aria-label="Map page">
              Travel
            </Link>
          </div>
        </section>
        <section>
          <article>
            <h2>A Sacred Destination</h2>
            <p>
              Known as &quot;Bermel Georgis&quot; in English and &quot;በርሜል ጊዮርጊስ&quot; in Amharic, this spiritual site is celebrated for its extraordinary holy water. Named after Saint George, the water emerges from a natural spring surrounded by a distinct barrel-like structure.
            </p>
            <p>
              Visitors often describe unique experiences during baptisms, including visions of other realms, profound insights, and a sense of peace. The moments spent here feel timeless, with some recounting that a few minutes felt like a lifetime of spiritual connection.
            </p>
            <Image
              className="m-4"
              src="/images/the-holy-water.png"
              alt="The holy water site in Bermel Georgis"
              width={750}
              height={500}
              loading="lazy"
            />
          </article>
          <article>
            <h2>Unparalleled Spiritual Encounters</h2>
            <p>
              During baptism, many visitors describe sensory experiences, such as the scent of incense or the sound of holy water bursting forth. These moments lead to personal revelations, with the soul seemingly embarking on a journey beyond the physical world.
            </p>
            <p>
              The holy water&apos;s power doesn&apos;t discriminate—it offers its blessings to believers and non-believers alike. Many have testified to its ability to provide clarity, healing, and answers to life&apos;s most challenging questions.
            </p>
            <Image
              className="m-4"
              src="/images/men-baptising-in-bermel-georgis.png"
              alt="Visitors experiencing baptism in Bermel Georgis"
              width={750}
              height={500}
              loading="lazy"
            />
          </article>
          <article>
            <h2>Why Visit Bermel Georgis?</h2>
            <p>
              People from all walks of life come here for various reasons, including:
            </p>
            <ul>
              <li>Seeking answers to deep, personal questions.</li>
              <li>Finding spiritual peace and connection.</li>
              <li>Witnessing miraculous healings or experiencing revelations.</li>
              <li>Exploring faith beyond science and material understanding.</li>
            </ul>
            <p>
              Whether you seek healing, insight, or an encounter with the divine, Bermel Georgis offers a transformative experience unlike any other.
            </p>
            <Link
              href="/faq"
              className="text-white text-lg font-bold bg-black bg-opacity-40 p-4 block hover:bg-opacity-50"
            >
              Ask Questions
            </Link>
          </article>
          <article>
            <h2>A Growing Legacy</h2>
            <p>
              Bermel Georgis gained prominence over the years through stories and videos shared by visitors. From its humble beginnings to becoming a site of national and international interest, it has drawn thousands of travelers seeking its unique blessings.
            </p>
            <Image
              className="m-4"
              src="/images/bermel-georgis-2019.png"
              alt="Snapshot of Bermel Georgis from 2019"
              width={750}
              height={500}
              loading="lazy"
            />
            <p>
              The site continues to grow in popularity, with visitors witnessing the power of its holy water and sharing their experiences across various platforms.
            </p>
            <Link
              href="/about"
              className="text-white text-lg font-bold bg-black bg-opacity-40 p-4 block hover:bg-opacity-50"
            >
              Learn More
            </Link>
          </article>
          <article>
            <h2>The Foundation Story</h2>
            <p>
              Bermel Georgis emerged unexpectedly in 2014 when locals discovered the unique properties of its water. Initially intended for agriculture, the water defied expectations by proving unsuitable for everyday use, instead revealing its spiritual significance.
            </p>
            <p>
              Its association with Saint George and its miraculous effects have made it a revered site. Over time, it has transformed into a destination for those seeking faith, healing, and answers to life&apos;s mysteries.
            </p>
            <Image
              className="m-4"
              src="/images/interview-with-the-arc-holder-priest.png"
              alt="Interview with a priest about Bermel Georgis"
              width={750}
              height={500}
              loading="lazy"
            />
            <Link
              href="/contact"
              className="text-white text-lg font-bold bg-black bg-opacity-40 p-4 block hover:bg-opacity-50"
            >
              Contact Us
            </Link>
          </article>
        </section>
      </main>
    </div>
  );
}
