<script lang="ts">
    import type { Employment } from './Employment';
    export let employment: Employment;
</script>

<div>
    <div class="employment-header">
        <div>
            <div class="title4 green">{employment.title}</div>
            <div class="dates green">{employment.dates}</div>
        </div>
        <div class="company grey">{employment.company}</div>
    </div>

    <div>
        {#each employment.experiences as experience}
            <div>{experience}</div>
        {/each}
    </div>
    <hr class="hr-thin right-margin">
</div>

<style>

    .right-margin {
        margin-right: 16.5%;
    }

    .employment-header {
        display: flex;
    }

    .company {
        margin-left: auto;
        margin-right: 16.5%;
        order: 2;
        font-style: italic;
        font-weight: 400;
    }
</style>
