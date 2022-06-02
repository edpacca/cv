<script>
    import { associateDev, graduateDev, postdoc, phd } from './data';
import Employment from './Employment.svelte';
</script>

<div class="experience-wrapper">
    <div class="title3 green">Experience</div>
    <hr class="hr-thick two-thirds">
    <div>
        <Employment employment={associateDev}/>
        <Employment employment={graduateDev}/>
        <Employment employment={postdoc}/>
        <Employment employment={phd}/>
    </div>
</div>

<style>

    .experience-wrapper {
        padding-right: 2em;
    }
    .two-thirds {
        margin-right: 33%;
    }
</style>
