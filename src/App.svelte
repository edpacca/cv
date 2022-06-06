<script lang="ts">
	import Header from "./Header/Header.svelte";
	import CV from "./Pages/CV.svelte";
	import { jsPDF } from "jspdf";

	async function generatePdf() {
		var doc = new jsPDF('portrait', 'pt', 'a3');
		var source = window.document.getElementById("page-body");
		await doc.html(source);
		doc.save('test.pdf');
	}
</script>

<div>
	<button class="pdf-button" on:click={generatePdf}>PDF</button>
</div>
<main>
	<div class="page-body" id="page-body">
		<div class="header">
			<Header />
		</div>
		<CV />
	</div>
</main>

<style>
    .header {
		margin-bottom: 1em;
	}

	.pdf-button {
		color: white;
		background-color: rgb(30, 30, 30);
		border-radius: 3px;
		margin: 1em;
	}
</style>
