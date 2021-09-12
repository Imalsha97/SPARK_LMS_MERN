import styled from "styled-components";

const SpinningDiv = styled.div`
    border : 16px solid ${(props) => props.theme.primary.disabled};
    border-top : 16px solid ${(props) => props.theme.primary.main};
    border-radius : 50%;
    width : 5em;
    height : 5em ;
    // animation: spain 2s linear infinite;
    animation: spin infinite 2s linear;
    @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
    }
    
    `;

    const SpinnerContainer = styled.div`
    display : flex;
    justify-content : center;
    align-items : flex-start;
    `;

    const Spinner = () => {
        return (
            <SpinnerContainer>
            <SpinningDiv/>
        </SpinnerContainer>

        )
       
    }
    export default Spinner;
