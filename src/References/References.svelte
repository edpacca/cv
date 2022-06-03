<script>
import Reference from './components/Reference.svelte';
import { marzioSuperina, malcolmMcMahon } from './data/data';
</script>

<div class="references-wrapper">
    <div class="title3 green">References</div>
    <hr class="hr-thick">
    <Reference reference={marzioSuperina}/>
    <hr class="hr-thin">
    <Reference reference={malcolmMcMahon}/>
</div>

<style>
    
    .references-wrapper {
        margin-top: 1em;
    }

</style>
