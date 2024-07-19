<script>
    export let skills;
</script>

<h2>Skills</h2>

<div class="skills-container">
    {#each skills as skill, i}
        {skill}{#if i < skills.length - 1},&nbsp;{/if}
    {/each}
</div>
