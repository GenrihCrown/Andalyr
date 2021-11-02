import React from "react";
import "./Chapters.css";
import { Layout, Menu } from "antd";
import Footer from "../../Footer"

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

function Chapters() {
  return (
      <>
    <Layout className="sider-container">
      <Sider className="sider">
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu title="Мидланд">
            <Menu.Item>Материки</Menu.Item>
            <Menu.Item>Страны</Menu.Item>
            <Menu.Item>Религии</Menu.Item>
          </SubMenu>
          <SubMenu title="Энергия">
            <Menu.Item>Источники</Menu.Item>
            <Menu.Item>Аспекты</Menu.Item>
          </SubMenu>
          <Menu.Item title="Персонажи">
            <Menu.Item>Персонажи</Menu.Item>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 1000 }}
          >
            Here need a picture
          </div>
        </Content>
      </Layout>
    </Layout>
    <Footer />
    </>
  );
}

export default Chapters;