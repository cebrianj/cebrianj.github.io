<div class="card glass-bg">
  <p>Hello there!</p>
  <p class="me">I'm José Cebrián</p>
  <div class="position dynamic-text">
    <p><span class="arrow">></span> Developer</p>
    <p><span class="arrow">></span> DevOps</p>
  </div>
  <p class="description">
    My background in software development and DevOps allows me to tackle
    challenges and create robust, seamlessly integrated solutions. Driven by
    curiosity and a passion for continuous learning, I evolve in environments
    that foster innovation, constantly improving my skills to stay ahead in the
    dynamic technology landscape.
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

<style>
  .card {
    width: 100%;
    height: auto;
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

  .description {
    color: var(--color-primary-75-opacity);
  }

  .dynamic-text {
    margin-top: 1rem;
    margin-bottom: 1rem;
    overflow: hidden;
    position: relative;
    font-size: 2.5rem;
    line-height: 2.5rem;
    text-align: left;
    height: 2.5rem;
  }

  .dynamic-text > p .arrow {
    font-size: 2.5rem;
  }
  .dynamic-text > p {
    position: relative;
    display: block;
    border-right: 10px solid var(--color-primary);
    max-width: fit-content;
    min-width: 2ch;
    height: auto;
    overflow: hidden;
    white-space: nowrap;
    animation:
      typing 5s steps(36) infinite,
      slide 10s steps(2) infinite;
    top: 0;
  }

  @keyframes slide {
    100% {
      top: -5rem;
    }
  }

  @keyframes typing {
    0% {
      width: 0%;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
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
    background-image: url("icons/icon-linkedin.svg");
  }
  .icon.mail {
    background-image: url("icons/icon-mail.svg");
  }
  .icon.github {
    background-image: url("icons/icon-github.svg");
  }
</style>
