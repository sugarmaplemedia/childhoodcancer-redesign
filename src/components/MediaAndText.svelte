<script lang="ts">
    import Headline from "./sub-components/Headline.svelte";
    import Button from "./Button.svelte";

    export let src: string|null = null
    export let alt: string|null = null
</script>

<section class="
    w-5/6 max-w-4xl m-auto py-24
    flex items-center justify-center space-x-8">
    <img
        src={src ? src : "https://via.placeholder.com/640x480.jpg"}
        alt={alt ? alt : "Placeholder image"}
        width="640" height="480" 
        class="
            max-w-sm
            rounded-3xl
            drop-shadow-blue" />
    <div>
        <Headline direction="left">Our <span class="text-orange">Mission</span></Headline>
        <div class="py-2 space-y-4 {$$slots.default ? "" : "bg-red"}">
            <slot>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate impedit, cumque consectetur itaque recusandae ipsam ut omnis ex distinctio repellat beatae tempora accusamus aut quae dolore, alias quam temporibus unde?</p>
                <Button href="#">Button Text</Button>
            </slot>
        </div>
    </div>
</section>