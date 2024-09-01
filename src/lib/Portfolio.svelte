<script>
    import IconLink from "./components/IconLink.svelte";
    export let urls;
</script>

<div class="portfolio">
    <IconLink icon={"github"} link={urls.github} text={"Github"}/>
    <IconLink icon={"linkedin"} link={urls.LinkedIn} text={"LinkedIn"}/>
    <IconLink icon={"research-gate"} link={urls.researchGate} text={"Research-gate"}/>
    <IconLink icon={"ep-logo"} link={urls.personal} text={"Personal Website"}/>
  </div>

<style>
    .portfolio {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        justify-content: center;
        align-items: center;
    }
</style>