<script>
    import { associateDev, graduateDev, postdoc, phd } from './data/data';
import Employment from './components/Employment.svelte';
</script>

<div>
    <div class="title3 green">Experience</div>
    <hr class="hr-thick two-thirds">
    <div>
        <Employment employment={associateDev}/>
        <hr class="hr-thin right-margin">
        <Employment employment={graduateDev}/>
        <hr class="hr-thin right-margin">
        <Employment employment={postdoc}/>
        <!-- <hr class="hr-thin right-margin"> -->
        <!-- <Employment employment={phd}/> -->
    </div>
</div>

<style>

</style>
