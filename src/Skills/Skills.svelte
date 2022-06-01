<script>
import Skill from "./Skill.svelte";

let js = {title: "JavaScript", attributes: ["TypeScript", "Node.js", "React", "Redux", "Nunjuks", "Express", "Jest"]};
let csharp = {title: "C#", attributes: ["ASP.NET core/MCV", "Entity Framework", "XNA"]};
let java = {title: "Java", attributes: ["SpringBoot", "Gradle"]};
let nosql = {title: "Db", attributes: ["DynamoDB", "MongoDB"]};
let tools = {title: "Tools", attributes: ["Git", "Docker"]}
let familiar = {title: "", attributes: ["Python", ]}
</script>
<div>
    <div>Programming</div>
    <Skill skill={js}/>
    <Skill skill={csharp}/>
    <Skill skill={java}/>
    <Skill skill={nosql}/>
    <Skill skill={tools}/>
    <div>Familiar</div>
</div>
