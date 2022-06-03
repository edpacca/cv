<script lang="ts">
    import Education from "../Education/Education.svelte";
    import Experience from "../Experience/Experience.svelte";
    import Projects from "../Projects/Projects.svelte";
    import References from "../References/References.svelte";
    import Skills from "../Skills/Skills.svelte";
</script>

<div class="content-grid">
    <div class="left-col">
        <Experience />
        <Projects />
    </div>
    <div class="right-col">
        <Skills />
        <Education />
        <References />
    </div>
</div>

<style>



	.content-grid {
		display: grid;
		grid-template-columns: 65% 1fr;
	}

	.right-col {
		border-left: 1px solid rgb(88, 104, 104);
		padding-left: 1em;
		margin-bottom: 1em;	
	}

	.left-col {
        padding-right: 1em;
    }

</style>
