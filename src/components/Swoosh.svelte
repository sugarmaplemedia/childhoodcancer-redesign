<script lang="ts">
    export let swooshNum: number = 0

    let src: string;
    if (swooshNum <= 0 || swooshNum > 16) {
        console.log("Incorrect swoosh selection. Select a number between 1 and 16.")
    } else {
        src = `/graphics/swooshes/Asset ${swooshNum}.svg`
    }

    let position: string
    switch (swooshNum) {
        case 2:
            position = "-translate-y-64 min-w-2400px -rotate-9 -left-8"
    }
</script>

<img {src} alt=""
    class="
        absolute z-0 {position}"/>