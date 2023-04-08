<script lang="ts">
    import Folder from "./Folder.svelte";
    import MenuLink from "./MenuLink.svelte";

    export let page: string
    export let pageCheck: string
    export let href: string
    export let position: string

    let folderIsOpen = false
    const folderToggle = () => {
        folderIsOpen = !folderIsOpen
    }

</script>

<span class="group
        relative
        flex justify-center items-center gap-4 lg:block">
    <MenuLink activePage={page == pageCheck} {href}>{pageCheck}</MenuLink>
    <figure
        on:click={folderToggle}
        on:keypress={(e) => e.key == "Enter" && folderToggle()}
        class="
            w-4 h-4 fill-navy -translate-y-1.5
            origin-[50%_70%]
            transition-all
            {folderIsOpen ? "-rotate-90" : "rotate-0"}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
    </figure>
    <Folder {position}>
        <slot />
    </Folder>
</span>