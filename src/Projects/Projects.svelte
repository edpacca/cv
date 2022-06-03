<script>
import { wapp, wizardGrenade } from './data/data';
import Project from './components/Project.svelte';
</script>

<div class="projects-wrapper">
    <div class="title3 green">Projects</div>
    <hr class="hr-thick">
    <div>
        <Project project={wapp} />
        <Project project={wizardGrenade} />
    </div>
</div>

<style>
    .projects-wrapper {
        margin-top: 1em;
    }
</style>
