<script>
import Qualification from './Qualification.svelte';
import { phd, mchem } from './data';
</script>

<div class='education-wrapper'>
    <div class="title3">Education</div>
    <hr class="hr-thick">
    <Qualification qualification={phd}/>
    <hr class="hr-thin">
    <Qualification qualification={mchem}/>
</div>

<style>

</style>
