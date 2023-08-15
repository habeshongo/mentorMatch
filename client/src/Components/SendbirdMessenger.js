import React, { useState } from "react";
import NavBar from "./Navbar";
import { Channel, ChannelList, ChannelSettings } from "@sendbird/uikit-react";

const SendbirdMessenger = () => {
  const [currentChannel, setCurrentChannel] = React.useState(null);
  const currentChannelUrl = currentChannel ? currentChannel.url : "";
  const [showSettings, setShowSettings] = React.useState(false);

  const channelChatDiv = document.getElementsByClassName("channel-chat")[0];

  const renderSettingsBar = () => {
    channelChatDiv.style.width = "52%";
    channelChatDiv.style.cssFloat = "left";
  };

  const hideSettingsBar = () => {
    channelChatDiv.style.width = "76%";
    channelChatDiv.style.cssFloat = "none";
  };
  return (
    <div>
      <NavBar /> 
    <div className="channel-wrap">
      <div className="channel-list">
        <ChannelList
          onChannelSelect={(channel) => {
            setCurrentChannel(channel);
          }}
        />
      </div>
      <div className="channel-chat">
        <Channel
          channelUrl={currentChannelUrl}
          onChatHeaderActionClick={() => {
            setShowSettings(!showSettings);
            renderSettingsBar();
          }}
        />
      </div>
      {showSettings && (
        <div className="channel-settings">
          <ChannelSettings
            channelUrl={currentChannelUrl}
            onCloseClick={() => {
              setShowSettings(false);
              hideSettingsBar();
            }}
          />
        </div>
      )}
    </div>
    
      </div> 
)};

export default SendbirdMessenger;
