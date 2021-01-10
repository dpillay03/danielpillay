import Mock from "../mock";

const database = {
  information: {
    name: 'Daniel Pillay',
    aboutContent: "I am a Software Developer passionate about delivering seamless UX and striking UI.",
    phone: '425.921.0431',
    language: 'English, Hindi',
    email: 'dpillay03@gmail.com',
    freelanceStatus: 'Available',
    socialLinks: {
      email: 'dpillay03@gmail.com',
      instagram: 'https://www.instagram.com/daniel.pillay/',
      linkedin: 'https://www.linkedin.com/in/danielpillay/',
      youtube: 'https://www.youtube.com/user/dpillay03/',
      github: 'https://github.com/dpillay03',
    },
    brandImage: '/images/brand-image.png',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/empty.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "Need a website for your business or brand? Your online footprint is important and I will build you a fully custom website that will help you win."
    },
    {
      title: "Programming",
      icon: 'code',
      details: "For your programming needs, I am proficient in JavaScript, React, Java, Python, jQuery, Git, Heroku, AWS, MongoDB, and more. Let's connect!"
    },
    {
      title: "Videography",
      icon: 'video',
      details: "I have Industry and freelance experience creating various promotional and drone videos for business's and athletes. Tell your story!"
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Amazing Life Chiropractic",
      subtitle: "Official website for the Amazing Life Chiropractic and Wellness.",
      imageUrl: "https://i.ibb.co/gWNHFKF/Project-Thumbnails-1.png",
      largeImageUrl: ["https://i.ibb.co/R3rF629/alcw-large.png"],
      url: 'https://amazinglifechiropractic.com'
    },
    {
      id: 2,
      title: "Renzo Gracie Seattle",
      subtitle: "Official website for Renzo Gracie Seattle - Brazilian Jiu-jitsu.",
      imageUrl: "https://i.ibb.co/1Rgcpzp/rgs.png",
      largeImageUrl: ["https://i.ibb.co/TYzKgVH/rgs-large.png"],
      url: 'https://renzogracieseattle.com'
    },
    {
      id: 3,
      title: "Combat Capitol",
      subtitle: "A combat sports news app built with React and NewsAPI.",
      imageUrl: "https://i.ibb.co/q9KBw6q/combatcapitol.png",
      largeImageUrl: ["https://i.ibb.co/q9KBw6q/combatcapitol.png"],
      url: 'https://github.com/dpillay03/combatcapitol',
    },
    {
      id: 4,
      title: "SoundWave",
      subtitle: "A music playlist CRUD app built with Node, MongoDB, and jQuery.",
      imageUrl: "https://i.ibb.co/MGR3C8q/soundwave.png",
      largeImageUrl: ["https://i.ibb.co/MGR3C8q/soundwave.png"],
      url: 'https://soundwavecf.herokuapp.com/home.html'
    },
    {
      id: 5,
      title: "Subreddit Search Engine",
      subtitle: "A subreddit search engine built with React, HTML5, and CSS3.",
      imageUrl: "https://i.ibb.co/wNTqHQV/subreddit.png",
      largeImageUrl: ["https://i.ibb.co/wNTqHQV/subreddit.png"],
      url: 'https://github.com/dpillay03/subreddit'
    },
    {
      id: 6,
      title: "Execute - To Do List",
      subtitle: "Execute is a to list built with React, HTML5, and CSS3.",
      imageUrl: "https://i.ibb.co/3FSGyc3/Project-Thumbnails-2.png",
      largeImageUrl: ["https://i.ibb.co/3FSGyc3/Project-Thumbnails-2.png"],
      url: 'https://dpillay03.github.io/execute/'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 - Present",
        position: "Lead Web Developer and Digital Marketing Strategist",
        company: "Amazing Life Chiropractic and Wellness",
        details: "Designed, developed, and deployed company website. Managed marketing campaigns like social media and Google ads. Created email marketing campaigns for clients."
      },
      {
        id: 2,
        year: "2018 - 2019",
        position: "Marketing Strategist and Social Media Manager",
        company: "Renzo Gracie Seattle",
        details: "Controlled social media accounts primarily harnessing Instagram and Facebook to gain new clients, showcase the gym, build it's online footprint, and run ad campaigns."
      },
      {
        id: 3,
        year: "2017 - 2019",
        position: "Web Developer and Designer",
        company: "Freelance - Self Employed",
        details: "Designed, developed, and deployed many websites for various business's and brands located in the greater Seattle area and beyond using relevent technologies."
      },
      {
        id: 3,
        year: "2013 - 2017",
        position: "Security Forces Specialist",
        company: "United States Air Force, DoD",
        details: "Provided Law Enforcement and Security capabilities to various military installations around the continental United States and overseas locations including Japan, Guam, Thailand, and Bangladesh."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2020 - 2021",
        graduation: "Bachelor of Computer Science",
        university: "Colorado State University - Global Campus",
        details: "In progress to complete relevent courses and requirements to earn a Bachelor's in Computer Science. Projected graduatation date: September of 2021."
      },
      {
        id: 2,
        year: "2018",
        graduation: "Certificate of Advanced Software Development in Full-Stack JavaScript",
        university: "Code Fellows Coding Academy",
        details: "Completed relevent courses and requirements to earn a certificate in Advanced Software Development in Full Stack JavaScript with proficiencies in MongoDB, Express, React, Nodejs, Git, and more."
      },
      {
        id: 3,
        year: "2017",
        graduation: "Associate of Arts",
        university: "Shoreline Community College",
        details: "Completed relevent courses and requirements to earn an Associates in Arts."
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'He\'ia Bay // Drone Film',
      featuredImage: 'https://i.ibb.co/d4Kzk8f/3.png',
      filesource: '../../blog/heeia-bay.md',
      createDay: "8",
      createMonth: 'September',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Kona Golden Hour // Drone Film',
      featuredImage: 'https://i.ibb.co/TgqTbWb/4.png',
      filesource: '../../blog/kona-golden-hour.md',
      createDay: "25",
      createMonth: 'August',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'Hawaii Teleport Effect // Drone Film',
      featuredImage: 'https://i.ibb.co/M2Qy7Fm/5.png',
      filesource: '../../blog/hawaii-teleport.md',
      createDay: "18",
      createMonth: 'August',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Deception Pass // Drone Film',
      featuredImage: 'https://i.ibb.co/DY7y1NL/6.png',
      filesource: '../../blog/deception-pass.md',
      createDay: "1",
      createMonth: 'June',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Poetry in Motion // Jon Calestine',
      featuredImage: 'https://i.ibb.co/Fh9cJWg/maxresdefault.jpg',
      filesource: '../../blog/poetry-in-motion.md',
      createDay: "26",
      createMonth: 'October',
      createYear: "2019"
    },
    {
      id: 6,
      title: 'If You Don\'t Jump, You\'ll Never Fly',
      featuredImage: 'https://i.ibb.co/hYWXZYf/1.png',
      filesource: '../../skydive.md',
      createDay: "19",
      createMonth: 'September',
      createYear: "2019"
    },
  ],
  contactInfo: {
    phoneNumbers: ['425-921-0431'],
    emailAddress: ['dpillay03@gmail.com'],
    address: ["Seattle based. Temporarily residing in the Island of Hawai'i"]
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});