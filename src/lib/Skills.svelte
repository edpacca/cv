<script>
    export let skills;
</script>

<h2>Skills</h2>
<div class="skills-container">
    <div>
        {#each skills as skill, i}
            <span>
                {skill}{#if i < skills.length - 1},&nbsp;{/if}
            </span>
        {/each}
    </div>
</div>


<style>
    .skills-container {
        display: flex;
        align-items: center;
    }
</style>