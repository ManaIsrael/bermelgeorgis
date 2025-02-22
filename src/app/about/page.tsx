import Link from "next/link";
import Image from "next/image";

export default function About() {
    return(
        <div className="min-h-screen p-8 sm:p-20 font-sans">
            <main className="flex flex-col gap-8 mt-10 sm:items-start">
                <section>
                    <h2>About Bermel Georgis</h2>
                    <p>
                        <Link 
                        href="/" 
                        className="underline font-bold mr-1"
                        >
                            Bermel Georgis, 
                        </Link> 
                        is a destination for discovering significant and 
                        meaningful revelations.
                    </p>

                    <p>
                        Bermel Georgis is located in Qwara, a hot region where 
                        temperatures exceed 36&deg;C in the summer. The area is home to local 
                        villagers. For baptizands, shelters have been prepared by 
                        travel agencies, offering standard amenities such as 
                        toilets, closets, dining areas, and sleeping rooms. 
                        Baptizands typically bring their own food or purchase 
                        meals from small restaurants and shops nearby.
                    </p>

                    <p>
                    You can stay at Bermel Georgis for as long as you wish. 
                    If you choose to travel with Elshaday Travel Agency, 
                    you decide the duration of your stay, with prices 
                    varying accordingly. Most travel agencies plan trips 
                    for a total of approximately 9 days, including a minimum 
                    of 3 days for baptism. While you can extend your baptism 
                    stay as long as you like, returning with the agencies is 
                    typically limited to 7 days unless you purchase special 
                    tickets from Elshaday Travel Agency.
                    </p>

                    <p>
                    If you are traveling independently, it&apos;s recommended 
                    to bring a tent. Otherwise, the travel agencies provide 
                    comfortable shelters for their travelers. Make sure to 
                    bring shorts, as they are required for baptism, or you 
                    can purchase them from nearby shops. Consider packing 
                    meals suitable for hot climates, although there are 
                    shops near Bermel Georgis where you can buy food. 
                    <br />
                    For females, it&apos;s advisable to bring tampons, as 
                    they are sold at very high prices in local shops. Note 
                    that it is not permitted for women to be baptized during 
                    their menstrual period. You should wait 7 days from the 
                    start of your period and can be baptized starting on the 
                    8th day. However, you can still be baptized in the holy 
                    water of Yordanos, near Bermel Georgis, even during your 
                    period.
                    </p>
                    <Image
                    src="/images/holy-water-filling-into-jars.png"
                    alt="Bermel Georgis Holy Water Filling"
                    loading="lazy"
                    width={750}
                    height={500}
                    />

                    <p>
                    The area is a desert, but there is a village and small shops 
                    near Bermel Georgis. Additionally, there is an Ethiopian 
                    Orthodox Tewahedo Church dedicated to Mother Virgin Mary 
                    and Saint George. A nearby river serves as a place where 
                    baptizands can shower. There is also another holy water 
                    site called Mrt Delego Kidane Mihret, which is very 
                    similar to Bermel Georgis and located not far from it.
                    </p>

                    <p>
                    There is network coverage available for making calls, 
                    but there is no internet access.
                    </p>

                    <p>
                    Mrt Delego Kidane Mihret is another holy water source in 
                    the area. Unlike Bermel Georgis, where the water gushes 
                    out forcefully, this holy water flows gently from 
                    underground, providing a calmer baptism experience. 
                    It is enclosed by a longer, medium-sized barrel, and 
                    its smooth flow ensures a more comfortable process. 
                    Mrt Delego Kidane Mihret is known to perform the same 
                    miracles as Bermel Georgis and offers its own unique 
                    revelations.
                    </p>

                    <p>
                    Yordanos holy water, located near Bermel Georgis, 
                    allows women to be baptized even during their menstrual 
                    periods. Women may baptize in Bermel Georgis once they 
                    have completed their menstrual cycle and are considered 
                    pure.
                    </p>

                    <span>Bermel Georgis Holy Water:</span>
                    <Image
                    src="/images/the-holy-water-twelve.png"
                    alt="Bermel Georgis Holy Water"
                    loading="lazy"
                    width={750}
                    height={500}
                    className="mb-4"
                    />
                    <span>Mrt Delego Kidane Mihret Holy Water:</span>
                    <Image
                    src="/images/mrt-delego-kidanemihret-three.png"
                    alt="Mrt Delego Kidane Mihret Holy Water"
                    loading="lazy"
                    width={750}
                    height={500}
                    className="mb-4"
                    />
                    <span>Yordanos Holy water:</span>
                    <Image
                    src="/images/yordanos-holy-water-of-bermel.png"
                    alt="Yordanos Holy Water"
                    loading="lazy"
                    width={750}
                    height={500}
                    className="mb-4"
                    />

                    <p>
                    During baptism at Bermel Georgis, you might catch the 
                    scent of incense and hear the sound of Saint George&apos;s 
                    horse&apos;s hooves.
                    </p>

                    <p>
                    The holy water emerges every 30 minutes. It comes from a 
                    deep well and bursts into the air, reaching a height for 
                    three rounds.
                    </p>
                    {/* <video  
                    controls 
                    preload="none" 
                    aria-label="men with tied hands sat around the barrel for baptism."
                    className="h-96 rounded-xl"
                    >
                    <source src="bermelgeorgis-baptism.mp4" type="video/mp4" />
                        Your browser does not support this video.
                    </video> */}
                    <iframe
                        width="350"
                        height="315"
                        src="https://www.youtube.com/embed/Y8JwglE8w1k" 
                        title="በርሜል ቅዱስ ጊዮርጊስ ጸበል በሶስት ደቂቃ እንዴት እንደሰወራቸው ሰብስክራይብ በማድረግ ❖ማኅበረ ሳዶር ዘኦርቶዶክስን❖ይደግፉ"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-xl"
                    ></iframe>

                    <p>
                    During baptism at Bermel Georgis, you will sit while the 
                    assistants tie your hands with a rope, as your body 
                    might move uncontrollably, which happens to some 
                    individuals during the process. They will untie you once 
                    the baptism is complete. You won&apos;t be alone in the 
                    holy water; instead, you will be part of a group of 
                    either males or females sitting next to each other 
                    for each round. This is because many baptizands are 
                    waiting for their turn, and the holy water flows every 
                    30 minutes. The next round of baptism takes place after 
                    30 minutes. However, you are not tied in Yordanos and 
                    Mrt Delego Kidane Mihret holy waters.
                    </p>

                    <p>
                    Each day of baptism brings different revelations, and you 
                    will have only one turn per day.
                    </p>

                    <p>
                    On the day you choose to come to Bermel Georgis, Saint 
                    George is the one responsible for guiding you safely to 
                    the holy water. He will take care of all the arrangements 
                    for you; all you need to do is show him your intent. 
                    Saint George will protect you from any temptations that 
                    the enemy may place in your path.
                    </p>

                    <p>
                    Many people have shared that they faced various 
                    temptations when deciding to come to Bermel Georgis, 
                    such as a shortage of transportation money, illness in 
                    the family on the day of departure, losing airplane 
                    tickets, arriving late at the airport, and many other 
                    challenges. However, they also testified that Saint 
                    George resolved all these issues and helped them arrive 
                    successfully.
                    </p>

                    <p>
                    Travel agencies like Elshaday, Terbinos, and Emahus provide all 
                    the necessary transportation options to get you to 
                    Bermel Georgis, including airplanes, buses, and boats.
                    </p>

                    <p>
                    If you plan to travel with an agency, your journey will 
                    begin at Addis Ababa Airport, with the destination being 
                    the Bermel Georgis holy water site. Terbinos travel 
                    agency has even made travel more convenient for those 
                    living in America and Germany. 
                    For more information or to contact the travel agencies, 
                    visit the 
                    <Link href="/contact" className="underline font-bold mx-1">
                    Contacts
                    </Link> 
                    page.
                    </p>
                    
                    <p>
                    People of all beliefs, whether believers or non-believers, 
                    are welcome to be baptized at Bermel Georgis. The only 
                    distinction made is the separation of men and women into 
                    different groups for baptism. However, the paralyzed are 
                    baptized alongside the able-bodied, children with adults, 
                    believers with non-believers, and so on.
                    </p>

                    <p>
                    If one of the saints asks you to testify about what you 
                    have witnessed, you should do so. You can share your 
                    testimony on the stage of the church, at another 
                    location, or with someone you know.
                    </p>

                    <p>
                    The travel agencies provide shelters equipped with all the 
                    essentials, including sleeping, prayer, and dining rooms, 
                    toilets, and more, for their travelers. If you choose to 
                    travel independently, you may consider bringing your own 
                    tent, using shelters provided by the church, or possibly 
                    renting a house in the nearby village.
                    </p>

                    <p>
                    Holy waters are always free, especially in Ethiopia. 
                    You do not pay for the church or any of its services, 
                    including baptism. There is also no tourist fee for 
                    foreigners to visit the site.
                    </p>

                    <p>
                    You are required to wear shorts during baptism, so be sure 
                    to bring a pair with you.
                    </p>

                    <p>
                    Many people, including travelers who arrived with the 
                    agencies, take showers in the river nearby. 
                    You should shower there with other baptizands or 
                    elsewhere in the village before you can proceed with 
                    baptism. Make sure to confess beforehand, or you can do 
                    so with one of the priests at the church. No one will 
                    check if you&apos;ve confessed, but if you baptize 
                    without doing so first, Saint George may urge you to 
                    confess before your next round of baptism.
                    </p>

                    <p>
                    The place is extremely hot, so it&apos;s best to bring 
                    anything you feel is necessary for your stay.
                    </p>
                    <Link href="/faq" className="undeline font-bold block p-4 bg-gray-300 my-4" aria-label="Visit frequently asked questions page">Frequently Asked Questions</Link>
                    <Link href="/contact" className="undeline font-bold block p-4 bg-gray-300" aria-label="Navigate to contact page">Contact Travel Associations</Link>
                    {/* carousel of images of witnesses */}
                </section>
                <section className="border m-10 bg-gray-200">
                    <h2>About me</h2>
                    <p>
                        I am a freelance software programmer and an instructor.
                        I teach about any tech staff including web development.
                        If you&apos;re looking to learn programming or something 
                        in the tech staff on your free time, both online or 
                        in-person, visit 
                        <a 
                            href="https://ethiopia-free-time-academy.vercel.app" 
                            target="_blank"
                            aria-label="Navigate to the developer's website"
                            className="text-blue-500 underline hover:text-blue-400 ml-1"
                        >
                            Ethiopia Free Time Academy
                        </a>.
                    </p>
                </section>
            </main>
        </div>
    );
}