import React from "react";

import { Flex } from "./styles";

const Layout = (props) => {
  return <Flex>{props.children}</Flex>;
};

export default Layout;
