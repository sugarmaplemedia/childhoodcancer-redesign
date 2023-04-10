<script lang="ts">
    import Button from '@components/Button.svelte';
import Card from '@components/fragments/Card.svelte'
    import Headline from '@components/fragments/Headline.svelte'

    let content = [
        {
            src: "/images/Maggies-Wigs-4-Kids-cover.jpg",
            alt: "Wigs along a wall",
            href: "/initiatives/maggies-wigs-4-kids",
            title: "Maggies Wigs 4 Kids",
            text: "Providing hair and skin restoration services to our children in the U.P."
        },
        {
            src: "/images/Camp-Quality-cover.jpg",
            alt: "Kids sitting around a campfire",
            href: "/initiatives/camp-quality-michigan",
            title: "Camp Quality Michigan",
            text: "Providing year-round programs and experiences at no cost with camps throughout Michigan at 4 different locations."
        },
        {
            src: "/images/Kids-Kicking-Cancer-cover.jpg",
            alt: "Kids in karate position in a dojo",
            href: "/initiatives/kids-kicking-cancer",
            title: "Kids Kicking Cancer",
            text: "Providing martial arts and meditation/pain control classes to U.P. children and their siblings."
        }
    ]
</script>

<section class="
        pb-8 px-8
        relative
        flex flex-col items-center">
    <Headline>Our <span class="text-orange">Initiatives</span></Headline>
    <p class="pt-2 pb-8">We share information and connect families to other nonprofits that may help, either in-person or remotely.</p>
    <div class="
        max-w-4xl w-full mb-8
        flex flex-col xl:grid xl:grid-cols-3 gap-6">
        {#each content as contentCard }
        <Card
            src={`${import.meta.env.BASE_URL}/${contentCard.src}`}
            alt={contentCard.alt}
            href={`${import.meta.env.BASE_URL}/${contentCard.href}`}>
            <span slot="title">{contentCard.title}</span>
            <span slot="text">{contentCard.text}</span>
        </Card>
        {/each}
    </div>
    <Button href={`/childhood-cancer/programs#initiatives`}>View All Initiatives</Button>
</section>