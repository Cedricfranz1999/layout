import React, { ReactNode, useState } from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import HeaderComponent from "./HeaderComponent";

interface Props {
  children: ReactNode;
}

const { Content, Footer } = Layout;

const Layouts: React.FC<Props> = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className=" min-h-screen">
      <Layout className="  min-h-screen   ">
        <Sidebar collapsed={collapsed} onToggle={toggleSidebar} />
        <Layout>
          <HeaderComponent />
          <Content className="flex items-center  justify-center bg-zinc-100 p-20 ">
            {children}
          </Content>
          <Footer style={{ background: "gray", textAlign: "center" }}>
            {/* Footer content */}
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Layouts;
