<script lang="ts">
    export let row: boolean = false
    export let width: "small"|"base" |"large" = "base"
    export let style: string = ""
</script>

<section class="
        w-full px-8 max-w-2xl sm:px-16 {width == "small" ? 'lg:max-w-2xl' : width == "base" ? 'lg:max-w-3xl' : 'lg:max-w-4xl'}
        relative z-0
        flex {row ? "flex-row" : "flex-col"} gap-4 {style}">
    <slot />
</section>