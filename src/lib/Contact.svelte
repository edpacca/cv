<script lang="ts">
  import { LocationFilled, Email, PhoneVoice, Wikis, CheckmarkFilled } from "carbon-icons-svelte";
  export let profile;
</script>


<div class="info-line">
  <Email size={24} class="icon no-print"/>
  <Email size={16} class="icon print-only"/>
  {#if import.meta.env.DEV}
    <div>{profile.email}</div>
  {:else}
    <div>-</div>
  {/if}
</div>
<div class="info-line">
  <PhoneVoice size={24} class="icon no-print"/>
  <PhoneVoice size={16} class="icon print-only"/>
  {#if import.meta.env.DEV}
    <div>{profile.phone}</div>
  {:else}
    <div>-</div>
  {/if}
</div>
<div class="info-line">
  <LocationFilled size={24} class="icon no-print"/>
  <LocationFilled size={16} class="icon print-only"/>
  <div>{profile.city}</div>
</div>
<div class="info-line">
  <CheckmarkFilled size={24} class="icon no-print"/>
  <CheckmarkFilled size={16} class="print-only"/>
<div>Eligible to work in CA</div>
</div>

<style>
  .info-line {
    flex: 1;
  }
</style>