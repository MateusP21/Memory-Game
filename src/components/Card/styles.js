import styled from 'styled-components';

export const CardStyled = styled.div`
  position: relative ;
  margin: 5px;
  perspective: 1000px;
  transition: all 0.3s;
  cursor:pointer;
    

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

  }
  .cardVisible {
    transform: rotateY(180deg);
  }
  .selected {
    transform: rotateY(180deg);
  }
  & img {
    width: 100%;
    object-fit:cover;
    
  }
  

  & .flip{
  transition: 0.5s;
  transform-style: preserve-3d;
  width: 100%;
    height: 100%;
  }
 

  .front-card {
    display: flex;
    transform: rotateY(180deg);
    
    .front-image {
      height:100%;
    }
  }

  .back-card {
  background-color: #ffffffb3;
  display: flex;
  .back-image {
    object-fit:cover;
  }
  }
  .back-card , .front-card {
  backface-visibility: hidden;
  position: absolute;
  height:100px;
  border-radius:8px;
  }

}
`;
