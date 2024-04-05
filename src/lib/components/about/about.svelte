<div class="container">
    <div class="card glass-bg">
        <p>Hello there!</p>
        <p class="me">I'm José Cebrián</p>
        <p class="position">Software Developer Engineer & DevOps</p>
        <p class="description">
            By integrating the realms of software development and DevOps, my
            profile enables me to tackle challenges from multiple angles. This
            approach ensures that the solutions I deliver are not only robust
            and scalable but also seamlessly integrated into the overall
            infrastructure.
        </p>
        <p class="description">
            Driven by my innate curiosity and passion for learning, I thrive in
            environments where innovation and continuous improvement are valued.
            Whether it's exploring new technologies during work hours or
            tinkering with personal projects in my free time, I embrace
            opportunities to expand my skill set and stay ahead of the curve.
            This mindset not only enhances my capabilities as a software
            engineer and DevOps practitioner but also makes my profile
            particularly compelling in today's fast-paced tech landscape.
        </p>
    </div>

    <div class="card glass-bg contact-container">
        <div class="contact">Contact me</div>
        <div class="icons-container">
            <div class="icon linkedin"></div>
            <div class="icon mail"></div>
            <div class="icon github"></div>
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: var(--section-inner-gap);
    }
    .card {
        width: 100%;
        height: auto;
        padding: var(--padding) var(--padding-big);
        font-family: "Istok Web";
        font-weight: 600;
        color: var(--color-primary);
    }

    .card * {
        text-align: justify;
    }

    .me {
        font-size: 1.5rem;
    }

    .position {
        font-size: 3rem;
        text-align: left;
        text-wrap: balance;
    }

    .description {
        color: var(--color-primary-75-opacity);
    }

    .contact-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .contact {
        font-size: 1.5rem;
    }

    .icons-container {
        display: flex;
        gap: var(--sections-icons-gap);
    }

    .icon {
        width: var(--sections-icons-size);
        height: var(--sections-icons-size);
        background-size: contain;
    }

    .icon.linkedin {
        background-image: url("/icon-linkedin.svg");
    }
    .icon.mail {
        background-image: url("/icon-mail.svg");
    }
    .icon.github {
        background-image: url("/icon-github.svg");
    }
</style>
