import React, { memo } from 'react'
import { Image } from 'antd'

import Wrap from './style'
const Images = memo(({ images }) => {
  return (
    <Wrap>
      {
        images.length > 4 ? <MoreImgs images={images}></MoreImgs> :<MiniImg images={images}></MiniImg>
      }
    </Wrap>
  )
})

const MoreImgs = ({ images }) => <div className='more_imgs'>{
  <Image.PreviewGroup
    items={images}
  >
     {images.map(img => (
      <Image src={img} />
     ))}
  </Image.PreviewGroup>
}</div>

const MiniImg = ({ images }) => <div className='mini_imgs'>{
  <Image.PreviewGroup
    items={images}
  >
     <Image width={'100%'} src={images[0]} />
  </Image.PreviewGroup>
}</div>

export default Images