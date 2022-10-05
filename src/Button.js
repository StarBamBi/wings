import styled from "styled-components";

const ButtonCustom = styled.button`
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;

export function Button(props) {
  return (
    <>
      <ButtonCustom width={props.width} backgroundColor={props.backgroundColor}>
        {props.text}
      </ButtonCustom>
    </>
  );
}
