import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Checkbox, Form, Input } from 'antd'
import classNames from 'classnames'
import LoginBg from '@/assets/image/img/login_bg.png'

import Wrap from './style'
const Login = memo(() => {
  const navigate = useNavigate()
  
  const [activeName, setActiveName] = useState('0')

  const onFinish = (values) => {
    navigate('/home')
  };

  return (
    <Wrap>
      <div className='login_wrap'>
        <div className='login_title'>Welcome to My own Facebook</div>
        <div className='content'>
          <div className='tabs'>
            <div className={classNames('tab', { active: activeName === '0' })} onClick={() => setActiveName('0')}>用户登录</div>
            <div className={classNames('tab', { active: activeName === '1' })} onClick={() => setActiveName('1')}>管理员登录</div>
          </div>
          <div className='form_wrap'>
            <Form
              wrapperCol={{
                span: 24,
              }}
              onFinish={onFinish}
              // initialValues={{
              //   remember: true,
              // }}
              // autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入账号',
                  },
                ]}
              >
                <Input size='large' placeholder='请输入账号' />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入密码',
                  },
                ]}
              >
                <Input.Password  size='large' placeholder='请输入密码' />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
              >
                <Checkbox>下次自动登录</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
              >
                <Button size='large' className='login_btn' htmlType="submit" type="primary">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <img className='login_bg' src={LoginBg} alt="" />
    </Wrap>
  )
})

export default Login