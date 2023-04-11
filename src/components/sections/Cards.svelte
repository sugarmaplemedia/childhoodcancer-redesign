<script lang="ts">
import Button from '@components/Button.svelte';
import Card from '@components/fragments/Card.svelte'
import Headline from '@components/fragments/Headline.svelte'

type Card = {
    src: string,
    alt: string,
    href: string,
    title: string,
    text: string
}

export let content: Card[]
export let button: { text: string, href: string }|null = null

</script>

<section class="
        mb-16 px-12
        relative
        flex flex-col items-center">
    {#if $$slots.headline}
    <Headline><slot name="headline" /></Headline>
    {/if}
    {#if $$slots.text}
    <p class="pt-2 pb-6 text-center"><slot name="text" /></p>
    {/if}
    <div class="
            max-w-4xl w-full mb-8
            flex lg:grid flex-col grid-cols-3 items-center lg:items-stretch gap-6">
        {#each content as contentCard}
        <Card
            src={`${import.meta.env.BASE_URL}/${contentCard.src}`}
            alt={contentCard.alt}
            href={`${import.meta.env.BASE_URL}/${contentCard.href}`}>
            <span slot="title">{contentCard.title}</span>
            <span slot="text">{contentCard.text}</span>
        </Card>
        {/each}
    </div>
    {#if button}
    <Button href={button.href}>{button.text}</Button>
    {/if}
</section>