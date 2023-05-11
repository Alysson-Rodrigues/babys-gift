import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
  onHover?: () => void;
  onMouseOut?: () => void; 
  className?: string;
  isNotButton?: boolean;
}

const CartoonButton: React.FC<Props> = (props) => {
  return (
    <button
      className={`bg-purple-900 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-md  cartoon-button ${props.className}`}
      onClick={props.onClick}
      onMouseOver={props.onHover}
      onMouseOut={props.onMouseOut}
    > <span className="text-4xl">{props.text}</span>
      
    </button>
  );
};

export default CartoonButton;
