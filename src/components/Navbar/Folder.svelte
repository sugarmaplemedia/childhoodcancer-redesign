<script lang="ts">
    export let position: string
    export let isOpen: boolean

</script>

<div class="
        pt-4 lg:m-16 lg:py-6
        lg:flex flex-col items-center justify-center gap-2
        lg:absolute -top-10 {position}
        lg:bg-white rounded-b-xl
        lg:invisible lg:opacity-0 group-hover:visible group-hover:opacity-100
        group-hover:translate-y-2
        transition-all origin-top
        {isOpen ? 'visible scale-y-100 max-h-60 lg:max-h-none' : 'invisible scale-y-0 max-h-0 lg:max-h-none lg:scale-y-100 lg:visible'}">
    <slot />
</div>