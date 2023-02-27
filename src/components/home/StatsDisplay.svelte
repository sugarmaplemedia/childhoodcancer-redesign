<script>
    import Heading from "@components/Heading.svelte";
import Icon from "@components/Icon.svelte";

</script>

<section class="
    w-5/6 max-w-4xl m-auto
    relative z-10
    flex items-center justify-center space-x-8
    bg-white rounded-3xl
    drop-shadow-blue">
    <div class="
        py-12
        flex flex-col items-center space-y-2">
        <Icon id="car" />
        <Heading size={4}>Travel Costs</Heading>
    </div>
    <hr class="
        h-20 w-0.5
        bg-navy opacity-10 rounded-full
        border-none" />
    <div class="
        py-20
        flex flex-col items-center space-y-3">
        <Icon id="love" />
        <Heading size={4}>Emotional Support</Heading>
    </div>
    <hr class="
        h-20 w-0.5
        bg-navy opacity-10 rounded-full
        border-none" />
    <div class="
        py-12
        flex flex-col items-center space-y-2">
        <Icon id="car" />
        <Heading size={4}>Household Bills</Heading>
    </div>
</section>