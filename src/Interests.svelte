<script>
    export let interests;
</script>

<h2>Interests</h2>
<div class="interests-container">
    <div>
        {#each interests as skill, i}
            <span>
                {skill}{#if i < interests.length - 1},&nbsp;{/if}
            </span>
        {/each}
    </div>
</div>


<style>
    .interests-container {
        display: flex;
        align-items: center;
    }
</style>