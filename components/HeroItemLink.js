export default function HeroItemLink({link, name, colorClass, newTab}) {
  return (
    <>
      {newTab && 
        <a href={link} target="_blank" rel="noopener noreferrer" className={`${colorClass}  italicLink`}>{name}</a>
      }
      {!newTab && 
        <a href={link} className={`${colorClass} italicLink`}>{name}</a>
      }
    </>
  );
}