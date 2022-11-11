import styled from 'styled-components';

export const PresetationStyle = styled.main`
  text-align: center;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  .background-detail {
    position: absolute;
    width: 416px;
    height: 416px;
    left: 911px;
    top: 400px;
    border-radius: 50%;
    background: rgba(147, 161, 153, 0.2);
    filter: blur(58.386px);
  }
  .first-animation {
    animation: appear 0.8s ease;
  }
  .second-animation {
    animation: appear 1s ease;
  }

  @keyframes appear {
    0% {
      opacity: 0;
      scale: 0.5;
    }
    50% {
      opacity: 0;
      scale: 0.5;
    }
    100% {
      opacity: 1;
      scale: 1;
    }
  }
`;
