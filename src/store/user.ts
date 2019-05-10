export interface User {
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
