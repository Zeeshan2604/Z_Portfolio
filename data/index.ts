export const navItems = [
    { name: "About", link: "#about" },
    { name: "Resume", link: "https://drive.google.com/file/d/1c6KelO_yKB8gJIE4vCAabn_ITDY2E6kb/view?usp=drive_link" },
    { name: "Projects", link: "#projects" },
    //{ name: "Testimonials", link: "#testimonials" },
    
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize open communication with my clients for the best quality results",
      description: "",
      className: "lg:col-span-3 md:col-span-4 col-span-1 md:row-span-3 row-span-1 lg:min-h-[50vh] min-h-[30vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Versatile, quick to adapt, and always ready for new challenges!",
      description: "",
      className: "lg:col-span-2 md:col-span-2 col-span-1 md:row-span-2 row-span-1 lg:min-h-[50vh] min-h-[30vh] select-none",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My Resume",
      description: "Are you hiring? Check out ",
      className: "lg:col-span-2 md:col-span-2 col-span-1 md:row-span-1 row-span-1 flex lg:min-h-[25vh] min-h-[15vh]",
      imgClassName: "",
      titleClassName: "justify-end",
      img: "",
      spareImg: "",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "Let's collaborate on your next big idea",
      className: "lg:col-span-5 md:col-span-6 col-span-1 row-span-1 min-h-[20vh]",
      imgClassName: "",
      titleClassName: "justify-center text-center",
      img: "",
      spareImg: "",
    },
  ];
  

  export const projects = [
        {
      id: 1,
      title: "HireX",
      des: "HireX is an Online Hiring web-app for Hiring Candidates according to enterprise's requirements",
      img: "./hirex.png",
      iconLists: ["/science.png", "js.svg", "/tail.svg", "/mongo.svg", "/nodejs.svg"],
      link: "https://hir-ex-client.vercel.app/",
    },

    {
      id: 3,
      title: "HotWheelsX",
      des: "An Hotwheels web-app where you can view 3D models of Hotwheels in an immence environment",
      img: "/hotwheels.png",
      iconLists: ["/science.png","/nodejs.svg", "/tail.svg", "/mongo.svg","js.svg"],
      link: "https://hotwheelsx-frontend.onrender.com/",
    },

    {
      id: 2,
      title: "Tiera E-Commerce Website",
      des: "Build a static site for a business to enhance his online presence for Tiera Fashion an E-commerce site",
      img: "tiera.png",
      iconLists: ["/css.svg", "/html.svg","/js.svg"],
      link: "https://zeeshan2604.github.io/Tiera-E-Commerce-Website/",
      
    },
  
    {
      id: 4,
      title: "Github",
      des: "Visit my GitHub profile to explore all my projects, repositories, and contributions to open source",
      img: "/Mygithub.png",
      iconLists: ["/science.png",  "/tail.svg", "/supabase.png","/mui.svg"],
      link: "https://github.com/Zeeshan2604",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "AI - ML Virtual Internship, by Google for Developers",
      desc: "Hands-on experience in AI & ML with TensorFlow, Python, and more, earning a certification through guided projects and training",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "VR Game Dev Intern at Avai Space",
      desc: "Enhanced visual graphics by 30%, designed & modeled 3D assets, and collaborated cross-functionally to optimize user experience",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Full-Stack Web Dev Intern, by EY-GDS AICTE",
      desc: "Developed a Car Rental System using Django, Python, and MySQL, handling both frontend and backend development",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    
  ];
  
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      href: "https://github.com/Zeeshan2604",
    },
    // {
    //   id: 2,
    //   img: "/twit.svg",
    //   href: " ",
    // },
    {
      id: 3,
      img: "/link.svg",
      href: "https://www.linkedin.com/in/zeeshan-s",
    },
  ];
