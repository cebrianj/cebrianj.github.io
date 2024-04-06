<script>
    import About from "$lib/components/about/about.svelte";
    import Navbar from "$lib/components/navbar/navbar.svelte";
    import Section from "$lib/components/section/section.svelte";
    import Skills from "$lib/components/skills/skills.svelte";
    import "$lib/styles/_index";
</script>

<Navbar></Navbar>
<div class="content">
    <Section title="About" iconUrl="icons/icon-user.svg">
        <About></About>
    </Section>

    <Section title="Skills" iconUrl="icons/icon-skills.svg" reverse="true">
        <Skills></Skills>
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
