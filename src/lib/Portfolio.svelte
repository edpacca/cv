<script>
    import IconLink from "./components/IconLink.svelte";
    export let urls;
</script>

<div class="portfolio">
    <IconLink icon={"github"} link={urls.github} text={"jedward"} tooltipText={"Github"}/>
    <IconLink icon={"linkedin"} link={urls.LinkedIn} text={"jedward"} tooltipText={"LinkedIn"}/>
    <IconLink icon={"ep-logo"} link={urls.personal} text={"jedward.co.uk"} tooltipText={"Personal Website"}/>
  </div>

<style>
    .portfolio {
        display: flex;
        flex-direction: row;
        gap: 1.5em;
        justify-content: center;
        align-items: center;
    }
</style>