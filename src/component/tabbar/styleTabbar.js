import styled from 'styled-components'
const Tabbar = styled.div `
  ul{
    width: 100%;
    height:0.42rem;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
    li{
      width:100%;
      height:0.42rem;
      display: flex;
      justify-content:center;
      align-items: center;
      a{
        height: 100%;
        line-height: 0.42rem;
        color: #333;
        font-size: 0.15rem;
      }
      .active_tab{
        color:#dd001b;
        border-bottom: 2px solid #dd001b;
      }
    }
  }
`
export {
  Tabbar
}