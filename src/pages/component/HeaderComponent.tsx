/* eslint-disable @typescript-eslint/no-floating-promises */
import React from "react";
import { Dropdown, Avatar, Menu } from "antd";
import { MdNotifications, MdMessage } from "react-icons/md";
import { useRouter } from "next/router";
import { useUser, useClerk } from "@clerk/nextjs";

const HeaderComponent: React.FC = () => {
  const router = useRouter();
  const { user } = useUser();
  const { signOut } = useClerk();

  const logOutFunction = () => {
    return () => {
      signOut().then(() => {
        router.push("/sign-in");
      });
    };
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <button onClick={logOutFunction()}>Signout</button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="flex items-center justify-between bg-zinc-200">
      <div className="mt-5 flex">
        <img src="/images.png" alt="" className="h-8 w-8 bg-opacity-95" />
        <p className="bold font-bold"> STEAM</p>
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className="flex items-center justify-center gap-2">
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Avatar
              src="/cedric.jpeg"
              className="h-10 w-10 cursor-pointer rounded-full"
            />
          </Dropdown>
          <p>
            {user?.firstName} {user?.lastName}
          </p>
        </div>
        <MdMessage className="h-7 w-7" />
        <MdNotifications className="h-7 w-7" />
      </div>
    </div>
  );
};

export default HeaderComponent;
