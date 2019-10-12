import React, { Component } from 'react';
import { Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';
import RouterConf from '@routers/RouterConf';
import './index.less';

const { SubMenu } = Menu;



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
    };


  }

  componentDidMount() {
    console.log('Header: 已加载')
  }
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    const { className } = this.props;

    return (
      <div className={"Header " + className}>
        <div className="Header-MenuContainer">
          <span className="Header-Icon">
            <Link to={RouterConf['home'].url}>
              <Icon
                type="thunderbolt"
                theme="twoTone"
                style={{ fontSize: '32px' }}

              />
            </Link>
          </span>

          <Menu onClick={this.handleClick} className="Header-Menu" selectedKeys={[this.state.current]} mode="horizontal">
            {
              /**
               * <Menu.Item key="mail" disabled>
              <Icon type="read" />
              读书笔记
            </Menu.Item>
               * 
               */
            }

            { /* <Menu.Item key="app" >
              
              <Link to={RouterConf['webGL'].url}>
                    {/* {RouterConf['webGL'].title} 
                    <Icon type="project" />
                    项目
                    <Icon type="down" />
              </Link>
            </Menu.Item> 
              */
            }
            <SubMenu
              title={
                (
                  <span>
                    <Icon type="area-chart" />
                    项目
                  <Icon type="down" />
                  </span>
                )

              }
            >
              {
                /**
                 * <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">
                  <Link to={RouterConf['webGL'].url}>
                    {RouterConf['webGL'].title}
                  </Link>
                </Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
                 */
              }
              <Menu.Item key="project-mindmap" >
                <Link to={RouterConf['mindmap'].url}>
                  {RouterConf['mindmap'].title}
                </Link>
              </Menu.Item>
              <Menu.Item key="project-blog" >
                <Link to={RouterConf['blog'].url}>
                  {RouterConf['blog'].title}
                </Link>
              </Menu.Item>
              {
                /**
                 * 
                 * <Menu.Item key="setting:4"></Menu.Item>
                 */
              }
            </SubMenu>
          </Menu>
        </div>

      </div>
    )
  }
}

export default Header;