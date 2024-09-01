<script>
    export let education;
</script>

<h2>Education</h2>
<div class="education-container">
    {#each education as degree, i}
        <div class="degree-container">
            <div>
                <div class="degree-header">
                    <h3>{degree.degree}</h3>
                    {#if degree.subject}
                        <span class="subject">
                            {degree.subject}
                        </span>
                    {/if}
                    {#if degree.grade}
                        <span class="grade">
                            {degree.grade}
                        </span>
                    {/if}
                </div>
                <div class="light">
                    {degree.awarding_body},
                    {degree.country}
                </div>
                <div class="date tight">
                    {degree.years}
                </div>
            </div>
            <!-- <ul class="depts">
                {#each degree.departments as department}
                    <li>
                        {department}
                    </li>
                {/each}
            </ul> -->
        </div>
    {/each}
</div>

<style>
    .education-container {
        display: flex;
    }

    .degree-container {
        margin-bottom: 0.5em;
        flex: 1;
    }

    .degree-header {
        display: flex;
        gap: 0.7em;
        align-items: baseline;
    }

    .grade {
        font-size: 0.95em;
        font-style: italic;
        font-weight: 500;
    }

    .subject {
        font-weight: 500;
    }

    @media print {
        .education-container {
            gap: 1em;
        }

        .degree-container {
            flex: unset;
        }
    }
</style>