<script lang="ts">
    import type { Employment } from '../model/Employment';
    export let employment: Employment;
    import Icon from 'svelte-awesome';
    import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight'
</script>

<div>
    <div class="employment-header">
        <div>
            <div class="title4 green">{employment.title}</div>
        </div>
        <div class="company grey">{employment.company}</div>
    </div>
    <div class="dates green">{employment.dates}</div>
    <div class="experience-wrapper">
        {#each employment.experiences as experience}
        <div class="bullet-icon green">&bull;</div>
        <!-- <Icon data={faCaretRight} class="bullet-icon green"/> -->
        <div class="experience"> {experience}</div>
        {/each}
    </div>
</div>

<style>
    .employment-header {
        display: flex;
    }

    .company {
        margin-left: auto;
        margin-right: 1.5em;
        order: 2;
        font-style: italic;
        font-weight: 600;
    }



</style>
