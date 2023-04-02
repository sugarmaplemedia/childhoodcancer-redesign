<script lang="ts">
    export let src: string;
    export let alt: string = "";
    export let caption: string = "";

    if (src.startsWith("/")) {
        src = `${import.meta.env.BASE_URL}${src}`;
    }
</script>

<figure class="mt-2 flex flex-col gap-2 md:items-start">
    <img {src} {alt} class="rounded-lg" />
    <hr class="border-none w-2/3 h-0.5 rounded-full mt-2 mb-1 bg-orange" />
    <figcaption class="text-sm">{caption}</figcaption>
</figure>