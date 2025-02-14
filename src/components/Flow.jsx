import styled, {keyframes} from "styled-components";

const Flow = () => {
  return (
    // <AnimationLayout>
      <FlowBox>
          <FlowText>
              <TextDiv>
                <span>
                  JUNGHWA
                   {/* PORTFOLIO */}
                  {/* <br/> */}
                  {/* JUNGHWA PORTFOLIO */}
                </span>
                <span>
                  JUNGHWA
                   {/* PORTFOLIO */}
                  {/* <br/> */}
                  {/* JUNGHWA PORTFOLIO */}
                </span>
                <span>
                  JUNGHWA
                </span>
              </TextDiv>
          </FlowText>
      </FlowBox>
    // </AnimationLayout>
  )
}
export default Flow;

const flowing = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`

// const AnimationLayout = styled.div`
//     display: flex;
//     flex-direction: row;
//     `
    
const FlowBox = styled.div`
    position: absolute;
    left: 0;
    width: 99vw;
    z-index: -1;
    overflow: hidden;
`

const FlowText = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100%;
    white-space: nowrap;
`

const TextDiv = styled.div`
    font-size: 10rem;
    animation: ${flowing} 8s linear infinite;
    span{
        display:inline-block;
        font-family: 'Cafe24Meongi-W-v1.0';
        font-weight:900;
        padding:0 3px;
        padding-right: 26.66px;
        opacity: 0.03;
        line-height: 100%;
    }
`