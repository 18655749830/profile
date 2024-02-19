import styled from 'styled-components'

const Wrap  = styled.ul`
flex: 1;
  li{
    width: 280px;
    height: 52px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 6px;
    cursor: pointer;
    img{
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
    &:hover{
      background-color: #e4e6e9;
    }
  }
`

export default Wrap