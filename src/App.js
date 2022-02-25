/* eslint-disable */
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCookieBite,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <Container>
      <Section1>
        <div>
          <h3>신촌 카공 카페 추천</h3>
          <h1>Cafe4Study</h1>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="search fa-3x fa-beat-fade"
          />
        </div>
      </Section1>
      <Section2>
        <div className="title-container">
          <FontAwesomeIcon icon={faCookieBite} className="search fa-bounce" />

          <h1>Cafe4Study</h1>
        </div>
        <div className="dashboard-container">
          <iframe
            src="https://public.tableau.com/views/Cafe4Study_Dashboard/Cafe4Study_Dashboard01?:language=en-US&:display_count=n&:origin=viz_share_link:embed=yes&:showVizHome=no"
            width="1166px"
            height="595px"
          ></iframe>
        </div>
      </Section2>
      <Section3>
        <div className="title-container">
          <FontAwesomeIcon icon={faHeart} className="search fa-flip" />
          <h1>추천 카페 모아보기</h1>
        </div>
        <div className="dashboard-container">
          <iframe
            src="https://public.tableau.com/views/Cafe4Study_Dashboard2/Cafe4Study_Dashboard02?:language=ko-KR&:display_count=n&:origin=viz_share_link:embed=yes&:showVizHome=no"
            width="1166px"
            height="595px"
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
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #28220b;
  }
  .dashboard-container {
    /* background: green; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Section1 = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(/main_bg.jpeg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;

  div {
    position: absolute;
    bottom: 15%;
    text-align: center;
  }

  h1 {
    font-size: 60px;
  }
  h3 {
    font-size: 28px;
  }
`;
const Section2 = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 15% 85%;
  background-color: #ece6cc;
`;
const Section3 = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 15% 85%;
  background-color: whitesmoke;
`;
