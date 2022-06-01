<script lang="ts">
import Experience from "./Experience.svelte";
import Header from "./Header.svelte";
import Skills from "./Skills.svelte";
</script>

<main>
		<div class="page-body">
			<div class="header">
				<Header />
			</div>
			<div class="content-grid">
				<Experience />
				<Skills />
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
	}

	.page-body {
		padding: 1em;
	}

	.header {
		margin-bottom: 1em;
	}

	.content-grid {
		display: grid;
		grid-template-columns: 75% 1fr;
	}

</style>
