<script lang="ts">
    export let text: string;
    export let alt: string;
    export let link: string = undefined;
    export let icon: string;
</script>

<div class="icon-text">
    <img src={icon} class="icon" alt={alt}>
    {#if link}
        <a href={link} target="_blank">{text}</a>
    {:else}
        <div>{text}</div>
    {/if}
</div>


<style>
    .icon {
        width: 1.2em;
    }

    .icon-text {
        display: grid;
        grid-template-columns: 1.4em 1fr;
        column-gap: 0.2em;
        align-items: center;
    }
</style>
