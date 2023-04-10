<script lang="ts">
    import Icon from "@components/Icon.svelte"
    import { onMount } from "svelte";

    let ProvisionContainer: HTMLElement
    let counter = 0
    onMount(() => {
        ProvisionContainer.scrollTo(0, 0)
    })
    const handleClick_ScrollLeft = () => {
        ProvisionContainer.scrollBy({
            left: -ProvisionContainer.offsetWidth,
            behavior: "smooth"
        })
        if (counter > 0) {
            counter--
        }
    }
    const handleClick_ScrollRight = () => {
        ProvisionContainer.scrollBy({
            left: ProvisionContainer.offsetWidth,
            behavior: "smooth"
        })
        if (counter < 2) {
            counter++
        }
    }

</script>

<section class="w-full z-10">
    <div
        bind:this={ProvisionContainer} 
        class="
            w-full pb-8 overflow-scroll
            flex items-center gap-4
            snap-x snap-mandatory">
        <div class="
                w-screen shrink-0 snap-center
                flex flex-col items-center gap-4">
            <Icon id="car" />
            <h3>Travel Costs</h3>
        </div>
        <div class="
                w-screen shrink-0 snap-center
                flex flex-col items-center gap-4">
            <Icon id="love" />
            <h3>Emotional Support</h3>
        </div>
        <div class="
                w-screen shrink-0 snap-center
                flex flex-col items-center gap-4">
            <Icon id="bill" />
            <h3>Household Bills</h3>
        </div>
        <!-- <hr class="
            hidden xl:block h-20 w-0.5
            bg-navy opacity-10 rounded-full
            border-none" /> -->
            
        <!-- <hr class="
            hidden xl:block h-20 w-0.5
            bg-navy opacity-10 rounded-full
            border-none" />
        <div class="
            py-12
            flex flex-col items-center space-y-2">
            <Icon id="car" />
            <Heading size={4}>Household Bills</Heading>
        </div> -->
    </div>
    <div class="
            w-full
            flex justify-between items-center
            z-10">
        <button
            on:click={handleClick_ScrollLeft}
            class="
                py-4 px-5
                bg-navy-super-light rounded-full
                rotate-180 scale-50
                transition-all
                {counter == 0 ? 'bg-navy-super-light fill-navy-light' : 'bg-orange fill-navy-light'}">
            <Icon id="arrow" />
        </button>
        <hr class="
                h-2
                grow
                border-t-[6px] border-dotted border-navy-light
                translate-y-[0.125rem]" />
        <button
            on:click={handleClick_ScrollRight} 
            class="
                py-4 px-5
                rounded-full
                scale-50
                transition-all
                {counter == 2 ? 'bg-navy-super-light fill-navy-light' : 'bg-orange fill-navy-light'}">
            <Icon id="arrow" />
        </button>
    </div>
    <p class="px-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam incidunt tenetur accusantium. Consequatur voluptatem cupiditate quo hic, omnis inventore quaerat quod excepturi optio, magni neque a, debitis harum! Accusantium, itaque.</p>
</section>