<script lang="ts">
    import type { Skill } from '../model/Skill';
    export let skill: Skill;
</script>

<div class="skill-wrapper">
    <div class="skill-title grey">{skill.title} &bull;&nbsp;</div>
    {#each skill.attributes as attribute, i}
        {#if i < skill.attributes.length - 1}
            <span class="skill-attr">{attribute}&nbsp;&bull;&nbsp;</span>
        {:else}
            <span class="skill-attr">{attribute}</span>
        {/if}
    {/each}
</div>

<style>
    .skill-wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .skill-title {
        font-size: 0.9em;
        font-weight: 600;
    }

    .skill-attr {
        font-size: 0.8em;
    }
</style>
