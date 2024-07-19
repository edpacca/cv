<script>
    import IconLink from "./components/IconLink.svelte";
    import Contact from "./Contact.svelte";

    export let profile;
    export let urls;

</script>

<header>
  <img src="/src/assets/druid.png" alt="Eddie Pace" class="profile-img"/>
  <div>
    <div class="header-info-container">
      <div>
        <div class="header-title">
          <h1>{profile.name}</h1>
          <h3>{profile.job_title}</h3>
        </div>
        <div class="portfolio">
          <IconLink icon={"github"} link={urls.github} text={"Github"}/>
          <IconLink icon={"linkedin"} link={urls.LinkedIn} text={"LinkedIn"}/>
          <IconLink icon={"research-gate"} link={urls.researchGate} text={"Research-gate"}/>
          <IconLink icon={"ep-logo"} link={urls.personal} text={"Personal Website"}/>
        </div>
      </div>
      <div class="contact-container">
        <Contact profile={profile}/>
      </div>
    </div>
  </div>
</header>

<style>
  header {
    display: grid;
    grid-template-columns: 9em 1fr;
    gap: 1em;
  }

  .profile-img {
    height: 9em;
    border-radius: 0.5em;
  }

  .header-info-container {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 0.5em;
  }

  h1 {
    color: var(--black);
    text-align: left;
  }

  .header-title {
    text-align: left;
    margin-bottom: 0.5em;
  }

  .portfolio {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
  }

  .contact-container {
    margin-top: auto;
  }

</style>
