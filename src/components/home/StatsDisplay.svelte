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
        flex flex-col items-center gap-8
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
            w-full max-w-md pb-8
            flex justify-between items-center gap-6
            z-10">
        <button
            on:click={handleClick_previous}
            class="bg-orange h-18 rounded-r-full scale-[1.75] -translate-x-4">
            <span class="
                    block py-4 px-5
                    bg-orange-super-light fill-navy-light rounded-full
                     translate-x-5 rotate-180 scale-[.25]">
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
            class="bg-orange h-18 rounded-l-full scale-[1.75] translate-x-4">
            <span class="
                    block py-4 px-5
                    bg-orange-super-light fill-navy-light rounded-full
                    -translate-x-5 scale-[.25]">
                <Icon id="arrow" />
            </span>
        </button>
    </div>
    <p class="max-w-md px-8">{content[current].description}</p>
</section>