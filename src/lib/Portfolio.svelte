<script>
    import IconLink from "./components/IconLink.svelte";
    export let urls;
</script>

<div class="portfolio">
    <IconLink icon={"linkedin"} link={urls.linkedIn} text={"linkedin.com/in/edwardjpace"} tooltipText={"LinkedIn"}/>
    <IconLink icon={"github"} link={urls.github} text={"edpacca"} tooltipText={"Github"}/>
    <IconLink icon={"ep-logo"} link={urls.personal} text={"edpacca.co.uk"} tooltipText={"Personal Website"}/>
  </div>

<style>
    .portfolio {
        display: flex;
        flex-direction: row;
        gap: 1.5em;
    }
</style>