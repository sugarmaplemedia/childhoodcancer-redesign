<script lang="ts">
    import Heading from '@components/Heading.svelte';
    import Button from '@components/Button.svelte';
</script>

<section 
    role="img" 
    aria-label="Drone image of a shore on the Great Lakes. Photo by Lucas Ludwig on Unsplash"
    class="
        w-full
        relative

        before:content-['']
        before:w-full before:h-full
        before:absolute before:top-0 before:left-0 before:-z-20
        before:bg-[url('/childhood-cancer/images/GreatLakes-0.1q.jpg')] before:bg-cover before:bg-center
        before:brightness-65 before:saturate-75
        ">
    <div class="
            min-w-[1600px]
            absolute z-10 overflow-x-hidden
            -translate-y-24 xl:translate-x-12 rotate-180 scale-110
            pointer-events-none">
        <img src={`${import.meta.env.BASE_URL}/graphics/swooshes/Asset 2.svg`} alt="" draggable="false" />
    </div>
    <div class="
        max-w-2xl lg:max-w-xl px-8 xl:px-0 xl:ml-24 pb-24 pt-36
        relative">
        <Heading size={2} color="white">
            <span class="text-orange">Michigan is 5th in the nation</span><br />
            <span class="
                block xl:w-96 py-2
                text-2xl text-white">
                for annual number of pediatric cancer diagnoses.
            </span>
        </Heading>
        <p class="
            pt-2 pb-6
            font-sans font-medium text-white">470 children are diagnosed in Michigan each year, and the Upper Peninsula has the largest number of children per capita diagnosed with cancer in Michigan. U.P. families face daunting challenges because they must travel out of our area for care. Many times, one parent is forced to take an extended leave of absence or leave a job to be with their child. Medical treatment can go on for many years, leaving kids with physical, emotional, and sensory deficits.
        </p>
        <Button>Help Us Help Them.</Button>
    </div>
</section>