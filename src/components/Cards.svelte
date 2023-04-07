<script lang="ts">
    import Headline from "./sub-components/Headline.svelte";
    import Card from "./sub-components/Card.svelte";

    // type card = {
    //     image: string
    //     content: string

    // }

    // export let cards: card[]
</script>

<section class="
    pb-8
    flex flex-col items-center">
    <Headline>Our <span class="text-orange">Initiatives</span></Headline>
    <p class="pt-2 pb-8">We share information and connect families to other nonprofits that may help, either in-person or remotely.</p>
    <div class="
        max-w-4xl
        grid grid-cols-3 gap-6">
        <Card
            src={`${import.meta.env.BASE_URL}/images/Maggies-Wigs-4-Kids-cover.jpg`}
            alt="Wigs along a wall"
            href="/initiatives/maggies-wigs-4-kids">
            <span slot="title">Maggies Wigs 4 Kids</span>
            <span slot="text">Providing hair and skin restoration services to our children in the U.P.</span>
        </Card>
        <Card
            src={`${import.meta.env.BASE_URL}/images/Camp-Quality-cover.jpg`}
            alt="Kids sitting around a campfire"
            href="/initiatives/camp-quality-michigan">
            <span slot="title">Camp Quality Michigan</span>
            <span slot="text">Providing year-round programs and experiences at no cost with camps throughout Michigan at 4 different locations.</span>
        </Card>
        <Card
            src={`${import.meta.env.BASE_URL}/images/Kids-Kicking-Cancer-cover.jpg`}
            alt="Kids in karate position in a dojo"
            href="/initiatives/kids-kicking-cancer">
            <span slot="title">Kids Kicking Cancer</span>
            <span slot="text">Providing martial arts and meditation/pain control classes to U.P. children and their siblings.</span>
        </Card>
    </div>
</section>