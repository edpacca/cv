<script lang="ts">
    import data from "./data/cv.json";
    import About from "./lib/About.svelte";
    import Career from "./lib/Career.svelte";
    import Skills from "./lib/Skills.svelte";
    import Header from "./lib/Header.svelte";
    import Education from "./lib/Education.svelte";
    import Projects from "./lib/Projects.svelte";
</script>

<main>
    <Header profile={data.profile} urls={data.urls}/>
    <About summary={data.summary}/>
    <div class="">
        <section>
            <Skills skills={data.skills}/>
        </section>
        <section>
            <Career experience={data.experience}/>
        </section>
        <section>
            <Education education={data.education}/>
        </section>
        <section>
            <Projects projects={data.projects}/>
        </section>
    </div>
</main>

<style>
    section {
        padding: 1em;
        border-bottom: 2px solid var(--mid-grey);
    }

</style>
