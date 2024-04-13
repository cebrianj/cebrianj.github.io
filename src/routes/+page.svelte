<script lang="ts">
  import About from "$lib/components/about/about.svelte";
  import Experience from "$lib/components/experience/experience.svelte";
  import Navbar from "$lib/components/navbar/navbar.svelte";
  import Projects from "$lib/components/projects/projects.svelte";
  import Section from "$lib/components/section/section.svelte";
  import Skills from "$lib/components/skills/skills.svelte";
  import { SectionType } from "$lib/model/section-type";
  import "$lib/styles/_index";

  function scrollToSection(event: any) {
    var section = document.getElementById(event.detail);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }
</script>

<Navbar on:selectedSectionChange={scrollToSection}></Navbar>
<div class="content">
  <Section
    title="About"
    iconUrl="icons/icon-user.svg"
    sectionId={SectionType.ABOUT}
  >
    <About></About>
  </Section>

  <Section
    title="Skills"
    iconUrl="icons/icon-skills.svg"
    reverse="true"
    sectionId={SectionType.SKILLS}
  >
    <Skills></Skills>
  </Section>

  <Section
    title="Experience"
    iconUrl="icons/icon-experience.png"
    sectionId={SectionType.EXPERIENCE}
  >
    <Experience></Experience>
  </Section>

  <Section
    title="Projects"
    iconUrl="icons/icon-code.png"
    reverse="true"
    sectionId={SectionType.PROJECTS}
  >
    <Projects></Projects>
  </Section>
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    gap: var(--sections-gap);
    max-width: var(--content-max-width);
    margin: auto;
    padding: var(--padding-big) var(--padding-small);
  }
</style>
