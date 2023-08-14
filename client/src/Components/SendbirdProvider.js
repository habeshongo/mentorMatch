// import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";
import SendbirdbirdProvider from "@sendbird/uikit-react/SendbirdProvider";
// import CustomizedApp from "./CustomizedApp";

import React from "react";

const APP_ID = process.env.REACT_APP_APP_ID;
const USER_ID = process.env.REACT_APP_USER_ID;
const APP_NICKNAME = process.env.REACT_APP_NICKNAME;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const Sendbird = ({ children }) => {
  return (
    <div>
      <SendbirdbirdProvider appId={APP_ID} userId={USER_ID}>
        {children}
      </SendbirdbirdProvider>
    </div>
  );
};

export default Sendbird;
