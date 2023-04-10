<script lang="ts">
    import Heading from "@components/Heading.svelte";

    export let direction: string = "center"
    switch (direction) {
        case "left":
            direction = "items-start"
            break
        case "center":
            direction = "items-center"
            break
        case "right":
            direction = "items-end"
            break
    }
</script>

<div class="
    flex flex-col {direction}">
    <Heading size={2}>
        <slot>
            Section <span class="text-orange">Headline</span>
        </slot>
    </Heading>
    <div class="
        py-2 space-y-2
        flex flex-col {direction}">
        <hr class="
            w-40 h-0.5
            bg-orange rounded-full
            border-none"/>
        <hr class="
            w-24 h-0.5
            bg-orange-light rounded-full
            border-none"/>
    </div>
</div>