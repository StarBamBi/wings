import styled from "styled-components";
import { Button } from "./Button";
import Wrapper from "./components/Wrapper";

const FirstWrapper = styled.div`
  min-width: 90%;
`;

const SectionBox = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Section = styled.div`
  text-align: ${(props) => {
    switch (props.align) {
      default:
        return "center";
      case "left":
        return "left";
      case "right":
        return "right";
    }
  }};
`;

const TitleSectionBox = styled.div`
  display: flex;
  align-items: center;

  &::before {
    content: "";
    background-color: #353535;
    display: inline-block;
    width: 35px;
    height: 90px;
    margin-right: 15px;
  }
`;

const TitleContentBox = styled.div`
  padding: 20px 50px;
  width: 250px;
`;

const ContentBox = styled.div`
  & .sub-title {
    margin: 10px 0;
  }
`;

const GridBox = styled.div`
  padding: 20px 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

function SubTitleInput(props) {
  return (
    <>
      <ContentBox>
        <div className="sub-title"> &gt; {props.subTitle}</div>
        <input type="text" placeholder={props.placeholder} />
      </ContentBox>
    </>
  );
}

export function First() {
  return (
    <>
      <FirstWrapper>
        <Wrapper>
          <Section align="right">
            <Button text="임시저장" color="black" />
          </Section>

          <SectionBox>
            <TitleSectionBox>
              고객에게 노출 될 숙소 이름을 설정해주세요
            </TitleSectionBox>
            <TitleContentBox>
              <SubTitleInput subTitle="숙소명" />
            </TitleContentBox>
          </SectionBox>

          <SectionBox>
            <TitleSectionBox>숙소의 기본 정보를 입력해주세요.</TitleSectionBox>

            <GridBox>
              <SubTitleInput subTitle="상호명" placeholder="예) 산하정보기술" />
              <SubTitleInput subTitle="사업자 등록번호" />
              <SubTitleInput subTitle="통신 판매 신고 번호" />

              <SubTitleInput subTitle="대표자명" placeholder="예) 홍길동" />
              <SubTitleInput subTitle="대표 번호" />
              <SubTitleInput subTitle="국가/지역" />

              <SubTitleInput
                subTitle="홈페이지 URL"
                placeholder="예) www.naver.com"
              />
              <SubTitleInput subTitle="대표 이메일" />
              <SubTitleInput subTitle="시/도" />

              <SubTitleInput subTitle="체크인 시간" />
              <SubTitleInput subTitle="체크아웃 시간" />
              <SubTitleInput subTitle="등급" />
            </GridBox>
          </SectionBox>
          <Section>
            <Button backgroundColor="red" text="이전" />
            <Button text="다음" />
          </Section>
        </Wrapper>
      </FirstWrapper>
    </>
  );
}
