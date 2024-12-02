<script>
    import Contact from "./Contact.svelte";
    import ProfileImg from "./ProfileImg.svelte";

    export let profile;
</script>

<header>
    <!-- <div class="profile-img">
      <ProfileImg/>
    </div> -->
    <div class="header-info-container">
      <div>
        <div class="header-title">
          <h1>{profile.name}</h1>
          <h3>&lbrace; {profile.job_title} &rbrace;</h3>
        </div>
      </div>
      <div class="contact-container">
        <Contact profile={profile}/>
      </div>
    </div>
</header>

<style>
  header {
    /* display: grid;
    grid-template-columns: var(--profile-img-height) 1fr;
    gap: 1em; */
    margin-bottom: 1em;
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

  @media screen and (max-width: 892px) {
    header {
      display: flex;
      flex-direction: column-reverse;
    }

    .profile-img {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    header {
      flex-direction: column;
    }

    .header-info-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .header-title {
      text-align: center;
    }

    .profile-img {
      display: block;
      margin: auto;
    }
  }

</style>
