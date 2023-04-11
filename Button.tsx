import styled from 'styled-components';


interface ButtonProps {
    backgroundProp: string; 
    colorProp: string;   
    children: React.ReactNode;
}

const Button = ({backgroundProp, colorProp, children}: ButtonProps) => {

interface ButtonInterface {
    background?: string;
    color?: string;

}

const StyledButton = styled.button<ButtonInterface>`
  background: ${(props) => props.background};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 11px 46px;
  gap: 10px;
  color: ${(props) => props.color};
  width: 453px;
  height: 43px;
  border-radius: 3.78889px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 15.1556px;
  line-height: 21px;
  /* identical to box height, or 138% */

  text-align: center;

  color: #454081;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
  return (
    <StyledButton background={backgroundProp} color={colorProp}>
        {children}
        </StyledButton>
  )
}

export default Button