const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS.",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      id: 2,
      name: "Chat App",
      description: "A real-time chat app using Socket.io and Node.js.",
      github: "https://github.com/yourusername/chat-app",
    },
    {
      id: 3,
      name: "E-commerce Store",
      description: "An e-commerce site built with Next.js and Stripe for payments.",
      github: "https://github.com/yourusername/ecommerce-store",
    },
    {
      id: 4,
      name: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS.",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      id: 5,
      name: "Chat App",
      description: "A real-time chat app using Socket.io and Node.js.",
      github: "https://github.com/yourusername/chat-app",
    },
    {
      id: 6,
      name: "E-commerce Store",
      description: "An e-commerce site built with Next.js and Stripe for payments.",
      github: "https://github.com/yourusername/ecommerce-store",
    },
  
  ];
  
  module.exports.handler = async () => {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Allow all domains, or specify your frontend's domain for more security
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Allow methods that you will use
        "Access-Control-Allow-Headers": "Content-Type", // Allow headers such as Content-Type
      },
      body: JSON.stringify(projects),
    };
  };
  