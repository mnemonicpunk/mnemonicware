<script>
    import { base } from '$app/paths';
</script>

<h1 class="main-heading"><span style="color: #fff;">mnemonic</span><span style="color: #f66;">ware</span></h1>

<section class="about-me">
    <img src="{base}/mnemonicpunk.png" alt="mnemonicpunk Logo" class="about-logo">
    <div class="about-text">
      <h2>About mnemonicpunk</h2>
      <p>Hi, I'm mnemonicpunk—a hacker at heart. I've spent years solving problems, building tools, and tinkering with everything from embedded devices to open-source projects. I thrive on challenges, constantly learning new things and pushing the limits of what’s possible. To me, it’s not just about the tech—it’s about creating something that makes life easier, more fun, and connects people. If you like the tools I create, you’ll find that the community around them is just as passionate and welcoming. I’m always on the lookout for the next puzzle to solve, and if it catches my eye, you can bet I’ll tackle it with everything I’ve got.</p>
    </div>
  </section>  

<section class="projects">
  <h2>My Projects</h2>
  <div class="project">
    <a href="{base}/nerdhud/" class="project-link">
      <img src="{base}/nerdhudnext_logo.png" alt="Nerd HUD Next Logo" class="project-logo">
      <span class="project-name">NerdHUD Next</span>
    </a>
  </div>
</section>

<style>
    /* Main Heading Styling */
    .main-heading {
        font-family: Roboto; /* Hacker aesthetic */
        font-size: 2.5rem; /* Adjust as needed */
        font-weight: bold;
        color: #1e90ff; /* Matches the gradient for a unified look */
        text-align: center;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* Adds some depth */
        margin-bottom: 20px;
    }

    /* About Me Section */
    .about-me {
        display: flex;
        align-items: center;
        margin: 30px 0;
    }

    .about-logo {
        width: 120px;
        height: auto;
        margin-right: 20px; /* Adds space between the logo and the text */
    }

    .about-text {
        max-width: 700px;
    }

    .about-me h2 {
        font-size: 1.8rem;
        color: #00b3ff;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .about-me p {
        font-size: 1rem;
        line-height: 1.6;
        color: #ccc;
    }

    /* Projects Section */
    .projects {
        margin-top: 40px;
    }

    .projects h2 {
        font-size: 1.8rem;
        color: #00b3ff;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .project {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }

    .project-link {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: inherit;
    }

    .project-logo {
        width: 60px;
        height: auto;
        margin-right: 10px;
    }

    .project-name {
        font-size: 1.2rem;
        font-weight: bold;
        color: #f66;
    }

    .project-name:hover {
        text-decoration: underline;
    }

    /* Responsive adjustments for narrow screens */
    @media (max-width: 600px) {
        body {
            font-size: 14px; /* Smaller text for better fit */
        }

        .about-me, 
        .projects {
            flex-direction: column; /* Stack content */
            align-items: center; /* Center everything */
            text-align: center; /* Center-align text */
        }

        .about-logo,
        .project-logo {
            float: none; /* Disable floating */
            margin: 0 auto 10px auto; /* Center the images */
            max-width: 100%; /* Ensure they fit the container */
        }

        main {
            padding: 10px; /* Add some breathing space */
            width: 100%; /* Utilize full screen width */
        }

        h1.main-heading {
            font-size: 1.8rem; /* Slightly smaller heading */
        }
    }
</style>
