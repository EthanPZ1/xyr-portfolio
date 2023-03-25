const projects = {
  1: {
    img: "https://images.discordapp.net/avatars/817733214948687893/b65c65a96b64e5489f87b1d6e14429df.png?size=256",
    title: "Hercules",
    desc: "A wholesome and friendly bot which can perform all the features",
  },

  2: {
    img: "./imgs/pfp.png",
    title: "Crimson+",
    desc: "A private moderation bot",
  },

  3: {
    img: "./imgs/pfp.png",
    title: "Developers Lounge",
    desc: "I am working on a botlist system so this bot is for that.",
  },

  4: {
    img: "./imgs/pfp.png",
    title: "DL Rythm",
    desc: "A private music bot",
  },

  5: {
    img: "./imgs/pfp.png",
    title: "DL Modmail",
    desc: "A private modmail ticket system for my botlist system.",
  },

  6: {
    img: "./imgs/pfp.png",
    title: "DL channel",
    desc: "A private bot for botlist system.",
  },

  7: {
    img: "./imgs/pfp.png",
    title: "Ticket Bot",
    desc: "A public bot I made for a client. I have invite link of this. This is a ticket system.",
  },
};

Object.entries(projects).forEach(([_, value]) => {
  const html = `
      <div>
        <img src="${value.img}" loading="lazy" />
        <h2>${value.title}</h2>
        <p>
          ${value.desc}
        </p>
      </div>`;

  projectsContainer.insertAdjacentHTML("beforeend", html);
});
