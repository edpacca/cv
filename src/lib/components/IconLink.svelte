<script lang="ts">
    import Tooltip from "./Tooltip.svelte";

    export let icon: string;
    export let link: string;
    export let tooltipText: string;
    export let text: string;

    const iconPath = `assets/icons/icons.svg#${icon}`;
</script>


<div class="icon-link-container">
    <Tooltip text={tooltipText}>
        <a href={link} target="_blank">
            <svg
                class={$$props.class}
                viewBox={"0 0 100 100"}>
                <use href={iconPath}/>
            </svg>
        </a>
    </Tooltip>
    <div>{text}</div>
</div>

<style>
    .icon-link-container {
        display: flex;
        gap: 0.5em;
        justify-content: center;
        align-items: center;
    }

    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    svg {
        height: 2rem;
        transition: var(--transition-time);
        fill: var(--primary);
    }

    svg:hover {
        fill: var(--highlight);
    }
</style>