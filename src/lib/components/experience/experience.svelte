<div class="time-line">
  <div class="section">
    <span class="title"> DevOps Engineer</span>
    <p class="subtitle">2023 - Present</p>
    <p>Thales Group</p>
    <p class="description">
      <span class="highlight">
        Development and implementation of CI/CD pipelines:
      </span> Design, implement, and maintain continuous integration (CI) and continuous
      delivery (CD) pipelines to automate the build, testing, and deployment of applications.
    </p>
    <p class="description">
      <span class="highlight">
        Infrastructure as Code (IaC) management:
      </span>Utilize tools such as Terraform to automate the creation and
      management of infrastructure, enabling reproducibility and scalability of
      environments.
    </p>
    <p class="description">
      <span class="highlight">Container platform administration: </span>
      Experience in deploying and managing containers using technologies like Docker
      and orchestrators such as Kubernetes for orchestrating and managing containerized
      workloads.
    </p>
    <p class="description">
      <span class="highlight">Automation of repetitive tasks: </span>
      Identifying opportunities to automate manual and repetitive processes through
      scripts or automation tools, enhancing efficiency and reducing errors.
    </p>
  </div>

  <div class="section">
    <span class="title"> Software Developer Engineer</span>
    <p class="subtitle">2021 - 2023</p>
    <p>Analistas Financieros Internacionales</p>
    <p class="description">
      <span class="highlight">
        Comprehensive Development of Web Applications:
      </span> I led the full-stack development of web applications, overseeing tasks
      ranging from configuring databases and establishing connections to crafting
      intuitive user interfaces, ensuring a seamless and engaging user experience.
    </p>
    <p class="description">
      <span class="highlight">
        Active Participation Throughout the Software Life Cycle:
      </span> Participating actively in every stage of the software development life
      cycle, from planning and requirements analysis to implementation, testing,
      CI/CD, deployment, and maintenance.
    </p>
    <p class="description">
      <span class="highlight">
        Efficient Computational Problem-Solving:
      </span>Proficiently applying a diverse range of algorithms and data
      structures to solve complex computational challenges with precision and
      efficacy, ensuring optimal performance and scalability across diverse
      problem domains.
    </p>
    <p class="description">
      <span class="highlight">Scalable Code and Design Patterns: </span>
      Applying Clean Code principles and various design patterns, including CQRS,
      DDD, Event Bus, and Mediator, to ensure scalability and facilitate seamless
      future modifications within applications.
    </p>
  </div>
  <div class="section">
    <span class="title"> Bachelor's Degree in Computer Science</span>
    <p class="subtitle">2016 - 2021</p>
    <p>Universidad Autónoma de Madrid (Spain)</p>
  </div>
</div>

<style>
  :root {
    --time-line-section-padding: 2rem;
    --ornament-size: 25px;
    --small-ornament-size: 12px;
    --time-line-border-size: 4px;
  }
  .time-line {
    font-family: "Istok Web";
    font-weight: 600;
    color: var(--color-primary);
    display: flex;
    flex-direction: column;
    gap: var(--section-inner-gap);
  }

  .section {
    position: relative;
    padding: 0 var(--time-line-section-padding) 0
      var(--time-line-section-padding);
    border-left: var(--time-line-border-size) solid var(--color-primary);
  }

  .section::before {
    display: block;
    position: absolute;
    width: var(--ornament-size);
    left: calc(
      0px - (var(--ornament-size) / 2) - (var(--time-line-border-size) / 2)
    );
    height: var(--ornament-size);
    border-radius: var(--ornament-size);
    background-color: var(--color-primary);
    content: "";
    box-shadow: var(--color-primary) 0px 0px 10px 1px;
  }

  .title {
    font-size: 2rem;
  }
  .description {
    font-weight: 500;
    color: var(--color-primary-75-opacity);
    margin-top: 15px;
    text-align: justify;
    padding-left: var(--time-line-section-padding);
  }

  .description::before {
    display: block;
    position: absolute;
    margin-top: calc(1em / 4);
    width: var(--small-ornament-size);
    left: calc(
      0px - (var(--small-ornament-size) / 2) -
        (var(--time-line-border-size) / 2)
    );
    height: var(--small-ornament-size);
    border-radius: var(--small-ornament-size);
    background-color: var(--color-primary);
    content: "";
    box-shadow: var(--color-primary-75-opacity) 0px 0px 5px 1px;
  }

  .description .highlight {
    color: var(--color-primary);
    font-weight: 600;
  }
</style>
