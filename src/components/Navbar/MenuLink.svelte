<script lang="ts">
    export let activePage: boolean
    export let href: string
    export let animate: boolean = true

    let isActive: string
    $: {
        isActive = activePage ? "after:bg-orange" : "after:scale-x-0 hover:after:scale-x-100 after:bg-navy-light"
    }
</script>

<li class="
    pt-1
    relative z-10
    {animate ? "hover:translate-y-0.5 transition-all" : ""}">
    <a href={activePage ? "#top" : href}
        class="
            {animate ? `
                after:block after:h-0.5 after:mx-2 
                after:rounded-full
                after:transition-all
            `: ""}
            {isActive}">
        <slot />
    </a>
</li>