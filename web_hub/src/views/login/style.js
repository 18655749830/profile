import styled from 'styled-components'

const Wrap = styled.div`
  .login_bg{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .login_wrap{
    width: 400px;
    position: fixed;
    left: 200px;
    top: 200px;
    .login_title{
      color: #fff;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 60px;
      text-align: center;
    }
    .content{
      width: 100%;
      background-color: #fff;
      border: 1px solid #e4e4e4;
      border-radius: 8px;
      overflow: hidden;
      .tabs{
        display: flex;
        height: 70px;
        background-color: #f5f5f6;
        color: #aaabac;
        .tab{
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          cursor: pointer;
        }
        .active{
          background-color: #fff;
          color: var(--primaryText);
        }
      }
      .form_wrap{
        padding: 30px 50px;
        .ant-form-item{
          margin-bottom: 16px;
          &:nth-of-type(2){
            margin-bottom: 2px;
          }
        }
        .login_btn{
          width: 100%;
        }
      }
    }
  }
`

export default Wrap