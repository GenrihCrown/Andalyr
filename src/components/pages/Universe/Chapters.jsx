import React, { useState } from "react";
import "./Chapters.css";
import Footer from "../../Footer";
import { Layout, Menu } from "antd";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

function Chapters() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("item1");

  const componentsSwitch = (key) => {
    switch (key) {
      case "item1":
        return (
          <div className="item1">
            <h1
              style={{
                margin: "0",
                padding: "0",
                fontSize: "48px",
                color: "#fff",
              }}
            >
              Пролог
            </h1>
            <p style={{ color: "#fff", padding: "5px", margin: "5px" }}>
              В месте, называемом Миэтосом, что являло собой бесконечное
              пространство света не обремененное ни временем ни расстоянием двое
              одиноких путников вели неторопливую беседу. Любой, кто стал бы
              невольным их слушателем сразу понял, что эти двое знакомы вот уже
              очень очень давно. Они оба скорее походили на двух братьев, что
              делились своими наблюдениями о мире, нежели на случайных знакомых.
            </p>
          </div>
        );
      case "item2":
        return <h1>item2</h1>;
      case "item3":
        return <h1>item3</h1>;
      case "item4":
        return <h1>item4</h1>;
      default:
        break;
    }
  };

  return (
    <>
      <Layout className="chapters-container">
        <Layout className="layout-container">
          <Sider
            className="sider-container"
            style={{
              backgroundColor: "#1b1919",
            }}
          >
            <Menu
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              className="side-menu"
              onClick={(e) => setSelectedMenuItem(e.key)}
              style={{ backgroundColor: "#1b1919", borderRadius: "20px" }}
            >
              <Menu.Item key="item1">Пролог</Menu.Item>
              <Menu.Item key="item2">Скитальцы</Menu.Item>
              <Menu.Item key="item3">Охота</Menu.Item>
              <Menu.Item key="item4">Воспоминания</Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ margin: "0" }}>
            <div
              className="layout-background"
              style={{ padding: 0, minHeight: 700 }}
            >
              {componentsSwitch(selectedMenuItem)}
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </>
  );
}

export default Chapters;
