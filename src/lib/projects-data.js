const projects = [
  {
    id: 1,
    type: 'App',
		tech: ['Next.js', 'React', 'Prisma', 'Tailwind'],
    title: 'Next.js Auth Starter',
    description: 'Next.js Auth Starter is a full-stack web application template designed to kickstart your authentication-related projects. It provides a solid foundation for implementing authentication features such as user registration, login, and authentication persistence.',
    image: '/projects/nextjs-auth-starter.png',
		codeLink: 'https://github.com/denispianelli/nextjs-tailwind-prisma-nextauth-template',
		demoLink: 'https://nextjs-tailwind-prisma-nextauth-template.vercel.app/',
  },
	{
		id: 2,
    type: 'App',
		tech: ['HTML', 'CSS', 'JavaScript'],
    title: 'Todo App',
    description: 'A simple and intuitive Todo application that allows users to keep track of their tasks. Users can add, delete, and mark tasks as completed. The app also features a clean and responsive design for an optimal user experience.',
    image: '/projects/todo-app.png',
		codeLink: 'https://github.com/denis-pianelli/interactivity-todo-app',
		demoLink: 'https://denis-pianelli.github.io/interactivity-todo-app/',
	}
];

module.exports = { projects };