import Image from "next/image";
import mealIcon from './../assets/icon/meals.png';
import communityIcon from './../assets/icon/community.png';
import eventIcon from './../assets/icon/event.png'
export default function CommunityPage(){
    return <>
    <header>
    <h1>One shared passion:<span>Food</span></h1>
    <p>Joi our communit and hare our favourite receipts.</p>
    </header>

    <main>
        <h2>Commmunity perks</h2>
        <ul>
            <li>
                <Image src={mealIcon} alt='A delicious meals' />
                <p>Share & discover receips</p>
            </li>
            <li>
                <Image src={communityIcon} alt='A grou of community' />
                <p>Find new friends and like minded people</p>
            </li>
            <li><Image src={eventIcon} alt="A crowd of people cookie event" />
            <p>Participate in exclusive events.</p>
            </li>
        </ul>
    </main>
        

    </>
}