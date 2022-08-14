interface ProjectsData {
  title: string;
  github: string;
  link: string;
  id: string;
  thumb: string;
  image: string;
  desc: string;
}

const projectData: ProjectsData[] = [
  {
    title: "I know that song!",
    github: "https://github.com/mattgrah-am/I-know-that-song",
    link: "https://iknowthatsong.mattgrah.am",
    id: "iknowthatsong",
    thumb: "src/assets/images/projects/iknowthatsong-200x200.webp",
    image: "src/assets/images/projects/iknowthatsong-600x300.webp",
    desc: "A simple web app that allows the end user to search for an artist or band, which in turn, plays a short 30sec music clip. The end user is then given multiple choice options to guess the title of the song that is playing. If the end user guesses correctly, the name of the song is highlighted green. However, if the end user chooses incorrectly, the selected guess is highlighted in red. At the end, the web app will tell the end user their results.",
  },
  {
    title: "Aka-Izakaya",
    github: "https://github.com/mattgrah-am/aka-izakaya",
    link: "https://aka-izakaya.herokuapp.com",
    id: "akaizakaya",
    thumb: "src/assets/images/projects/aka-izakaya-200x200.webp",
    image: "src/assets/images/projects/aka-izakaya-600x300.webp",
    desc: "A Japanese Restaurant website that has the ability to show customers the food and drinks menu. This website also has an admin portal that gives the client the ability to 'CRUD' the menu items.",
  },
  {
    title: "Job App Track",
    github: "https://github.com/mattgrah-am/jobapptrack",
    link: "https://floating-forest-21500.herokuapp.com/",
    id: "jobapptrack",
    thumb: "src/assets/images/projects/jobapptrack-200x200.webp",
    image: "src/assets/images/projects/jobapptrack-600x300.webp",
    desc: "This full stack web app is a job application tracker that can be used to track jobs that the user has applied for. It also has the ability to add further information or edit existing information to track the progress of the application.",
  },
  {
    title: "Tic Tac Toe",
    github: "https://github.com/mattgrah-am/tictactoe",
    link: "https://mattgrah-am.github.io/tictactoe/",
    id: "tictactoe",
    thumb: "src/assets/images/projects/tictactoe-200x200.webp",
    image: "src/assets/images/projects/tictactoe-600x300.webp",
    desc: "A simple Tic Tac Toe game that uses HTML, CSS, & JavaScript.",
  },
  {
    title: "Tailwind Theme",
    github: "https://github.com/mattgrah-am/tailwind_theme",
    link: "https://mattgrah-am.github.io/tailwind_theme/",
    id: "tailwindtheme",
    thumb: "src/assets/images/projects/tailwindcss-200x200.webp",
    image: "src/assets/images/projects/tailwindcss-600x300.webp",
    desc: "A simple Tailwind theme that was created while learning Tailwind CSS.",
  },
];

export default projectData;
