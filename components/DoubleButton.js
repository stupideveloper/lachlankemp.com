/*function DoubleButton() {
  return (
    <div>
      <button className="border-mountain-meadow-200 border-2 pl-4 pr-3 py-1 rounded-l-full transition-colors	duration-500 hover:border-transparent hover:bg-mountain-meadow-200 hover:text-black font-medium">ShitBot 1000</button>
      <button className="border-mountain-meadow-200 border-2 border-l-0 pl-3 pr-4 py-1 rounded-r-full transition-colors	duration-500 hover:border-transparent hover:bg-mountain-meadow-200 hover:text-black font-medium">ShitBot 1000</button>
    </div>
  )
}
export function ButtonItem() {
  return (
    <div>hello</div>
  )
}
export default DoubleButton*/
import React, { children } from 'react';
function CardComponent({ children }) {
	return (
		<>{children}</>
	);
}
export function CardBody() {
	return <>Body</>;
}
const Card = {
	Component: CardComponent,
	Body: CardBody
};

export default Card;

