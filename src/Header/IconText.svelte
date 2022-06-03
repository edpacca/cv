<script lang='ts'>
    export let text: string;
    export let alt: string;
    export let link: string = undefined;
    export let icon: string;
</script>

<div class='icon-text grey'>
    {#if link}
        <a class='icon-href' href={link} target='_blank'><img src={icon} class='icon' alt={alt}></a>
        <a href={link} target='_blank'>{text}</a>
    {:else}
        <img src={icon} class='icon' alt={alt}>
        <div>{text}</div>
    {/if}
</div>


<style>
    .icon {
        width: 1.2em;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-text {
        display: inline-grid;
        grid-template-columns: 1.2em 1fr;
        column-gap: 0.4em;
        align-items: center;
        font-weight: 300;
    }
</style>
