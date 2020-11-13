import styled from 'styled-components'

//左边样式
const Header = styled.div `
  header{
    width: 100%;
    height: 0.82rem;
    background-color: rgb(212, 60, 51);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 0.2rem;
    .logo{
      width: 100px;
      height: 40px;
      background-color: #000
    }
    .login {
      button {
        border-radius: 0.1rem;
        font-size: 0.14rem;
        color: #fff;
        background-color: rgb(212, 60, 51);
        margin-left: 0.05rem;
        border: none;
        &:hover{
          color:#000
        }
      }
    }
  }
`
export {
  Header
}