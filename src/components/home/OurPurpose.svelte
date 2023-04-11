<script lang="ts">
    import Icon from "@components/Icon.svelte"
    import Headline from "@components/fragments/Headline.svelte";
    import { fade } from "svelte/transition";

    let content = [
        {
            icon: "car",
            title: "Travel Costs",
            description: "To receive care, our families must travel long distances. Our grants assist with travel costs, such as gas food, and accomodations."
        },
        {
            icon: "love",
            title: "Emotional Support",
            description: "Lions Clubs from around the U.P. provide toys, cards, hats, quilts, pillowcases, love, and more to let our families know they aren't alone."
        },
        {
            icon: "bill",
            title: "Household Bills",
            description: "Fighting cancer is expensive. Our grants help with bills, such as rent, utilities, groceries, and the associated extensive medical charges."
        }
    ]
    
    let position = 0
    $: current = Math.abs(position % 3)
    $: last = Math.abs(slideOrigin == "left" ? (position + 1) % content.length : (position - 1) % content.length)
    
    let slideOrigin: "left"|"right" = "right"
    let justClicked = false
    const handleClick_previous = () => {
        position--
        slideOrigin = "left"
        justClicked = true
        setTimeout(() => {
            justClicked = false
        }, 300)
    }
    const handleClick_next = () => {
        position++
        slideOrigin = "right"
        justClicked = true
        setTimeout(() => {
            justClicked = false
        }, 300)
    }
</script>

<section class="
        w-screen mb-16
        flex md:hidden flex-col items-center gap-8
        z-10">
    <Headline>Our <span class="text-orange">Purpose</span></Headline>
    <div 
        class="w-full relative pb-24 overflow-x-hidden">
        <!-- left container -->
        <div class="
                w-screen shrink-0
                absolute
                flex flex-col items-center gap-4
                {slideOrigin == 'left' && justClicked ? 'translate-x-0 transition-all' : '-translate-x-full' }">
            <Icon id={content[current].icon} />
            <h3>{content[current].title}</h3>
        </div>
        <!-- middle container -->
        <div class="
                w-screen shrink-0 snap-center
                absolute
                flex flex-col items-center gap-4
                { slideOrigin == 'left' && justClicked ? 'translate-x-full transition-all' 
                : slideOrigin == 'right' && justClicked ? '-translate-x-full transition-all'
                : 'translate-x-0'}">
            <Icon id={content[justClicked ? last : current].icon} />
            <h3>{content[justClicked ? last : current].title}</h3>
        </div>
        <!-- right container -->
        <div class="
                w-screen shrink-0 snap-center
                absolute
                flex flex-col items-center gap-4
                {slideOrigin == 'right' && justClicked ? 'translate-x-0 transition-all' : 'translate-x-full' }">
            <Icon id={content[current].icon} />
            <h3>{content[current].title}</h3>
        </div>
        
    </div>
    <div class="
            w-full pb-8
            flex justify-between items-center gap-6
            z-10">
        <button
            on:click={handleClick_previous}
            class="
                h-18
                bg-orange rounded-r-full
                scale-[1.75]
                transition-all ease-out
                {slideOrigin == "left" && justClicked ? '-translate-x-8' : '-translate-x-4'}">
            <span class="
                    block py-4 px-5
                    bg-orange-super-light fill-navy-light rounded-full
                    rotate-180
                    transition-all ease-out
                    {slideOrigin == "left" && justClicked ? 'translate-x-6 scale-[.2]' : 'translate-x-5 scale-[.25]'}">
                <Icon id="arrow" />
            </span>
        </button>
        <hr class="
                h-2
                grow
                border-t-[6px] border-dotted border-navy-light
                translate-y-[0.125rem]" />
        <button
            on:click={handleClick_next}
            class="
                h-18
                bg-orange rounded-l-full
                scale-[1.75]
                transition-all ease-out
                {slideOrigin == "right" && justClicked ? 'translate-x-8' : 'translate-x-4'}">
            <span class="
                    block py-4 px-5
                    bg-orange-super-light fill-navy-light rounded-full
                    transition-all ease-out
                    {slideOrigin == "right" && justClicked ? '-translate-x-6 scale-[.2]' : '-translate-x-5 scale-[.25]'}">
                <Icon id="arrow" />
            </span>
        </button>
    </div>
    {#key current}
    <p
        in:fade={{ duration: 300 }}
        class="max-w-md px-8">
        {content[current].description}
    </p>
    {/key}
</section>

<section class="
        w-screen max-w-4xl pt-8 mb-16
        hidden md:flex flex-col items-center gap-8
        z-10">
    <Headline>Our <span class="text-orange">Purpose</span></Headline>
    <div class="
            w-full px-8 overflow-x-hidden
            relative
            flex items-center justify-center gap-4">
        {#each content as current, i}
        <div class="
                px-4
                flex flex-col items-center gap-4
                ">
            <Icon id={current.icon} />
            <h4>{current.title}</h4>
            <p class="text-center">{current.description}</p>
        </div>
        {#if i != content.length - 1}
        <hr class="
                h-36 w-0
                border-r-[6px] border-dotted border-navy-super-light
                -translate-x-2" />
        {/if}
        {/each}
    </div>
    
</section>