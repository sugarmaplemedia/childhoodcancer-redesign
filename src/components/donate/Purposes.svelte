<script>
    import Icon from "@components/Icon.svelte"

    let content = [
        {
            icon: "car",
            title: "Travel Costs",
            description: "To receive care, our families must travel long distances. Our grants assist with travel costs, such as gas food, and accomodations."
        },
        {
            icon: "love",
            title: "Emotional Support",
            description: "Lions Clubs from around the U.P. provide toys, cards, hats, quilts, pillowcases, love, and more to let our families know they aren't alone."
        },
        {
            icon: "bill",
            title: "Household Bills",
            description: "Fighting cancer is expensive. Our grants help with bills, such as rent, utilities, groceries, and the associated extensive medical charges."
        }
    ]
</script>

<div class="w-full max-w-xs">
    <div class="
            w-full overflow-x-hidden
            relative
            flex flex-col items-center justify-center gap-8">
        {#each content as current, i}
        <div class="flex flex-col items-center gap-4">
            <Icon id={current.icon} />
            <h4>{current.title}</h4>
            <p class="text-center">{current.description}</p>
        </div>
        {#if i != content.length - 1}
        <hr class="
                w-36 h-0
                border-0 border-b-[6px] border-dotted border-navy-light
                -translate-y-2" />
        {/if}
        {/each}
    </div>
</div>