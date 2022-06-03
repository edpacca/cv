<script lang="ts">
    import type { Reference } from '../model/Reference';
    export let reference: Reference;
</script>

<div class="reference">
    <div class="title4">{reference.name}</div>
    <div class="organisation grey">{reference.organisation}</div>
    <div>{reference.relationship}</div>
    <a href='mailto:{reference.email}'>{reference.email}</a>
</div>

<style>

    .reference {
        font-size: 0.8em;
        margin-top: 1.3em;
        margin-bottom: 1.3em;
    }

    .organisation {
        font-style: italic;
    }
</style>
