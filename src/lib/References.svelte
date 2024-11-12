<script>
    export let references;
</script>

<h2>References</h2>
<div class="references-container">
    {#if import.meta.env.DEV}
        {#each references as reference}
            <div class="reference">
                <div class="bold">{reference.name}</div>
                <div>{reference.position}, {reference.company}</div>
                <div>{reference.email}</div>
            </div>
        {/each}
    {:else}
        <div>contact provided upon request</div>
    {/if}
</div>

<style>
    .references-container {
        display: flex;
    }

    .reference {
        flex: 1;
    }

    @media screen and (max-width: 768px) {
        .references-container {
            flex-direction: column;
            gap: 1em;
        }
    }
</style>