<script>
import Skill from "./Skill.svelte";
import { js, java, csharp, nosql, tools, security, familiar } from './data';
</script>

<div class="skills-wrapper">
    <div class="title3">Technologies</div>
    <hr class="hr-thick">
    <Skill skill={js}/>
    <Skill skill={java}/>
    <Skill skill={csharp}/>
    <Skill skill={nosql}/>
    <Skill skill={tools}/>
    <Skill skill={security}/>
    <hr class="hr-thin">
    <Skill skill={familiar}/>
</div>

<style>
    .skills-wrapper {
        margin-bottom: 2em;
    }

</style>
