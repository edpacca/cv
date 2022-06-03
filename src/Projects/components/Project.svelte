<script lang="ts">
    import type { Project } from './Project';
    export let project: Project;
</script>

<div class="project-wrapper">
    <div class="project-header">
        <div>
            <div class="title4 green">{project.title}</div>
        </div>
        <div class="tech grey">
        {#each project.technologies as tech, i }
            {#if i < project.technologies.length - 1}
                {tech},&nbsp;
            {:else}
                {tech}
            {/if}
        {/each}
        </div>
    </div>
    <div class="dates green">{project.dates}</div>
    <div class="experience-wrapper">
        {#each project.experiences as experience}
        <div class="bullet green">&#10151;</div>
        <div class="experience">{experience}</div>
        {/each}
    </div>
</div>

<style>
    .project-header {
        display: flex;
    }

    .tech {
        font-size: 0.8em;
        margin-left: auto;
        order: 2;
        font-weight: bold;
        align-self: flex-end;
    }

    .project-wrapper {
        margin-bottom: 1em;
    }

</style>
