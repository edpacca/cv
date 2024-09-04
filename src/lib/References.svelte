<script>
    export let references;
</script>

<h2>References</h2>
<div class="references-container">
    {#each references as reference}
        <div class="reference">
            <div class="bold">{reference.name}</div>
            <div>{reference.position}, {reference.company}</div>
            {#if import.meta.env.DEV}
                <div>{reference.email}</div>
            {:else}
                <div>contact provided upon request</div>
            {/if}
        </div>
    {/each}
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