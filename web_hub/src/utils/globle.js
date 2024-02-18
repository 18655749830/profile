// CustomMessage.js
import { message } from 'antd';

export const CustomMessage = {
  success: (content, duration = 2) => {
    message.success(content, duration);
  },
  error: (content, duration = 2) => {
    message.error(content, duration);
  },
  warning: (content, duration = 2) => {
    message.warning(content, duration);
  },
  info: (content, duration = 2) => {
    message.info(content, duration);
  },
};
