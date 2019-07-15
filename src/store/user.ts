/**
 * This file is part of the taro-boilerplate.
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */

export interface IUser {
  id: string;
}

export default {
  namespace: 'user',
  state: {
    user: {
      id: '1',
    },
  },
  reducers: {},
  effects: {},
};
