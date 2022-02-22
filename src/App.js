/* eslint-disable */
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Section1>
        <h3>신촌 카공 카페 추천</h3>
        <h1>Cafe4Study</h1>
      </Section1>
      <Section2>
        <div className="title-container">
          <h1>Cafe4Study</h1>
        </div>
        <div className="dashboard-container">
          <iframe
            src="https://public.tableau.com/views/MarketingActivityCalendar/MarketingActivityCalendar?:language=ko-KR&:display_count=n&:origin=viz_share_link"
            width="1000px"
            height="600px"
          ></iframe>
        </div>
      </Section2>
      <Section3>
        <div className="title-container">
          <h1>추천 카페 모아보기</h1>
        </div>
        <div className="dashboard-container">
          <iframe
            src="https://public.tableau.com/views/MarketingActivityCalendar/MarketingActivityCalendar?:language=ko-KR&:display_count=n&:origin=viz_share_link"
            width="1000px"
            height="600px"
          ></iframe>
        </div>
      </Section3>
    </Container>
  );
}

export default App;

const Container = styled.div`
  * {
    margin: 0;
  }
  .title-container {
    /* background: blue; */
    padding-top: 60px;
    margin-bottom: 20px;
  }
  .dashboard-container {
    /* background: green; */
    display: flex;
    justify-content: center;
  }
`;
const Section1 = styled.section`
  /* background: lavender; */
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Section2 = styled.section`
  background: pink;
  width: 100vw;
  height: 100vh;
`;
const Section3 = styled.section`
  background: grey;
  width: 100vw;
  height: 100vh;
`;
