<script lang="ts">
import Headline from "@components/_fragments/Headline.svelte";
</script>

<section class="w-full px-8 mb-20 flex flex-col items-center gap-8">
    <Headline>Our Progress</Headline>
    <img 
        src="{import.meta.env.BASE_URL}/graphics/data/cc-data-families.svg"
        alt="A map of the Upper Peninsula showcasing amount of recognized families per county."
        class="max-w-lg lg:max-w-xl xl:max-w-2xl">
    <p class="text-sm text-center max-w-xs">These numbers represent the families we recognize who are fighting childhood cancer.</p>
</section>