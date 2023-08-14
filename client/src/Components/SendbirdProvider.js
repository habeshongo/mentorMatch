// import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";
import SendbirdbirdProvider from "@sendbird/uikit-react/SendbirdProvider";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import React from "react";
import { getProfile } from "../services/api";

const APP_ID = process.env.REACT_APP_APP_ID;

const Sendbird = ({ children }) => {
  const { user, isLoading: isAuthLoading } = useAuth0();
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(user),
    enabled: !!user,
  });
  // return <>Hello</>;
  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  return (
    <>
      {data && user && data.user && (
        <SendbirdbirdProvider appId={APP_ID} userId={String(data.user.id)}>
          {children}
        </SendbirdbirdProvider>
      )}
    </>
  );
};

export default Sendbird;
