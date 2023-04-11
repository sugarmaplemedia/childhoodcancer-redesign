<script lang="ts">
    import Icon from "@components/Icon.svelte"

    let content = [
        {
            icon: "car",
            title: "Travel Costs",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.0"
        },
        {
            icon: "love",
            title: "Emotional Support",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.1"
        },
        {
            icon: "bill",
            title: "Household Bills",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.2"
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
        w-screen
        flex md:hidden flex-col items-center gap-8
        z-10">
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
    <p class="max-w-md px-8">{content[current].description}</p>
</section>

<section class="
        w-screen max-w-4xl pt-8
        hidden md:flex flex-col items-center gap-8
        z-10">
    <div class="
            w-full px-8 overflow-x-hidden
            relative
            grid grid-cols-{content.length} gap-2

            [&>*:not(:first-child)]:ml-2
            
            [&>*:not(:last-child)]:after:border-none [&>*:not(:last-child)]:border-r-4 [&>*:not(:last-child)]:border-dotted [&>*:not(:last-child)]:border-navy-super-light">
        {#each content as current}
        <div class="
                flex flex-col items-center gap-4
                ">
            <Icon id={current.icon} />
            <h4>{current.title}</h4>
            <p>{current.description}</p>
        </div>
        {/each}
    </div>
    
</section>