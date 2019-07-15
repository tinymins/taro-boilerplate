import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { IUser } from '@/store/user';
import './index.scss';

interface IStateProps {
  user: IUser;
}

interface IDispatchProps {}
interface IOwnProps {}

// @connect<IStateProps, IDispatchProps, IOwnProps>((state): IStateProps => ({
//   user: state.user.user as IUser,
// }))
class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  public config: Config = {
    navigationBarTitleText: '首页',
  }

  public props: {
    user: IUser;
  }

  public state = {
    i: 1,
  }

  public componentWillMount(): void { }

  public componentDidMount(): void { }

  public componentWillUnmount(): void { }

  public componentDidShow(): void { }

  public componentDidHide(): void { }

  public render(): JSX.Element {
    console.log(this);
    const userId = this.props.user ? this.props.user.id : 'null';
    return (
      <View className="index">
        <Text onClick={() => this.setState({ i: this.state.i + 1 })}>
          Hello world! {this.state.i} Current user: {userId}
        </Text>
      </View>
    );
  }
}

export default connect<IStateProps, IDispatchProps, IOwnProps>((state): IStateProps => ({
  user: state.user.user as IUser,
}))(Index);
