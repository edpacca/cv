<script lang="ts">
    import { stringList } from "./utils";

    export let experience;

</script>

<h2>Experience</h2>
    {#each experience as job, i}
        <div class="no-page-break">
            <div class="employment-header">
                <div>
                    <h3>{job.job_title}</h3>
                    <div class="date show-512">{job.dates}</div>
                </div>
                <div class="company-container">
                        <div class="date hide-512">{job.dates} |</div>
                        <div class="bold">{job.company}</div>
                        <div class="light">{job.location}</div>
                    {#if job.icon}
                    <img
                        src={`assets/icons/${job.icon}`}
                        alt={`${job.company} logo`}
                        class="company-logo"
                    />
                    {/if}
                </div>
            </div>
            <div>
                {#if job.summary}
                    <div class="italic">
                        {job.summary}
                    </div>
                {/if}
                <ul>
                    {#each job.notes as description}
                        <li>{description.note}
                            {#if description.shipped}
                                (<strong>{description.product} - SHIPPED</strong>)
                            {/if}
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
        margin-bottom: 0.5em;
    }

    .company-container {
        text-align: right;
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    .company-logo {
        height: 2em;
    }

    .show-512 {
        display: none;
    }

    @media screen and (max-width: 768px) {
        .employment-header {
            grid-template-columns: 1fr;
        }

        .company-logo {
            display: none;
        }

        .company-container {
            align-items: flex-start;
        }
    }

    @media screen and (max-width: 512px) {
        .company-container {
            flex-wrap: wrap;
        }

        .hide-512 {
            display: none;
        }

        .show-512 {
            display: block;
        }

    }
</style>