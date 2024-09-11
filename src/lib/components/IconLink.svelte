<script lang="ts">
    import Tooltip from "./Tooltip.svelte";

    export let icon: string;
    export let link: string;
    export let tooltipText: string;
    export let text: string;

    let isHovered: boolean;

    const iconPath = `assets/icons/icons.svg#${icon}`;
</script>


<Tooltip text={tooltipText} bind:isHovered>
    <div class="icon-link-container" class:hovered={isHovered}>
        <a href={link} target="_blank">
            <svg
                class={$$props.class}
                viewBox={"0 0 100 100"}>
                <use href={iconPath}/>
            </svg>
        </a>
        <div class="text">{text}</div>
    </div>
</Tooltip>

<style>
    .icon-link-container {
        display: flex;
        gap: 0.5em;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    svg {
        height: 2em;
        transition: var(--transition-time);
        fill: var(--primary);
    }

    .hovered svg {
        fill: var(--highlight);
    }

    .hovered {
        color: var(--highlight);
    }

    @media print {
        svg {
            height: 1.5em;
        }
    }

    @media screen and (max-width: 768px) {
        .text {
            display: none;
        }
    }
</style>