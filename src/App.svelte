<script lang="ts">
import Education from "./Education/Education.svelte";
import Experience from "./Experience/Experience.svelte";
import Header from "./Header/Header.svelte";
import Skills from "./Skills/Skills.svelte";
</script>

<main>
		<div class="page-body">
			<div class="header">
				<Header />
			</div>
			<div class="content-grid">
				<Experience />
				<div class="right-col">
					<Skills />
					<Education />
				</div>
			</div>
		</div>
</main>

<style>
	main {
		width: 210mm;
		height: 270mm;
		border: 1px solid black;
		filter: drop-shadow(9px);
		background-color: white;
		margin: auto;
		margin-top: 3em;
	}

	.page-body {
		padding: 1.5em;
	}

	.header {
		margin-bottom: 1em;
	}

	.content-grid {
		display: grid;
		grid-template-columns: 65% 1fr;
	}

	.right-col {
		border-left: 1px solid rgb(88, 104, 104);
		padding-left: 1em;	
	}

</style>
