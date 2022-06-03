<script lang="ts">
    import type { Qualification } from '../model/Qualification';
    export let qualification: Qualification;
</script>

<div class="qualification-wrapper">
    <div class="qualification-header">
        <div>
            <div class="title4 green">{qualification.qualification}</div>
            {#if qualification.grade}
                <span class="grade">{qualification.grade}</span>
            {/if}
        </div>
        <div class="right-align">
            <div class="institute green">{qualification.institute}</div>
            <div class="dates green float-right">{qualification.dates}</div>
        </div>

    </div>

    <div class="departments">
        {#each qualification.departments as dept}
            <div class="dept">{dept}</div>
        {/each}
    </div>

    {#if qualification.placement}
        <div class="placement">{qualification.placement}</div>
    {/if}
</div>

<style>
    .qualification-header {
        display: flex;
    }

    .grade {
        position: absolute;
        overflow: auto;
        font-size: 0.8em;
    }

    .right-align {
        margin-left: auto;
        order: 2;
    }

    .institute {
        font-style: italic;
        float: right;
    }

    .departments {
        margin-top: 0.7em;
    }

    .dept {
        font-size: 0.8em;
        font-weight: 500;
    }

    .placement {
        margin-top: 0.4em;
        font-size: 0.8em;
    }

</style>
