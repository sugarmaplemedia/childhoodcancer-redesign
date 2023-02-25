<script lang="ts">
    export let location: string
</script>


<div class="
    m-16 pt-20 px-6 pb-4 space-y-2
    flex flex-col items-center justify-center
    absolute -top-12  {location} z-0
    bg-white rounded-xl
    
    invisible opacity-0 group-hover:visible group-hover:opacity-100
    group-hover:translate-y-2
    transition-all">
    <slot />
</div>