import Link from "next/link";

export default function FAQ() {
    return(
        <div className="min-h-screen mt-14 sm:mt-0 p-8 sm:p-20 font-sans">
          <main className="flex flex-col gap-8 sm:items-start">
            <details>
              <summary>
                <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
                Why should I visit Bermel Georgis &#40;Barrel George&#41;?
                </h2>
              </summary>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Answer for life:</strong> Bermel Georgis provides you with 
                  satisfying answers that bring peace of mind. It offers solutions to 
                  all your questions—you can ask anything and receive an answer.
                </li>
                <li>
                  <strong>A true adventure:</strong> Visiting Bermel Georgis is a 
                  journey filled with meaning and discovery.
                </li>
                <li>
                  <strong>Uncover mysteries:</strong> Bermel Georgis reveals profound 
                  mysteries to everyone, not just church leaders. You don&apos;t have to 
                  be John the Evangelist to witness revelations here.
                </li>
                <li>
                  <strong>To be healed:</strong> Bermel Georgis is known for healing all 
                  kinds of ailments, including paralysis, mental health challenges, 
                  blindness, and more.
                </li>
              </ul>
              <p><Link 
              href="/" 
              className="underline font-bold"
              >
                Learn more about Bermel Georgis
              </Link></p>
            </details>

            <details>
              <summary>
                <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
                  What&apos;s in it for me?
                </h2>
              </summary>
                <ul>
                  <li>
                    <em>Health:</em> The holy water heals ailments such as blindness, 
                    paralysis, headaches, and any other disease you can imagine.
                  </li>
                  <li>
                    <em>Answers:</em> If you have unanswered questions in your life, 
                    Bermel Georgis provides the clarity and answers you seek.
                  </li>
                  <li>
                    <em>Love:</em> If you feel broken or unfulfilled in love, Bermel Georgis 
                    restores you with a sense of complete and unconditional love.
                  </li>
                  <li>
                    <em>Peace:</em> Even if you live in a peaceful country but your mind is 
                    restless, spending one to three days in baptism at Bermel Georgis will 
                    bring you lasting peace of mind.
                  </li>
                  <li>
                    <em>Knowledge:</em> At Bermel Georgis, mysteries are revealed, helping you 
                    understand what was once unclear. You&apos;ll gain insight into religion, the 
                    purpose of the world, your creation, and the reasons behind events in 
                    your life. Everything becomes clearer and more comprehensible.
                  </li>
                  <li>
                    <em>Life:</em> After baptism at Bermel Georgis, you&apos;ll no longer wonder 
                    what life is. Whether you&apos;ve sought answers from yourself or others 
                    but remain unsatisfied, Bermel Georgis provides a fulfilling understanding 
                    of life. It also offers clarity about eternal life and the life after death.
                  </li>
                  <li>
                    <em>More:</em> Bermel Georgis holds everything you&apos;re searching for—more 
                    than words can express. Visit and experience it for yourself.
                  </li>
                </ul>
              <p><Link 
              href="/contact" 
              className="underline font-bold"
              aria-label="Visit contact page for travel associations"
              >
                Contact Travel Associations
              </Link>
              </p>
            </details>

            <details>
              <summary>
                <h2>What makes Bermel Georgis unique from other holy waters in Ethiopia?</h2>
              </summary>
              <p className="ml-0">
                <Link 
                href="/" 
                className="underline font-bold mr-1"
                aria-label="Navigate to homepage to read about bermel georgis"
                >
                  Bermel Georgis
                </Link> 
              stands out from other miraculous holy waters in Ethiopia for several 
              reasons:
              </p>
              <ul>
                <li>Anyone, including atheists, can be baptized at Bermel Georgis.</li>
                <li>It reveals profound revelations to everyone during baptism.</li>
                <li>It answers all of your questions, offering clarity and understanding.</li>
              </ul>
            </details>

            <details>
              <summary>
                <h2>What is the reason for the discovery of Bermel Georgis?</h2>
              </summary>
              <p>The fathers at Saint George Church, where Bermel Georgis is located, 
                explained the purpose of this miraculous holy water. They believe it 
                emerged to serve this generation, which often struggles with faith and 
                demands proof of the unseen. Bermel Georgis offers tangible evidence and 
                revelations for those who need to see to believe. You might even 
                experience past events firsthand, similar to the concept in the movie 
                &quot;Back to the Future.&quot;</p>
            </details>

            <details>
              <summary>
                <h2>Can I see heaven and hell at Bermel Georgis?</h2>
              </summary>
              <p>You will witness incredible and deeply personal revelations—whether 
                it&apos;s heaven, hell, or something else entirely. If you specifically wish 
                to see heaven or hell, you can ask Saint George or other Saints, and your 
                request will be granted.</p>
            </details>

            <details>
              <summary>
                <h2>Does Bermel Georgis answer all of my questions?</h2>
              </summary>
              <p>Bermel Georgis answers all your questions and provides 
                life-changing revelations. Many visitors testify to receiving 
                answers to every question they asked, whether for themselves 
                or others. Bermel Georgis brings clarity, leaving no room for 
                confusion.</p>
            </details>

            <details>
              <summary>
                <h2>How long do I stay in the holy water?</h2>
              </summary>
              <p>You stay in the holy water for three to ten minutes per session. Each 
                session reveals unique insights. If you are baptized three times, you will 
                receive three different revelations.</p>
              <Link 
              href="/contact" 
              className="underline font-bold ml-4"
              aria-label="Visit the contact page to ask for more information."
              >
                Contact For More Info
              </Link>
            </details>

            <details>
              <summary>
                <h2>How will Bermel Georgis transform me?</h2>
              </summary>
              <p>Many experience transformation when they begin to smell an aroma or 
                hear the sound of horse hooves as the water emerges. Transformation 
                often occurs when the water bursts forth or its sprinkles touch you, 
                leading to remarkable revelations.</p>
            </details>

            <details>
              <summary>
                <h2>Where is Bermel Georgis located?</h2>
              </summary>
              <p>Bermel Georgis is in the Qwara Desert in Ethiopia, approximately 940 
                kilometers from Addis Ababa. It takes about three days by car or 15 hours 
                by a combination of airplane and bus. For detailed directions, 
                check this 
                <Link 
                href="/map" 
                className="underline font-bold ml-1"
                aria-label="Visit map page for the location"
                >Map</Link>.
              </p>
              
            </details>
            
            <details>
              <summary>
                <h2>How do I get to Bermel Georgis?</h2>
              </summary>
              <p>For those in Ethiopia, you can fly to Bahir Dar airport and then take a 
                14-hour bus ride to Bermel Georgis. Plans are underway to build an airport 
                in Qwara to eliminate the need for bus transportation. For international 
                visitors, fly to Addis Ababa Bole Airport, then proceed to Bahir Dar and 
                Qwara. Travel agencies like Elshaday and Terbinos can assist with mixed 
                transportation options, including airplane, bus, boat, and on-foot travel 
                for a safe and comfortable journey.</p>
              <Link 
              href="/map" 
              className="underline font-bold ml-4"
              aria-label="Visit map page for Bermel Georgis location"
              >
                Visit Bermel Georgis Map
              </Link>
            </details>

            <details>
              <summary>
                <h2>Are there hotels near Bermel Georgis?</h2>
              </summary>
              <p>Bermel Georgis is located in the Qwara Desert, where there are currently no 
                hotels. However, temporary shelters and small houses near the church 
                provide accommodations for visitors. Additionally, quality rooms are being 
                constructed to meet visitors&apos; needs during their stay.</p>
              <Link 
              href="/about" 
              className="underline font-bold ml-4"
              aria-label="Visit the about page for more information about Bermel Georgis"
              >More About Bermel Georgis</Link>
            </details>

            <details>
              <summary>
                <h2>How and when was Bermel Georgis discovered?</h2>
              </summary>
              <p>
                <Link 
                href="/" 
                className="underline font-bold mr-1"
                aria-label="Visit the home page"
                >
                  Bermel Georgis
                </Link> 
                emerged in April 2014, as foretold by Priest Asfaw Agete in a vision he 
                received in March 2010 while staying in a hospital in Sheddi. The holy 
                water bursts from underground every 30 minutes in three cycles. 
                The site was initially excavated by the Ethiopian government to source 
                clean water for nearby communities, but it was found to be suitable only 
                for baptism, not for cooking or farming.
                </p>
            </details>

            <p>
              Have more questions? Visit the
              <Link 
              href="/contact" 
              className="underline font-bold mx-1"
              >
                Contacts
              </Link> 
              page to reach out to travel associations. They&apos;ll be happy to assist 
              you.
            </p>
          </main>
        </div>
    );
}