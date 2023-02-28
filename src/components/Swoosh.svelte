<script lang="ts">
    export let swooshNum: number = 0
    export let styles: string = ""

    let src: string;
    if (swooshNum <= 0 || swooshNum > 16) {
        console.log("Incorrect swoosh selection. Select a number between 1 and 16.")
    } else {
        src = `/graphics/swooshes/Asset ${swooshNum}.svg`
    }

    let position: string
    switch (swooshNum) {
        case 2:
            position = "min-w-2400px -rotate-9 -left-8"
            break
        case 10:
            position = "scale-110"
    }
</script>

<img {src} alt=""
    class="
        absolute -z-10 {position}
        {styles}"/>