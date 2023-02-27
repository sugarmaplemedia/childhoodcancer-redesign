<script lang="ts">
    export let size: number
    export let color: string|null = null
    export let styling: string|null = null
</script>

{#if size == 1}
    <h1 class="
        font-titles text-5xl {color ? `text-${color}` : "text-navy"}
        {styling ? styling : ""}">
        <slot />
    </h1>
{:else if size == 2}
    <h2 class="
        font-titles text-4xl {color ? `text-${color}` : "text-navy"}
        {styling ? styling : ""}">
        <slot />
    </h2>
{:else if size == 3}
    <h3 class="
        font-titles text-3xl {color ? `text-${color}` : "text-navy"}
        {styling ? styling : ""}">
        <slot />
    </h3>
{:else if size == 4}
    <h4 class="
        font-titles text-2xl {color ? `text-${color}` : "text-navy"}
        {styling ? styling : ""}">
        <slot />
    </h4>
{/if}