<script lang="ts">
  import { LocationFilled, Email, PhoneVoice, Wikis, CheckmarkFilled } from "carbon-icons-svelte";
  export let profile;
</script>


<div class="info-line">
  <Email size={24} class="icon"/>
  <div>{profile.email}</div>
</div >
<div class="info-line">
  <PhoneVoice size={24} class="icon"/>
  <div>{profile.phone}</div>
</div>
<div class="info-line">
  <LocationFilled size={24} class="icon"/>
  <div>{profile.city}</div>
</div>
<div class="info-line">
  <CheckmarkFilled size={24} class="icon"/>
<div>Eligible to work in CA</div>
</div>

<style>
  .info-line {
    flex: 1;
  }
</style>