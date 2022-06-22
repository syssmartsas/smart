import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { Theme } from "../styles/theme";

// import AvenirNextLTProRegular from '../../public/static/font/avenir/Avenir Next LT Pro Regular.otf'
// import AvenirNextLTPro from '../../public/static/font/avenir/Avenir Next LT Pro.otf'
// import AvenirNextLBlack from '../../public/static/font/avenir/AvenirLTStd-Black.otf'
// import AvenirNextLBook from '../../public/static/font/avenir/AvenirLTStd-Book.otf'
// import AvenirNextLRoman from '../../public/static/font/avenir/AvenirLTStd-Roman.otf'

type Props = {
  theme: Theme;
};

const GlobalStyle = createGlobalStyle<Props>`
  /* @font-face {
    font-family: 'AvenirNext';
    src: url('static/font/avenir/Avenir Next LT Pro Regular.otf');
  } */

  & .btn-primary {
          display: block;
          margin: 0 auto;
          margin-top: 25px;
          background-color: ${({ theme }) => theme.colors.primary[700]};
          font-weight: normal;
          text-align: center;
          padding-left: 46px;
          padding-right: 46px;
  }

  * {
    box-sizing: border-box;
  }
  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;    
  }  
  /* full height layout */
  html,
  body {
    font-family:${({ theme }) => theme.fontFamily}; 
    font-size: 16px;
    background: ${({ theme }) => theme.colors.white[700]}; 
    display: flex;
    width: 100%;
    transition: all 400ms ease-in-out;
    background-color: ${({ theme }) => theme.colors.black[200]};
  }
  table {
    border-collapse  : collapse;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .widget {
    background-color: rgb(255, 255, 255);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 10px;
    box-shadow: rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px;
    overflow: hidden;
    padding: 27px !important;
    margin-bottom: 27px;
  }

  .paper-container {
    min-height: calc( 100vh - 290px);
    margin-bottom: 0;
  }

  ::-moz-selection { /* Code for Firefox */
    color: #ffffff;
    background: ${({ theme }) => theme.colors.primary[700]};
  }

  ::selection {
    color: #ffffff;
    background: ${({ theme }) => theme.colors.primary[700]};
  }
  .display-block {
    display: block;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  .push {
    &-left {
      margin-right: auto;
    }
    &-right {
      margin-left: auto;
    }    
  }
  a {
    color: ${({ theme }) => theme.colors.primary[700]};
    text-decoration: none;
  }
  .text {
    &-left {
      text-align: left !important;
    }
    &-center{
      text-align: center !important;
    }
    &-right {
      text-align: right !important;
    }
    &-justify {
      text-align: justify !important;
    }
  }  
  .mt {
    &-1{
      margin-top: 1rem !important;
    }
    &-2{
      margin-top: 2rem !important;
    }
    &-3{
      margin-top: 3rem !important;
    }
    &-4{
      margin-top: 4rem !important;
    }
    &-5{
      margin-top: 5rem !important;
    }
  }
  .mb {
    &-1{
      margin-bottom: 1rem !important;
    }
    &-2{
      margin-bottom: 2rem !important;
    }
    &-3{
      margin-bottom: 3rem !important;
    }
    &-4{
      margin-bottom: 4rem !important;
    }
    &-5{
      margin-bottom: 5rem !important;
    }
  }
  .ml {
    &-1{
      margin-left: 1rem !important;
    }
    &-2{
      margin-left: 2rem !important;
    }
    &-3{
      margin-left: 3rem !important;
    }
    &-4{
      margin-left: 4rem !important;
    }
    &-5{
      margin-left: 5rem !important;
    }
  }
  .mr {
    &-1{
      margin-right: 1rem !important;
    }
    &-2{
      margin-right: 2rem !important;
    }
    &-3{
      margin-right: 3rem !important;
    }
    &-4{
      margin-right: 4rem !important;
    }
    &-5{
      margin-right: 5rem !important;
    }
  }
  .pt {
    &-1{
      padding-top: 1rem !important;
    }
    &-2{
      padding-top: 2rem !important;
    }
    &-3{
      padding-top: 3rem !important;
    }
    &-4{
      padding-top: 4rem !important;
    }
    &-5{
      padding-top: 5rem !important;
    }
  }
  .pb {
    &-1{
      padding-bottom: 1rem !important;
    }
    &-2{
      padding-bottom: 2rem !important;
    }
    &-3{
      padding-bottom: 3rem !important;
    }
    &-4{
      padding-bottom: 4rem !important;
    }
    &-5{
      padding-bottom: 5rem !important;
    }
  }
  .pl {
    &-1{
      padding-left: 1rem !important;
    }
    &-2{
      padding-left: 2rem !important;
    }
    &-3{
      padding-left: 3rem !important;
    }
    &-4{
      padding-left: 4rem !important;
    }
    &-5{
      padding-left: 5rem !important;
    }
  }
  .pr {
    &-1{
      padding-right: 1rem !important;
    }
    &-2{
      padding-right: 2rem !important;
    }
    &-3{
      padding-right: 3rem !important;
    }
    &-4{
      padding-right: 4rem !important;
    }
    &-5{
      padding-right: 5rem !important;
    }
  }
  .truncate {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }  

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: ${({ theme }) => theme.colors.primary[700]};

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px ${({ theme }) => theme.progressBackground}, 0 0 5px ${({
  theme,
}) => theme.progressBackground};
  opacity: 1;
  z-index: 999;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
  -ms-transform: rotate(3deg) translate(0px, -4px);
  transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;  
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: ${({ theme }) => theme.progressBackground};
  border-left-color: ${({ theme }) => theme.progressBackground};
  border-radius: 50%;
  display: none;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
  animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.hide {
  display: none;
}

.relative {
  position: relative;
}
.ml-auto {
  margin-left: auto;
}
.space {
  margin-left: 5px;
}
.flex-between {
  box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
}
.unselectable-text {
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
`;

export default GlobalStyle;
