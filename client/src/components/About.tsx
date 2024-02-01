import Image from "next/image"

const config = {
    heading: 'Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology',
    description: "Hello, I'm Mochamad NurFaizi, a Full Stack Web Developer with a focus on engaging user experiences. From responsive design to server management, I blend creativity with technical skills. Explore my portfolio to see innovative projects I've developed. Let's discuss how I can help bring your digital vision to life. Thank you for visiting!",
    skills: [
        { name: 'javascript', icon: '/icons/cib-javascript.svg' },
        { name: 'typescript', icon: '/icons/cib-typescript.svg' },
        { name: 'ExpressJS', icon: '/icons/icons8-express-js-100.svg' },
        { name: 'NextJS', icon: '/icons/cib-next-js.svg' },
        { name: 'Python', icon: '/icons/cib-python.svg' },
        { name: 'SQL', icon: '/icons/cib-postgresql.svg' },
        { name: 'NoSQL', icon: '/icons/cib-mongodb.svg' },
        { name: 'Docker', icon: '/icons/cib-docker.svg' },
    ]
}

export default function About() {
    return (
        <div className="min-h-[90vh] m-4">
            <div className="text-center mx-auto lg:w-1/2">
                <h1 className="text-4xl lg:text-6xl font-bold">About Me</h1>
                <div className="rounded-full h-2 w-40 line mx-auto my-2"></div>
                <h3 className="text-xl lg:text-2xl my-5 lg:my-10">{config.heading}</h3>
            </div>
            <div className="flex lg:flex-row flex-col lg:my-24 lg:mx-32 mx-5">
                <div className="basis-1/2">
                    <h1 className="text-xl lg:text-3xl my-5 font-bold">Get to Know!</h1>
                    <h3 className="lg:text-xl lg:w-3/4 text-justify">{config.description}</h3>
                </div>
                <div className="basis-1/2">
                    <h1 className="text-xl lg:text-3xl lg:m-4 my-4 font-bold">My Skill</h1>
                    <div className="flex flex-wrap">
                        {config.skills.map((skill, index) => {
                            return (
                                <div key={index} className="lg:m-4 m-1">
                                    <Image src={skill.icon} width={75} height={75} alt={skill.name} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}