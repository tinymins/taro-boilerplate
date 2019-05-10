/**
 * This file is part of the taro-boilerplate.
 * @link     : https://zhaiyiming.com/
 * @author   : Emile Zhai (root@derzh.com)
 * @modifier : Emile Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */
/* eslint-disable no-underscore-dangle */

// promise-polyfill and regeneratorRuntime requirement
import '@tarojs/async-await';
import { create } from 'dva-core';
import DvaImmer from 'dva-immer';
import DvaLoading from 'dva-loading';
import user from './user';

const app = create();

app.use(DvaImmer());
app.use(DvaLoading({
  effect: true,
}));

app.model(user);

app.start();

const store = app._store;
const dispatch = store.dispatch.bind(store);
store.dispatch = dispatch;

export default store;
