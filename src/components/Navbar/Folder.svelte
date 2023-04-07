<script lang="ts">
    export let position: string

</script>

<div class="
        m-16 py-6
        flex flex-col items-center justify-center gap-2
        absolute -top-10 {position}
        bg-white rounded-b-xl
        
        invisible opacity-0 group-hover:visible group-hover:opacity-100
        group-hover:translate-y-2
        transition-all">
    <slot />
</div>