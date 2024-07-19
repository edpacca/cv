<script lang="ts">
  import PhoneVoice from "carbon-icons-svelte/lib/PhoneVoice.svelte";
  import Email from "carbon-icons-svelte/lib/Email.svelte";
  import Home from "carbon-icons-svelte/lib/Home.svelte";

  export let profile;
</script>

<div class="contact-info">
    <Email size={24} class="icon"/>
    <div>{profile.email}</div>
</div >
  <div class="contact-info">
    <PhoneVoice size={24} class="icon"/>
    <div>{profile.phone}</div>
</div>
<div class="contact-info">
    <Home size={24} class="icon"/>
    <div>{profile.address}</div>
</div>

<style>
  .contact-info {
    display: flex;
    flex-direction: row;
    gap: 0.3em;
    font-weight: 400;
    color: var(--highlight);
  }
</style>