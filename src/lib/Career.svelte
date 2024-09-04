<script lang="ts">
    import { stringList } from "./utils";

    export let experience;
</script>

<h2>Experience</h2>
    {#each experience as job, i}
        <div class="no-page-break">
            <div class="employment-header">
                    <h3>{job.job_title}</h3>
                    <div class="company-container">
                        <div class="company">
                        <div class="date">{job.dates} | </div>
                        <div class="bold">{job.company}</div>
                        <div class="light">{job.location}</div>
                    </div>
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
                            <span class="highlighted one-line left-gap">
                                {stringList(description.skills, "|")}
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

    .company-container {
        text-align: right;
        display: flex;
        gap: 1em;
        align-items: center;
    }

    .company {
        display: flex;
        gap: 0.5rem;
    }

    .company-logo {
        height: 2em;
    }

    .left-gap {
        margin-left: 0.5rem;
    }
</style>