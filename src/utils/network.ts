import { message as Message } from 'antd';
import axios, { AxiosInstance } from 'axios';
import { useTranslation } from 'react-i18next';

// 网络请求，后续可以随时替换
const Axios = Symbol.for('Axios');
const { t } = useTranslation();

const errorMessage = (message: string) => {
  Message.error(t(message));
};
