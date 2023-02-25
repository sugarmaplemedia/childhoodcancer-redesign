<script>
    export let href = "#"
    export let newtab = false
</script>

<a
    {href} 
    target={newtab ? "_blank noreferrer" : "_self"}
    class="group
         px-6 py-4 hover:scale-95
        relative inline-block
        rounded-xl bg-orange-light
        font-sans font-semibold uppercase text-navy-dark
        overflow-hidden
        transition-all">
    <span class="
        relative z-10
        group-hover:text-white text-sm">
        <slot />
    </span>
    <hr class="
        absolute left-0 bottom-0 z-0
        w-full h-1 group-hover:h-button
        bg-orange border-orange
        transition-all"/>
</a>