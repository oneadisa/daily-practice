import styled from "styled-components";

interface InputProps {
  backgroundProp: string;
  borderColorProp?: string;
}

const Input = ({ backgroundProp, borderColorProp }: InputProps) => {

  interface InputInterface {
    background: string;
    borderColor?: string;
  }

  const StyledInput = styled.button<InputInterface>`
    background: ${(props) => props.background};
    box-sizing: border-box;

    position: absolute;
    width: 452.77px;
    height: 43.57px;
    left: 777.1px;
    top: 535.78px;

    background: #5a53b1;
    border: 0.947222px solid ${(props) => props.borderColor} ;
    box-shadow: 0px 0px 18.9444px rgba(106, 100, 173, 0.3);
    border-radius: 3.78889px;
  `;
  return <StyledInput background={backgroundProp} borderColor={borderColorProp}/>;
};

export default Input;
