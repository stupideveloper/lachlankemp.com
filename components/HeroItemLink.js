export default function HeroItemLink({link, name, colorClass, newTab, children}) {
	return (
		<>
			{newTab && 
        <a href={link} target="_blank" rel="noopener noreferrer" className={`${colorClass}  italicLink`}>{name ? name : children}</a>
			}
			{!newTab && 
        <a href={link} className={`${colorClass} italicLink`}>{name ? name : children}</a>
			}
		</>
	);
}