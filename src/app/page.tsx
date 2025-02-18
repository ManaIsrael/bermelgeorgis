import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
      <div className="min-h-screen p-8 sm:p-20 font-sans">
        <main className="flex flex-col gap-8 sm:items-start">
          <section id="hero">
            <video loop muted autoPlay preload="auto" aria-label="A muted background video showcasing the Bermel Georgis site.">
              <source src="bermel.mp4" type="video/mp4" />
                Your browser does not support this video.
            </video>
            <div className="caption">
              <h1 className="text-2xl sm:text-3xl font-bold text-center">
                Bermel Georgis
              </h1>
              <p className="text-lg text-center">
                A baptism site named after Saint George, the martyr. It is mainly known for parting a soul from its body, showing it incredible revelations like heaven and hell, and reuniting it back with its body.
              </p>
              <Link href="/map" aria-label="Map page">Travel</Link>
            </div>
          </section>
          <section>
            <article>
              <h2>The Miraculous Bermel Georgis</h2>
              <p>&quot;Bermel Georgis&quot; is an Amharic term which is similarly 
                translated as &quot;Barrel George&quot; in English. It is a holy water 
                found in Ethiopia and was named after saint George. The holy water emerges 
                from a hole surrounded by a short, medium-sized barrel. 
                The place which this holy water is found is now uniquely 
                identified as Bermel Georgis. Bermel Georgis performs miracles like 
                any other holy waters in Ethiopia do, but even more! It answers each 
                and every of your questions you have in your life. You are going to 
                be entered into ecstasy &#40;biblical&#41; during baptism, then you start seeing, hearing and 
                feeling things that are hard to explain, in just a few minutes, but as 
                many witnesses explained, it&apos;s like thousands of years in there. 
                Three minutes outside the baptism is different from three minutes within it.
              </p>

              <Image
                className="m-4"
                src="/images/the-holy-water.png"
                alt="Bermel Georgis holy water site"
                width={750}
                height={500}
                loading="lazy"
              />
              
              <p>The incredible view you see while being baptised in Bermel Georgis is 
                different than a dream or vision, you will actually be in that place in 
                your soul. Your soul is parted from your body and takes a visit to the 
                other worlds, or maybe your hometown in your childhood, or have a talk 
                to some power, or just listen to something without seeing anything, or 
                any other various things that I could not finish explaining here but you 
                should know that it is not a random thing you are going to see but it is an 
                exact message sent to you personally. Your 
                soul unites back with your body after it finishes its visits. 
                The whole process of the baptism could take about 10 minutes, from 
                sitting in the baptism place to the reunion of your soul with its body. 
                You first sit around the barrel, then you will start smelling the aron of an 
                invisible incense, you will then hear the holy water burst out from the hole 
                and the sprinkles of the water would touch your body and you get into ecstasy.
              </p>

              <Image
                className="m-4"
                src="/images/men-baptising-in-bermel-georgis.png"
                alt="Men during baptism in Bermel Gerogis"
                width={750}
                height={500}
                loading="lazy"
              />
              <p>
                It might be hard to believe hearing these miracles but like anyone 
                who went there would say, &quot;go and watch for yourself&quot;. 
                These miracles are done to anyone whether it be believer or 
                non-believer. The action you should take before taking the baptism is confess,
                because some of the people who entered before confessing said they were 
                burning in hell and some others said saint George warned them in anger. 
                The baptism place is not enclosed in a house,
                it&apos;s on a clear view outside in the field. Your hands will be tied by a rope
                because sometimes, even after your soul parted, your body just doesn&apos;t stay dead there, 
                don&apos;t know why but it is something incredible.
              </p>

              <Image
                className="m-4"
                src="/images/men-baptising-hands-tied.png"
                alt="people hands tied with rope during baptism"
                width={750}
                height={500}
                loading="lazy"
              />
              
              <div className="my-10 text-center">
                <Link 
                href="/map" 
                className="text-white text-lg font-bold bg-black bg-opacity-40 p-4 block  hover:bg-opacity-50"
                >
                  View Map
                </Link>
              </div>
            </article>
            <article>
              <h2>Unique Things About The Holy Water</h2>
              <p>
                <strong>It&apos;s for anyone:</strong> Many holy waters expect you to be a 
                christian or expect you to believe that the holy water saves you. 
                Bermel Georgis is different in that it doesn&apos;t require anyone to believe; 
                it simply performs miracles for anyone baptized there.
              </p>
              <p>
                <strong>It answers:</strong> You can ask any questions to one of the saints including saint George,
                from anywhere before entering to the baptism place and you&apos;ll get your answers while getting baptised. 
                Bermel Georgis will not leave you with an unanswered question. You might also ask while getting baptised. 
                You will even get answers to questions you had in your life even before you knew Bermel Georgis.
              </p>
              <p>
                <strong>Reveals Mysteries:</strong> Many things including heaven and hell are
                mysterous for many of us while we live on this earth. Bermel Georgis reveals mysteries
                that are important to us whether we ask for them or not.
              </p>
              <p>
                <strong>Intercede for the dead:</strong> Bermel Georgis may show you your beloved
                ones that passed away. If they were judged to burn in hell, one of the saints 
                might tell you to do good things on earth in their name, so that they will be saved.
                If Saint George didn&apos;t show you these people on his own, you might ask him to.
              </p>

              <div className="my-10 text-center">
                <Link 
                href="/about" 
                className="text-white text-lg font-bold bg-black bg-opacity-40 p-4 block hover:bg-opacity-50"
                >
                  More
                </Link>
              </div>
            </article>
            <article>
              <h2>Reasons To Go To Bermel Georgis</h2>
              <p>
                The reason you might want to go to Bermel Georgis lies within you. 
                But I will try to point out the reasons I think many people would want to 
                go there.
              </p>
              <ol>
                <li>
                  The first and the most reason for you to go to Bermel Georgis could be 
                  to find answers to the hardest questions in your life, like I tried to 
                  explain earlier.
                </li>
                <li>
                  Second reason is, if you want to be with God inside his palace forever. I said
                  this because Bermel Georgis won&apos;t leave you without teaching you the most 
                  important lesson for your forever life.
                </li>
                <li>
                  If you want to see and talk to God and the saints according to your capability, if you want to 
                  know what is like to be in paradise or hell, if you want to see someone you wish, or any other.
                </li>
                <li>
                  If you want to be healed from any kind of pain or disability or mental issues. 
                  Or if you want someone to be healed from these kinds of illnesses. Many holy waters
                  in Ethiopia are very well known in healing any types of illnesses.
                </li>
                <li>
                  If you are an atheist and you could not find anyone on earth to convince you that
                  there are things that are beyond science could explain.
                </li>
              </ol>
              <p>
                It doesn&apos;t end here. Bermel Georgis performs the same miracle like other
                miraculous holy waters in Ethiopia, and adds its own uniqueness. It is like leaving
                behind all your stresses, complexities and burdens there and get back to home peacefully.
              </p>

              <div className="my-10 text-center">
                <Link 
                href="/faq" 
                className="text-white text-lg font-bold bg-black bg-opacity-40 p-4 block  hover:bg-opacity-50"
                >
                  Ask
                </Link>
              </div>
            </article>
            <article>
              <h2>The Popularity of Bermel Georgis</h2>
              <p>
                A few individuals started posting videos of the holy water on YouTube around 2019, maybe earlier, 
                but they didn&apos;t get many views.
                They were using terms like &quot;The holy water that shows hell&quot;, in the Amharic language.
                Popular channels like Travel Ethiopia also posted video of Bermel Georgis which had many viewers. 
                Video posts of it on YouTube increased over time and the number of viewers also increased. 
                Day by day, the popularity of the holy water and the number of travelers to the place increased highly.
                It led to the foundation of travel agencies and YouTube medias specificaly created for Bermel Georgis.
                Very high number of people specially Ethiopians and Ethiopian diasporas are traveling daily and those who already went 
                are witnessing the incredible miracles of the holy water, Bermel Georgis. It could have been more if contents were also 
                made in other languages other than Ethiopian.
              </p>

              <Image
                className="m-4"
                src="/images/bermel-georgis-2019.png"
                alt="Snapshot from 2019 YouTube video about Bermel Georgis"
                width={750}
                height={500}
                loading="lazy"
              />
              <a href="https://www.youtube.com/watch?v=kXvy8zETxL4" className="text-blue-500 hover:text-purple-950 underline my-4" aria-label="The 2019 Bermel Georgis baptism YouTube video">November 2019 YouTube video showcasing baptism in Bermel Georgis</a>

              <Image
                className="m-4"
                src="/images/the-holy-water-eleven.png"
                alt="Snapshot from Travel Ethiopia YouTube video about Bermel Georgis"
                width={750}
                height={500}
                loading="lazy"
              />
              <a href="https://www.youtube.com/watch?v=j4wf0wP09XQ&t=189s" className="text-blue-500 hover:text-purple-950 underline my-4"
              aria-label="Bermel Georgis video from Travel Ethiopia YouTube channel."
              >Video showcasing Bermel Georgis site from Travel Ethiopia YouTube channel.</a>
            </article>
            <article>
              <h2>The Foundation of Bermel Georgis</h2>
              <p>
                The arc of saint George entered the church of Mother Virgin Mary 
                in 27/07/2002 E.C. &#40;March 2010 G.C.&#41; which is found in Quara where 
                Bermel Georgis is now located. 4 years later, in 2006 E.C. &#40;2014 G.C.&#41;, 
                the holy water emerged when the government of Ethiopia dug the ground in 
                plan of getting pure water for a plantation purpose for the three kebeles 
                &#40;neighbourhood&#41;. The local people tried to 
                use it for watering plants but 
                it dried them, they tried it to make dough but it made the dough to flow out excessively, 
                they tried to boil foods like lentil but it didn&apos;t cook them, also the 
                government concluded the water wouldn&apos;t be for anything they intended it 
                for after doing some research on it. 
                So they made sure it was for a baptism purpose just as Priest Asfaw Agete&apos;s vision which 
                he had in a hospital in 2010 G.C. that this holy water will emerge. 
                There was some debate in naming the holy water but ultimately decided 
                to name it after Saint George. The amazing thing is the holy 
                water started to grow the plants around it and it didn&apos;t dry them 
                after it began to be used for baptism. Bermel Georgis was not known to the 
                majority of the public until people started to post videos of it on YouTube.
              </p>

              <Image
                className="m-4"
                src="/images/interview-with-the-arc-holder-priest.png"
                alt="Memhir Tesfaye Abera interviewing the priest who is now responsible of Bermel Georgis and the first to witness the foundation of the holy water"
                width={750}
                height={500}
                loading="lazy"
              />

              <div className="my-10 text-center">
                <Link 
                href="/contact" 
                className="text-white text-lg font-bold bg-black bg-opacity-40 p-4 block  hover:bg-opacity-50"
                >
                  Contact
                </Link>
              </div>
            </article>
          </section>
        </main>
      </div>
    );
  }
  