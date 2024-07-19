<script lang="ts">
    export let items: string[];
    export let stars: Number;
    import StarFilled from "carbon-icons-svelte/lib/StarFilled.svelte";
</script>

<div class="tech-list-container">
    <div>
        {#each Array(stars) as star}
            <StarFilled size={16} class="icon"/>
        {/each}
    </div>
    <div>
        {#each items as item, i}
            {item}{#if i < items.length - 1},&nbsp;{/if}
        {/each}
    </div>
</div>

<style>
    .tech-list-container {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 1em;
    }
</style>