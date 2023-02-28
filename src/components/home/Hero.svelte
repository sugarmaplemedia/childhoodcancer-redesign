<script>
    import Heading from "@components/Heading.svelte";
    import Button from "@components/Button.svelte";
</script>

<section class="
    relative

    before:content-['']
    before:w-full before:h-full
    before:absolute before:top-0 before:left-0 before:-z-20
    before:bg-[url('/images/landing-hero.jpg')] before:bg-cover before:bg-center
    before:brightness-65 before:saturate-75
    ">
    <div class="
        max-w-xl ml-24 pt-24 pb-48
        relative">
        <Heading size={1} color="white">
            Working every day<br />
            <span class="
                block w-96 py-2
                text-2xl text-white">
                to fundraise for U.P. families battling <span class="text-orange">childhood cancer.</span>
            </span>
        </Heading>
        <p class="
            pt-2 pb-6
            font-sans font-medium text-white">Since our project began, we have seen a rise in the number of families living in the Upper Peninsula of Michigan seeking help with a child battling cancer. As of December 2022, that number has increased by more <span class="font-bold text-orange">than twenty-fold!</span></p>
        <Button>Join the fight</Button>
    </div>
</section>