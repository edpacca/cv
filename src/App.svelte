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
    import Interests from "./lib/Interests.svelte";
    import Publications from "./lib/Publications.svelte";
</script>

<main>
    <div class="page">
        <Header profile={data.profile}/>
        <Portfolio urls={data.urls}/>
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
    <div class="page stretch-container page2">
        <div class="media-only">
            <hr/>
        </div>
        <section>
            <Projects projects={data.projects}/>
        </section>
        <div class="stretch-bottom">
            <div class="two-col border-top border-bottom print-margin">
                <section>
                    <Interests interests={data.interests}/>
                </section>
                <div class="v-line"/>
                <section>
                    <References references={data.references}/>
                </section>
            </div>
            <section>
                <Publications publications={data.publications} rg_url={data.urls.researchGate}/>
            </section>
        </div>
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

    .media-only {
        display: none;
    }

    @media print, screen and (max-width: 1024px) {
        .page {
            box-shadow: none;
            aspect-ratio: unset;
            margin: 0;
            padding: 0;
        }

        .page2 {
            break-inside: avoid;
        }

        .stretch-container {
            display: flex !important;
            flex-direction: column !important;
        }

        .stretch-bottom {
            margin-top: auto !important;
        }

        .print-margin {
            margin-top: 2em;
        }

        .v-line {
        border-right: 1px solid var(--light-grey);
        }
    }

    @media screen and (max-width: 1024px) {
        .media-only {
            display: block;
        }
    }

    @media screen and (max-width: 892px) {
        .two-col {
            grid-template-columns: 1fr;
        }

        .v-line {
            border-bottom: 2px solid var(--light-grey);
            height: unset;
            width: 100%;
        }
    }
</style>
