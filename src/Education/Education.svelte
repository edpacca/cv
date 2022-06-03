<script>
import Qualification from './components/Qualification.svelte';
import { phd, mchem } from './data/data';
</script>

<div class='education-wrapper'>
    <div class="title3 green">Education</div>
    <hr class="hr-thick">
    <Qualification qualification={phd}/>
    <hr class="hr-thin">
    <Qualification qualification={mchem}/>
</div>

<style>

</style>
