<script lang="ts">
    import type { Project } from '../model/Project';
    export let project: Project;
    import Icon from 'svelte-awesome';
    import { faLink } from '@fortawesome/free-solid-svg-icons/faLink'
    import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight'
</script>

<div class="project-wrapper">
    <div class="project-header">
        <div>
            <a class="title4 green" href={project.link} target="_blank">{project.title}</a>
            <!-- <a class="title4 green" href={project.link} target="_blank"><Icon data={faLink} class="green"/> {project.title}</a> -->
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
    <ul class="experience-wrapper">
        {#each project.experiences as experience}
        <li class="experience">{experience}</li>
        {/each}
    </ul>
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
