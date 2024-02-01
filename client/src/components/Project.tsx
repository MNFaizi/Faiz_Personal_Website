import Image from "next/image"

const config = {
    heading: 'Here you will find some of the personal and clients projects that I created with each project containing its own case study',
    projects: [
        {
            name: 'Earthquake Database BMKG', description: 'This is a supporting application for TEWS operations used to organize earthquake parameter data systematically. The current website features include downloading earthquake data with an Excel file output and a map displaying the location of the latest earthquakes.', img: '/projects/eq_database.jpeg',
            tools: ['NextJS', 'PostgresSQL', 'Material UI','TailwindCSS', 'LeafletJS']
        },
        { name: 'Zerowave Profile Company', description: "The Zerowave website is created to showcase the company's profile, highlighting the company's strengths to enhance client trust and corporate credibility. The website includes a page dedicated to displaying the list of ongoing projects, as well as those that have been successfully completed. This aims to provide a comprehensive overview of the company's capabilities and accomplishments.", img: '/projects/zerowave.jpeg', tools: ['NextJS', 'TailwindCSS', 'Framer Motion'] },
        {name : 'Routine Waveform Download', description : 'This website is designed to streamline the process of backing up earthquake waveforms. With the existence of this website, it significantly reduces repetitive tasks that would typically take up to 30 minutes to just a few seconds. Users can simply click a button, and all the tasks are completed instantly.', img : '/projects/routine_download_waveform.jpeg', tools : ['JavaScript', 'CSS', 'HTML5']}

    ]
}
export default function Project() {
    return (
        <div className={'min-h-[90vh] m-5'}>
            <div className="text-center lg:w-1/2 mx-auto">
                <h1 className="text-4xl lg:text-6xl font-bold">Project</h1>
                <div className="rounded-full h-2 w-32 line mx-auto my-2"></div>
                <p className="text-xl lg:text-2xl lg:m-10">{config.heading}</p>
            </div>
            <div className="my-4">
                {config.projects.map((project, index) => {
                    return (
                            <div key={index} className="lg:m-10 lg:flex lg:justify-around">
                                <div className="flex justify-center">
                                    <Image src={project.img} width={600} height={400} alt={project.name} className="rounded-md shadow-xl" />
                                </div>
                                <div className="basis-1/2 my-4">
                                    <h1 className="text-center text-xl lg:text-2xl font-bold">{project.name}</h1>
                                    <div className="rounded-full h-1 w-32 line mx-auto my-2"></div>
                                    <p className="text-md m-2 lg:m-10 text-justify">{project.description}</p>
                                    <div className="flex justify-center flex-wrap">
                                        {project.tools.map((tool, index) => {
                                            return (
                                                <div key={index} className="m-1 rounded-md bg-slate-50 py-2 px-4 shadow-2xl hover:shadow-inner">
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