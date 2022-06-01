<script>
import Skill from "./Skill.svelte";

let js = {title: "JavaScript", attributes: ["TypeScript", "Node.js", "React", "Redux", "Express", "Jest"]};
let csharp = {title: "C#", attributes: ["ASP.NET core", "Entity Framework"]};
let java = {title: "Java", attributes: ["SpringBoot", "Webflux"]};
let nosql = {title: "Db", attributes: ["DynamoDB", "MongoDB"]};
let tools = {title: "Tools", attributes: ["Git", "Docker"]}
let familiar = {title: "Dabbled with:", attributes: ["Python", "C", "Bash", "K8s", "CDK", "Terraform", "AWS", "Svelte", "Netlify", "Gatsby"]}
</script>

<div class="skills-wrapper">
    <div class="title3">Technologies</div>
    <hr>
    <Skill skill={js}/>
    <Skill skill={java}/>
    <Skill skill={csharp}/>
    <Skill skill={nosql}/>
    <Skill skill={tools}/>
    <hr class="mini-hr">
    <Skill skill={familiar}/>
    
</div>

<style>
    .skills-wrapper {
        border: 1px solid red;
    }

    .title3 {
        font-size: 1.2em;
        font-weight: 600;
        color: rgb(0, 65, 40);
        letter-spacing: 0.075em;
    }

    hr {
        margin-left: 1em;
    }

    .mini-hr {
        margin-right: 1em;
    }

</style>
