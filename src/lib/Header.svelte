<script>
    import { CheckmarkFilled } from "carbon-icons-svelte";
    import Contact from "./Contact.svelte";

    export let profile;
    const profileImgPath = "assets/profile2024.png"
</script>

<header>
  <img src={profileImgPath} alt="Eddie Pace" class="profile-img"/>
    <div class="header-info-container">
      <div>
        <div class="header-title">
          <h1>{profile.name}</h1>
          <h3>{profile.job_title}</h3>
        </div>
      </div>
      <div class="contact-container">
        <Contact profile={profile}/>
      </div>
    </div>
</header>

<style>
  header {
    display: grid;
    grid-template-columns: var(--profile-img-height) 1fr;
    gap: 1em;
    height: var(--profile-img-height);
    margin-bottom: 1em;
  }

  .profile-img {
    border-radius: 0.5em;
    height: var(--profile-img-height);
  }

  .header-info-container {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 0.5em;
  }

  h3 {
    font-weight: 300;
    font-size: 1.4em;
  }


  h1 {
    text-transform: uppercase;
    text-align: left;
  }

  .header-title {
    text-align: left;
    margin-bottom: 0.5em;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
  }

</style>
