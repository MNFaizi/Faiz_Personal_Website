import Image from "next/image"

const config = {
    heading: 'Here you will find some of the personal and clients projects that I created with each project containing its own case study',
    projects: [
        {
            name: 'Earthquake Database BMKG', description: 'This is a supporting application for TEWS operations used to organize earthquake parameter data systematically. The current website features include downloading earthquake data with an Excel file output and a map displaying the location of the latest earthquakes.', img: '/projects/eq_database.jpeg',
            tools: ['NextJS', 'PostgresSQL', 'Material UI','TailwindCSS', 'LeafletJS']
        },
        { name: 'Zerowave Profile Company', description: "The Zerowave website is created to showcase the company's profile, highlighting the company's strengths to enhance client trust and corporate credibility. The website includes a page dedicated to displaying the list of ongoing projects, as well as those that have been successfully completed. This aims to provide a comprehensive overview of the company's capabilities and accomplishments.", img: '/projects/zerowave.jpeg', tools: ['NextJS', 'TailwindCSS', 'Framer Motion'] }

    ]
}
export default function Project() {
    return (
        <div className={'min-h-[90vh] m-4'}>
            <div className="text-center w-1/2 mx-auto">
                <h1 className="text-6xl font-bold">Project</h1>
                <div className="rounded-full h-2 w-32 bg-white mx-auto my-2"></div>
                <p className="text-2xl m-10">{config.heading}</p>
            </div>
            <div className="my-4">
                {config.projects.map((project, index) => {
                    return (
                            <div key={index} className="m-10 flex justify-around">
                                <div>
                                    <Image src={project.img} width={600} height={400} alt={project.name} className="rounded-md shadow-xl" />
                                </div>
                                <div className="basis-1/2">
                                    <h1 className="text-center text-2xl font-bold">{project.name}</h1>
                                    <div className="rounded-full h-1 w-32 bg-white mx-auto my-2"></div>
                                    <p className="text-md my-10">{project.description}</p>
                                    <div className="flex  justify-center">
                                        {project.tools.map((tool, index) => {
                                            return (
                                                <div key={index} className="m-1 rounded-md bg-slate-200 py-2 px-4 shadow-2xl hover:shadow-inner">
                                                    <span className="font-medium">{tool}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}