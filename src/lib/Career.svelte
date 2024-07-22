<script lang="ts">
    import { stringList } from "./utils";

    export let experience;
</script>

<h2>Experience</h2>
    {#each experience as job, i}
        <div>
            <div class="employment-header">
                <div>
                    <h3>{job.job_title}</h3>
                    <div class="date">{job.dates}</div>
                </div>
                <div class="company">
                    <div class="bold">{job.company}</div>
                    <img
                        src={`assets/icons/${job.icon}`}
                        alt={`${job.company} logo`}
                        class="company-logo"
                    />
                </div>
            </div>
            <div>
                <ul>
                    {#each job.notes as description}
                        <li>{description.note}
                            {#if description.skills}
                            <span class="highlighted one-line">
                                {stringList(description.skills)}
                            </span>
                            {/if}
                        </li>
                        {/each}
                    </ul>
            </div>
            {#if i < experience.length - 1}
                <hr class="thin"/>
                {/if}
        </div>
    {/each}
<style>

    .employment-header {
        display: grid;
        grid-template-columns: 1fr auto auto;
    }

    .company {
        text-align: right;
        display: flex;
        gap: 0.5em;
        align-items: center;
    }

    .company-logo {
        height: 2em;
    }
</style>