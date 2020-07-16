import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height:100vh;
  position:absolute;
  top:0;
  left:0;
  z-index:200;
  background-color: rgba(24, 24, 24, 0.77);
  display:flex;
  justify-content:center;
  align-items:center;
 
  .content {
    padding:20px;
    background-color: #fff;
    width:60%;
   
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:8px;
    h1 {
      font-size:54px;
      margin-bottom:20px;
    }

    

    p {
      margin-bottom:10px;
    }

    button {
      background-color: greenyellow;
      padding:10px;
      border-radius:4px;
      font-weight:bold;
      text-transform:uppercase;
      border: none;
      cursor:pointer;
    }
  }
`;
