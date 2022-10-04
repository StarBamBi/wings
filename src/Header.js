import styled from "styled-components";

let HeaderWrapper = styled.div`
  background-color: #353535;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 20px;
`;

export const FlexText = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === "col" ? "column" : "row")};
  span {
    margin: 5px;
  }
  .margin-zero {
    margin: 0;
  }
`;

export function Header() {
  return (
    <>
      <HeaderWrapper>
        <FlexText direction="col">
          <span>Wings</span>
          <span>Booking</span>
        </FlexText>
        <FlexText>
          <span>닉네임</span>
          <span>로그아웃</span>
        </FlexText>
      </HeaderWrapper>
    </>
  );
}
