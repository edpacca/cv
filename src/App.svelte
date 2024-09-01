<script lang="ts">
    import data from "./data/cv.json";
    import About from "./lib/About.svelte";
    import Career from "./lib/Career.svelte";
    import Skills from "./lib/Skills.svelte";
    import Header from "./lib/Header.svelte";
    import Education from "./lib/Education.svelte";
    import Projects from "./lib/Projects.svelte";
    import References from "./lib/References.svelte";
    import Portfolio from "./lib/Portfolio.svelte";
</script>

<main>
    <div class="page">
        <Header profile={data.profile}/>
        <About summary={data.summary}/>
        <div class="two-col border-top border-bottom">
            <section>
                <Skills skills={data.skills}/>
            </section>
            <div class="v-line"/>
            <section>
                <Education education={data.education}/>
            </section>
        </div>
        <section>
            <Career experience={data.experience}/>
        </section>
    </div>
    <div class="page">
        <section>
            <Projects projects={data.projects}/>
        </section>
        <hr/>
        <section>
            <References references={data.references}/>
        </section>
        <hr/>
        <Portfolio urls={data.urls}/>
    </div>
</main>

<style>
    .page {
        box-shadow: 0 1rem 3rem rgba(0,0,0,.175);
        padding: var(--main-padding);
        width: auto;
        aspect-ratio: 100 / 141;
        margin-bottom: 2em;
    }

    .two-col {
        display: grid;
        grid-template-columns: 2fr auto 3fr;
    }

    .v-line {
        border-right: 2px solid var(--light-grey);
        height: 66%;
        margin: auto;
    }

    section {
        padding: 1em;
    }
</style>
