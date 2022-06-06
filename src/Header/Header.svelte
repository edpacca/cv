<script>
import IconText from "./IconText.svelte";
</script>

<div class="top">
    <div>
      <div class="title1 green">EDWARD PACE</div>
      <div class="title2 grey">software developer</div>
    </div>
    <div class="portfolio-info">
      <IconText
        alt={"github"}
        text={"Edpacca"}
        icon={"/assets/github.png"}
        link={"https://github.com/edpacca"}/>
      <IconText
        alt={"linkedin"}
        text={"LinkedIn"}
        icon={"/assets/linkedin.png"}
        link={"https://www.linkedin.com/in/edward-pace-ab88a971/"}/>
    </div>
</div>
<div class="contact-info">
  <IconText
    alt={"email"}
    text={"edwardjpace@gmail.com"}
    icon={"/assets/mail.png"}/>
  <IconText
    alt={"phone"}
    text={"+44 7305 159 528"}
    icon={"/assets/phone.png"}/>
  <IconText
    alt={"address"}
    text={"30/3 Lutton Pl. Edinburgh EH8 9PG"}
    icon={"/assets/home.png"}/>
</div>

<style>
  .top {
    display: flex;
    margin-bottom: 0.5em;
  }

  .portfolio-info {
    align-items: center;
    margin-left: auto;
    order: 2;
    margin-right: 2em;
    display: flex;
    flex-direction: column;
  }

  .contact-info {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    column-gap: 1.5em;
    align-items: center;
  }
</style>
