<script lang="ts">
	import Header from "./Header/Header.svelte";
	import CV from "./Pages/CV.svelte";
	import Hobbies from "./Pages/Hobbies.svelte";
	import { jsPDF } from "jspdf";

	type ActivePage = 'CV' | 'hobbies';
	let activePage: ActivePage = 'CV';

	function switchPage() {
		if (activePage === 'hobbies') {
			activePage = 'CV'
		} else activePage = 'hobbies';
	}

	async function generatePdf() {
		var doc = new jsPDF('portrait', 'pt', 'a4');
		var source = window.document.getElementById("page-body");
		await doc.html(source);
		doc.save('test.pdf');
	}
</script>

<div>
	<!-- <button on:click={switchPage}>next page</button> -->
	<button on:click={generatePdf}>PDF</button>
</div>
<main>
	<div class="page-body" id="page-body">
		<div class="header">
			<Header />
		</div>
		{#if activePage === 'hobbies'}
			<Hobbies />
		{:else}
			<CV />
		{/if}
	</div>
</main>

<style>
    .header {
		margin-bottom: 1em;
	}
</style>
