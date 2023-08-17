import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { RiDashboardLine } from "react-icons/ri";
import {
  MdFastfood,
  MdOutlinePayment,
  MdOutlineGroup,
  MdSettings,
} from "react-icons/md";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const { Sider } = Layout;

const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  return (
    <Sider
      className={`w-96${collapsed ? "collapsed" : ""}   `}
      collapsed={collapsed}
    >
      <Menu
        className="flex h-screen flex-col  gap-16 bg-zinc-500  text-center font-bold "
        theme="light"
        mode="inline"
      >
        {/* Sidebar menu items */}

        <Menu.Item
          className=" "
          style={{
            marginTop: "-30px",
            marginBottom: "150px",
          }}
          onClick={onToggle}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        >
          {" "}
        </Menu.Item>
        <Menu.Item key="1" icon={<RiDashboardLine />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<MdFastfood />}>
          Order
        </Menu.Item>
        <Menu.Item key="3" icon={<MdOutlinePayment />}>
          Payment{" "}
        </Menu.Item>
        <Menu.Item key="4" icon={<MdOutlineGroup />}>
          Customer{" "}
        </Menu.Item>
        <Menu.Item key="5" icon={<MdSettings />}>
          Settings
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
