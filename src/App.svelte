<script lang="ts">
import Header from "./Header/Header.svelte";
import CV from "./Pages/CV.svelte";
import Hobbies from "./Pages/Hobbies.svelte";

type ActivePage = 'CV' | 'hobbies';
let activePage: ActivePage = 'CV';

function switchPage() {
	console.log("EH");
	if (activePage === 'hobbies') {
		activePage = 'CV'
	} else activePage = 'hobbies';
}

</script>

<div>
	<button on:click={switchPage}>next page</button>
</div>
<main>
	<div class="page-body">
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
