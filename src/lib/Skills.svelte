<script>
    export let skills;
</script>

<h2>Skills</h2>

<div class="skills-container">
    {#each skills as skill, i}
        <span>
            {skill}{#if i < skills.length - 1},&nbsp;{/if}
        </span>
    {/each}
</div>


<style>
    .skills-container {
    }
</style>