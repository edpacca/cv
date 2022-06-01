<script lang="ts">
    import type { Skill } from './Skill';
    export let skill: Skill;
</script>

<div>
    <span>{skill.title}</span>
    {#each skill.attributes as attribute}
        <span>&bull;&nbsp;{attribute}&nbsp;</span>
    {/each}
</div>
