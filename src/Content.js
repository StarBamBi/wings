import styled from "styled-components";
import { FlexText } from "./Header";

export const ContentWrapper = styled.div`
  font-size: 20px;
  background: #eeeeee;
  min-width: 1440px;
  min-height: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    border: 1px solid #b6b6b6;
    border-radius: 10px;
    outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
    width: ${(props) => (props.width ? props.width : "260px")};
    height: ${(props) => (props.height ? props.height : "38px")};
    padding: 0 10px;
  }
`;

const Round = styled.div`
  background: #d9d9d9;
  width: 250px;
  height: 250px;
  text-align: center;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin: 100px 0;
`;

export function Content() {
  return (
    <>
      <FlexText direction="col">
        <h2>기쁜동산</h2>
        <h3>반갑습니다!</h3>
        <span className="margin-zero">
          공식 홈페이지에 등록할 부킹엔진 세팅을 부탁드립니다.
        </span>
      </FlexText>
      <a href="/first">
        <Round>
          부킹엔진
          <br /> 세팅 시작하기
        </Round>
      </a>
    </>
  );
}
