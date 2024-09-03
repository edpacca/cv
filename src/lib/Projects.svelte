<script lang="ts">
    import { stringList } from "./utils";

    export let projects;
</script>

<h2>Projects</h2>
{#each projects as project, i}
{#if project.published}
    <div>
        <div class="projects-header">
            <h3>{project.name}
            </h3>
            {#if project.year}
                <span class="date">
                   {project.year}
                </span>
            {/if}
            {#if project.tech}
            <span class="highlighted one-line">
                {stringList(project.tech, "|")}
            </span>
            {/if}
            {#if project.url}
            <a href={project.url}>{project.url}</a>
            {/if}

        </div>
        <div>
            {project.description}

        </div>
    </div>
    {#if i < projects.length - 1}
        <hr class="thin"/>
    {/if}
{/if}
{/each}

<style>
    .projects-header {
        display: flex;
        margin-bottom: 0.5rem;
        align-items: baseline;
        gap: 0.5em;
    }

    a {
        margin-left: auto;
    }
</style>