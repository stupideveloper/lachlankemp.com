export default function Button({children, primary, styleParse }) {
  return (
    <button className={`
    focus:ring-2 focus:ring-blue-500 focus:outline-none  
    ${primary ? `
    bg-mountain-meadow-200 
    text-black hover:bg-transparent 
    hover:text-mountain-meadow-200`
    : 
    `hover:bg-mountain-meadow-200 hover:border-transparent 
    hover:text-black text-mountain-meadow-200`
  } 
    border-mountain-meadow-200 min-w-button-large border-2 px-4 py-1 rounded-full transition-colors duration-700 hover:duration-200 font-medium ${styleParse}`}>{children}</button>
  )
}