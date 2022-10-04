import styled from "styled-components";
import { FlexText } from "./Header";

const ContentWrapper = styled.div`
  background: #eeeeee;
  min-width: 1440px;
  min-height: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Content() {
  return (
    <>
      <ContentWrapper>
        <FlexText direction="col">
          <h2>기쁜동산</h2>
          <h3>반갑습니다!</h3>
          <span className="margin-zero">
            공식 홈페이지에 등록할 부킹엔진 세팅을 부탁드립니다.
          </span>
        </FlexText>
      </ContentWrapper>
    </>
  );
}
