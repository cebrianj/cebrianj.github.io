<script lang="ts">
    import { AnimationDirection, flipIn, flipOut } from "./animations";

    $: sectionChangeAnimationDirection = AnimationDirection.LEFT_TO_RIGHT;
    let sectionsUniverse = [
        {
            title: "Languages",
            items: [
                { name: "C", imageUrl: "icons/icon-c.png" },
                { name: "C#", imageUrl: "icons/icon-csharp.png" },
                { name: "Java", imageUrl: "icons/icon-java.png" },
                { name: "Python", imageUrl: "icons/icon-python.png" },
                { name: "TypeScript", imageUrl: "icons/icon-typescript.png" },
                { name: "JavaScript", imageUrl: "icons/icon-javascript.png" },
            ],
        },
        {
            title: "Frameworks",
            items: [
                { name: "Angular", imageUrl: "icons/icon-angular.png" },
                { name: ".NET", imageUrl: "icons/icon-dotnet.png" },
                { name: "Flask", imageUrl: "icons/icon-flask.svg" },
                { name: "Svelte", imageUrl: "icons/icon-svelte.png" },
            ],
        },
        {
            title: "DevOps",
            items: [
                { name: "AzureDevops", imageUrl: "icons/icon-azuredevops.png" },
                { name: "Docker", imageUrl: "icons/icon-docker.png" },
                { name: "Kubernetes", imageUrl: "icons/icon-kubernetes.png" },
            ],
        },
        {
            title: "D.B",
            items: [
                { name: "MongoDB", imageUrl: "icons/icon-mongodb.png" },
                { name: "SQL DB", imageUrl: "icons/icon-sql.png" },
                { name: "Redis", imageUrl: "icons/icon-redis.png" },
            ],
        },
        {
            title: "Clouds",
            items: [
                { name: "Azure", imageUrl: "icons/icon-azure.png" },
                { name: "AWS", imageUrl: "icons/icon-aws.png" },
                { name: "Terraform", imageUrl: "icons/icon-terraform.png" },
            ],
        },
        {
            title: "Others",
            items: [
                { name: "Windows", imageUrl: "icons/icon-windows.png" },
                { name: "Linux", imageUrl: "icons/icon-linux.png" },
                { name: "Git", imageUrl: "icons/icon-git.png" },
                { name: "Selenium", imageUrl: "icons/icon-selenium.png" },
                { name: "Scripting", imageUrl: "icons/icon-scripting.png" },
            ],
        },
    ];

    $: currentSectionIdx = 0;
    $: currentSection = sectionsUniverse[currentSectionIdx];

    function setNewSection(idx: number) {
        const isNewSectionAfterCurrent = currentSectionIdx < idx;
        sectionChangeAnimationDirection = isNewSectionAfterCurrent
            ? AnimationDirection.RIGHT_TO_LEFT
            : AnimationDirection.LEFT_TO_RIGHT;
        currentSectionIdx = idx;
    }
</script>

<div class="buttons-container">
    {#each sectionsUniverse as section, idx}
        <button
            class="button {idx == currentSectionIdx ? 'primary' : 'secondary'}"
            on:click={() => setNewSection(idx)}
            >{section.title}
        </button>
    {/each}
</div>

<div class="skills-container">
    <!-- <button>before</button> -->
    <div class="card-container">
        {#key currentSection}
            <div
                class="card glass-bg"
                in:flipIn={sectionChangeAnimationDirection}
                out:flipOut={sectionChangeAnimationDirection}
            >
                <div class="items-container">
                    {#each currentSection.items as item}
                        <div class="item">
                            <div
                                class="icon"
                                style="background-image: url({item.imageUrl})"
                            ></div>
                            <div>
                                {item.name}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        {/key}
    </div>
    <!-- <button>after</button> -->
</div>

<style>
    :root {
        --border-item-width: 0.5px;
    }
    * {
        font-family: "League Spartan";
        font-size: 1rem;
    }
    .buttons-container {
        display: flex;
        justify-content: space-around;
        gap: var(--sections-icons-gap);
    }

    .skills-container {
        /* display: flex; */
        position: relative;
    }

    .card-container {
        display: block;
        /* position: relative; */
    }

    .card {
        color: var(--color-primary);
        position: absolute;
        width: 100%;
        padding: 0;
        border-radius: 0;
        border-width: calc(var(--card-border-size) - var(--border-item-width));
    }

    .items-container {
        display: flex;
        flex-wrap: wrap;
    }

    .item {
        display: flex;
        flex: 1 1 350px;
        flex-direction: column;
        align-items: center;
        gap: var(--sections-icons-gap);
        padding: var(--card-padding-y) var(--card-padding-x);
        border: var(--border-item-width) solid var(--border-color);
    }

    .icon {
        background-size: contain;
        background-repeat: no-repeat;
        height: 3rem;
        width: 3rem;
    }
</style>
