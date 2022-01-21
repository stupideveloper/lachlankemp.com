import Image from "next/image"
import { Key } from "react"


const bigProjects = [
	{
		title: "OpenChatV6",
		tags: ["React", "Next.JS", "TypeScript", "Supabase", "Cloudflare Workers"],
		description: "An open source chat application.",
		image: "https://res.cloudinary.com/lkemp/image/upload/projects/openChatV6_ukeztb.jpg",
		link: "https://github.com/stupideveloper/SwagChatV6",
		disabled: false
	},
	{
		title: "RefTracker",
		tags: ["React","Next.JS","Cloudflare Workers"],
		description: "An open source referral tracker.",
		image: "https://res.cloudinary.com/lkemp/image/upload/projects/refTracker_cbybqp.jpg",
		link: "https://github.com/stupideveloper/RefTracker",
		disabled: false
	},
	{
		title: "More coming soon...",
		tags: [],
		description: "I have more projects in the works, check back soon!",
		image: "",
		disabled: true
	}
]
const icons = [
	{
		'name': 'React',
		'image': 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
	},
	{
		'name': 'Next.JS',
		'image': 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
	},
	{
		'name': 'TypeScript',
		'image': 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
	},
	{
		'name': 'Supabase',
		'image': '/images/logos/supabase-logo-icon.svg',
	},
	{
		'name': 'Cloudflare Workers',
		'image': 'https://cdn.worldvectorlogo.com/logos/cloudflare-1.svg',
	}
]

function TechIcon({iconName}: {iconName: any}) {
	
	return (
		<>
			{/*eslint-disable-next-line @next/next/no-img-element*/}
			<img width={20} src={icons.find( ({ name }) => name === iconName )?.image} alt={`${iconName} icon`} />
		</>
	)
}

function Panel({...props}) {
	const { project } = props
	return (
		<div className=" border flex flex-col shadow-sm rounded-md border-gray-200 overflow-hidden">
			<div className=" flex flex-col justify-center py-2 px-4 border-b border-gray-200">
				<h3 className=" font-bold">{project.title}</h3>
				<p className="text-gray-500 mb-4">{project.description}</p>
				<div className="flex gap-x-3">
					{project.tags.map((tag: null | undefined, index: Key | null | undefined) => (
						<TechIcon iconName={tag} key={index}/>
					))}
				</div>
			</div>
			<div className="w-full overflow-hidden relative border-t-gray-200">
				{!project.disabled && (
					<Image width={960} height={540} alt="Image including the logo of the project" src={project.image} className="w-full absolute" />

				)}
			</div>
		</div>
	)
}
export default function Projects() {
	return (
		<div id="projects" className="scroll-mt-12">
			<h2 className='font-bold text-3xl'>Things I&apos;ve made and are making</h2>
      <p className='mt-1 text-gray-500 text-xl mb-6'>My little side projects, successful or not.</p>		
			<div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 my-4">
				{bigProjects.map((project, index) => (
					<div key={index}>
						{project.disabled && (
							<Panel project={project} />
						)}
						{!project.disabled && (
							<a href={project.link} target="_blank" rel="noreferrer" className="hover:scale-105 transition-transform" key={index}>
								<Panel project={project} />
							</a>
						)}

					</div>
				))}
				</div>
		</div>

	)
}