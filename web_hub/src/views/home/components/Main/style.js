import styled from 'styled-components'

const Wrap  = styled.div`
  width: 680px;
  margin: 0 24px;
  .item{
    border-radius: 8px;
    box-shadow: 0 1px 1px #e4e4e4;
    margin-bottom: 16px;
    padding: 12px 16px 0;
    background-color: #fff;
    .header_wrap{
      .left{
        .avatar{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 8px;
        }
        .main_title{
          margin-bottom: 4px;
        }
        .username{
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
        }
        .sub{
          font-weight: 400;
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
        }
      }
      .right{
        font-weight:900;
        font-size: 18px;
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover{
          background-color: #f2f2f2;
          border-radius: 50%;
        }
      }
    }
    .content_wrap{
      margin: 8px 0;
      .content{
        margin-bottom: 8px;
      }
      .tag_wrap{
        color: ${props => props.theme.primaryColor};
        display: flex;
        flex-wrap: wrap;
        .tag{
          margin-right: 4px;
        }
      }
    }
    .footer_wrap{
      .favour_comment{
        height: 42px;
        align-items: center;
        border-bottom: 1px solid #e4e4e4;
      }
      .fn{
        height: 44px;
        align-items: center;
        color: var(--secondaryText);
      }
    }
  }
`

export default Wrap