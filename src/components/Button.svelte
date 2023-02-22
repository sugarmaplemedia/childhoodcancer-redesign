<script>
    export let href;
</script>

<a {href}>
    <button class="group
        p-5 m-4 hover:scale-95
        relative
        rounded-xl bg-orange-light
        uppercase font-semibold text-navy-dark
        overflow-hidden
        transition-all">
        <span class="
            relative z-10
            group-hover:text-white">
            <slot />
        </span>
        <hr class="
            absolute left-0 bottom-0 z-0
            w-full h-1 group-hover:h-button
            bg-orange border-orange
            transition-all"/>
    </button>
</a>