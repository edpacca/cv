<script>
    import IconLink from "./components/IconLink.svelte";

    export let publications;
    export let rg_url;
</script>

<div class="pub-header">
<h2>Publications</h2>
    <IconLink icon={"research-gate"} link={rg_url} text={"Edward-Pace-2"} tooltipText={"Research-gate"}/>
</div>
{#each publications as pub}
    <div class="publication-container">
        <div class="regular">
            {pub.title}
        </div>
        <div class="flex-line">
            <div class="flex-mobile">
                <div class="italic">{pub.ref}</div>
                <div class="bold">{pub.date}</div>
            </div>
            <a href={pub.link}>{pub.doi}</a>
        </div>
    </div>
{/each}

<style>
    .pub-header {
        display: flex;
        gap: 2em;
    }

    .publication-container {
        margin-bottom: 0.5em;
    }

    .flex-line {
        display: flex;
        gap: 0.5em;
    }

    .flex-mobile {
        display: flex;
        gap: 0.5em;
    }

    @media screen and (max-width: 700px) {
        .flex-line {
            flex-direction: column;
            gap: 0;
        }

        .flex-mobile {
            flex-direction: row;
        }
    }

</style>