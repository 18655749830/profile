import styled from "styled-components";

const HeaderWarp = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border: 1px solid #e4e4e4;
  box-shadow: 0 1px 1px #e4e4e4;
  background-color: #fff;
  padding: 0 48px;
  .center{
    width: 600px;
    display: flex;
    justify-content: center;
    .item{
      padding: 0 20px;
      cursor: pointer;
    }
    .search_wrap{
      padding: 0 20px;
    }
  }
  .left,.right{
    flex: 1;
    display: flex;
    align-items: center;
    color: ${prop => prop.theme.primaryColor};
    .publish{
      width: 100px;
      height: 40px;
      line-height: 24px;
      border-radius: 20px;
      font-size: 15px;
      color: #fff;
      background-color: ${prop => prop.theme.primaryColor};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      
    }
  }
  .right{
    justify-content: flex-end;
    .avatar_wrap{
      position: relative;
      display: flex;
      align-items: center;
      .avatar{
        cursor: pointer;
      }
      .madol_wrap{
        position: absolute;
        color: ${prop => prop.theme.primaryText};
        width: 200px;
        top: 50px;
        right: 0;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 0 2px #ccc;
        background-color: #fff;
        .line{
          height: 36px;
          border-radius: 8px;
          padding-left: 8px;
          display: flex;
          align-items: center;
          cursor: pointer;
          &:hover{
            background-color: #f0f2f5;
          }
        }
      }
    }
  }
`

export default HeaderWarp