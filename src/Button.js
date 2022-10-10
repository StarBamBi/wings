import styled from "styled-components";

const ButtonCustom = styled.button`
  width: ${(props) => (props.width ? props.width : "150px")};
  height: ${(props) => (props.height ? props.height : "45px")};
  color: ${(props) => (props.color ? props.color : "white")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#D9D9D9"};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border: none;
  border-radius: 10px;
  margin: 10px;
  font-size: 20px;
`;

export function Button(props) {
  return (
    <>
      <ButtonCustom
        width={props.width}
        backgroundColor={props.backgroundColor}
        height={props.height}
        color={props.color}
      >
        {props.text}
      </ButtonCustom>
    </>
  );
}
