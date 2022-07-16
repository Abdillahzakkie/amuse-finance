import React, { memo } from "react";
import { MyAccountWrapper } from "./style";

function MyAccount() {
	return <MyAccountWrapper className="grid">MyAccount</MyAccountWrapper>;
}

export default memo(MyAccount);
