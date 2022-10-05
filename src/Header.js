import styled from "styled-components";
import { useLocation } from "react-router-dom";

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
  justify-content: ${(props) =>
    props.justify === "center" ? "center" : "normal"};
  align-items: ${(props) => (props.align === "center" ? "center" : "normal")};
  span {
    margin: 5px;
  }
  .margin-zero {
    margin: 0;
  }
`;

export function Header() {
  const location = useLocation();
  console.log("location : ", location);
  return (
    <>
      <HeaderWrapper>
        <FlexText direction="col">
          <span>Wings</span>
          <span>Booking</span>
        </FlexText>
        {location.pathname === "/first" && (
          <>
            <span>01 숙소 기본사항 입력</span>
            <span>
              1 STEP <br /> 기본 정보
            </span>
            <span>
              2 STEP <br /> 상세 정보
            </span>
            <span>
              3 STEP <br /> 숙소 이미지
            </span>
          </>
        )}
        <FlexText>
          <span>닉네임</span>
          <span>로그아웃</span>
        </FlexText>
      </HeaderWrapper>
    </>
  );
}
