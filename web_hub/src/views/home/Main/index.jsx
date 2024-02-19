import React, { memo, shallowEqual, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchHomeDataAction } from '@/store/home'
import MainEarth from '@/assets/svg/main_earth'
import DefaultAvatar from '@/assets/svg/default_avatar'
import Images from './cpns/Images'
import FavourSvg from '@/assets/image/icons/favour.svg'
import LikeSVG from '@/assets/image/icons/like.svg'
import CommentSvg from '@/assets/image/icons/comment.svg'
import ShareSvg from '@/assets/image/icons/share.svg'

import Wrap from './style'
const HomeMain = memo(() => {
  // dynamics
  const { dynamics } = useSelector((state) => ({
    dynamics: state.home.dynamics,
  }), shallowEqual)

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <Wrap>
      {
        dynamics.map((item, index) => (
          <div className='item' key={index}>
            <div className='header_wrap df_sb'>
              <div className='left df_ac'>
                {item.user.avatarUrl ? <img className='avatar' src={item.user.avatarUrl} alt="" /> : <DefaultAvatar />}
                <div>
                  <div className='main_title'>
                    <span className='username'>{item.user.name}</span>
                    <span> · </span>
                    <span className='sub primaryColor'>关注</span>
                  </div>
                  <div className='df_ac'>
                    <span>{item.createTime}</span>
                    <span> · </span>
                    <MainEarth />
                  </div>
                </div>
              </div>
              <div className='right'>
                ···
              </div>
            </div>
            <div className='content_wrap df'>
              <div className='content'>{item.content}</div>
              <div className='tag_wrap ml10'>
                {item?.tags.map(tag => (
                  <div key={tag.id} className='tag text_underline'>#{tag.name}</div>
                ))}
              </div>
            </div>
            {
              item.images && <Images images={item.images} />
            }
            <div className='footer_wrap'>
              <div className='df_sb favour_comment'>
                <span className='df secondaryText'><img src={FavourSvg} style={{width: '16px'}} alt="" className='mr4' />{item.praises ? item.praises.length : 0}</span>
                <span className='secondaryText'>{ item.commentCount ? `${item.commentCount}条评论` : '暂无评论' }</span>
              </div>
              <div className='df fn'>
                <div className='flex1 df_ct pointer'><img src={LikeSVG} alt="" className='mr4' /> 赞</div>
                <div className='flex1 df_ct pointer'><img src={CommentSvg} alt="" className='mr4' /> 评论</div>
                <div className='flex1 df_ct pointer'><img src={ShareSvg} alt="" className='mr4' /> 分享</div>
              </div>
            </div>
          </div>
        ))
      }

    </Wrap>
  )
})

export default HomeMain