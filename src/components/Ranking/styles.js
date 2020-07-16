import styled from 'styled-components';

export const RankingContainer = styled.div`
  padding:10px;
  background-color:white;
  border-radius:4px;
  margin-left:100px;
  width:200px;
  height:max-content;
  text-align:center;
  h4{
    margin-bottom:40px;
  }
  ul {
    max-height:200px;
    overflow:auto;
  }
  li {
    margin-top:10px;
    display:grid;
    grid-auto-flow:column;
    background: linear-gradient(45deg, #ab4fff, #04a4f1eb);
    padding: 10px;
    color: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    background-color: white;
    align-items:center;
    p > svg {
      margin-right:4px;
    }
  }
`;
