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
                    {#if degree.grade}
                        <div class="grade">
                            {degree.grade}
                        </div>
                    {/if}
                </div>
                <div class="bold">
                    {degree.awarding_body},
                    {degree.country}
                </div>
                <div class="date tight">
                    {degree.years}
                </div>
            </div>
            <ul class="depts">
                {#each degree.departments as department}
                    <li>
                        {department}
                    </li>
                {/each}
            </ul>
        </div>
    {/each}
</div>

<style>
    .degree-container {
        margin-bottom: 0.5rem;
    }

    .education-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .degree-header {
        display: flex;
        gap: 0.7em;
        align-items: baseline;
    }

    .grade {
        font-size: 0.95rem;
        font-style: italic;
        font-weight: 500;
    }
</style>