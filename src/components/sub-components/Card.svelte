<script lang="ts">
    import Heading from "@components/Heading.svelte";
    
    export let src: string = "https://via.placeholder.com/360x144.jpg"
    export let alt: string =  "placeholder"
    export let href: string = "#"
</script>

<a {href} class="
    flex flex-col items-center justify-between
    overflow-hidden
    bg-white rounded-3xl
    drop-shadow-blue
    
    hover:-translate-y-2 hover:scale-102
    hover:drop-shadow-blue-hover
    transition-all">
    <img {src} {alt} /> 
    <div class="pt-8 w-full
        flex flex-col items-center grow">
        <Heading size={4}><slot name="title">Card Title</slot></Heading>
        <p class="py-6 px-8 text-left">
            <slot name="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad facilis deserunt sed sunt illo rem magni debitis reiciendis nesciunt repellendus, culpa a, veritatis voluptatem dignissimos! Reiciendis eligendi blanditiis architecto reprehenderit optio voluptas facilis tenetur nemo quia recusandae vitae nostrum consequatur repudiandae consectetur iste quibusdam dicta perspiciatis, quas quis! Autem, voluptatum?</slot>
        </p>
    </div>
    <Heading size={6} styling="pb-4"><em>Click to view more information.</em></Heading>
    <div class="w-full">
        <hr class="h-4
            bg-orange-light
            border-none" />
            <hr class="h-6
                bg-orange
                border-none" />
    </div>
</a>