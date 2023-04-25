<script lang="ts">
import Button from '@components/Button.svelte';
import Card from '@components/_fragments/Card.svelte'
import Headline from '@components/_fragments/Headline.svelte'

type Card = {
    src: string,
    alt: string,
    href: string,
    title: string,
    text: string
}

export let cards: Card[]
export let button: { text: string, href: string }|null = null

let position = 1
$: previous = position != 0 ? position - 1 : cards.length - 1
$: current = position
$: next = position != cards.length - 1 ? position + 1 : 0

</script>

<section class="
        mb-16 px-12
        flex flex-col items-center">
    {#if $$slots.headline}
    <Headline><slot name="headline" /></Headline>
    {/if}
    {#if $$slots.text}
    <p class="pt-2 pb-6 text-center"><slot name="text" /></p>
    {/if}
    <div class="
            max-w-4xl w-full mb-8 overflow-hidden
            flex lg:grid grid-cols-3 items-stretch justify-center gap-6">
        <div class="absolute -left-[17rem] hover:left-0 hover:right-0 hover:mx-auto">
            <Card
                src={`${import.meta.env.BASE_URL}/${cards[previous].src}`}
                alt={cards[previous].alt}
                href={`${import.meta.env.BASE_URL}/${cards[previous].href}`}>
                <span slot="title">{cards[previous].title}</span>
                <span slot="text">{cards[previous].text}</span>
            </Card>
        </div>
        <div>
            <Card
                src={`${import.meta.env.BASE_URL}/${cards[current].src}`}
                alt={cards[current].alt}
                href={`${import.meta.env.BASE_URL}/${cards[current].href}`}>
                <span slot="title">{cards[current].title}</span>
                <span slot="text">{cards[current].text}</span>
            </Card>
        </div>
        <div class="absolute -right-[17rem]">
            <Card
                src={`${import.meta.env.BASE_URL}/${cards[next].src}`}
                alt={cards[next].alt}
                href={`${import.meta.env.BASE_URL}/${cards[next].href}`}>
                <span slot="title">{cards[next].title}</span>
                <span slot="text">{cards[next].text}</span>
            </Card>
        </div>
    </div>
    {#if button}
    <Button href={button.href}>{button.text}</Button>
    {/if}
</section>