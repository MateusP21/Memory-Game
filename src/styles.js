import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

li {
  list-style:none;
}
body {
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background: #3b39a7;
  font-family: 'Roboto', sans-serif;
}

.App {
  display: grid;
  grid-auto-flow:column;
  grid-auto-rows:max-content;
  width:100vw;
  height: 100vh;
  justify-content:center;
  align-items:top;
  padding:20px;
  .board {
  display: grid;
  grid-gap:15px;
  grid-template-columns: repeat(6, minmax(100px,150px));
  grid-auto-rows:110px;
  max-width:500px;
  align-items: flex-start;
  justify-content: center;
  }

  .scoreboard {
    grid-row:2;
    margin:8px 10px;
    background-color: #fff9f938;
    width:max-content;
    height:max-content;
    padding:10px;
    color:#faf6ef;
    align-self:center;
    justify-self:center;

ul {
  display:grid;
  grid-auto-flow:column;
  grid-gap:10px;


  li {
    display:grid;
    align-items:center;
    justify-items:center;
    span {
      background-color: #282828;
      padding: 2px 14px;
      font-size: 24px;
      margin-bottom: 4px;



    }
  }

  
}
  
  }
}
`;
