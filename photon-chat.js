class ChatClient extends Photon.Chat.ChatClient {
  constructor(props) {
    // Photon Settings
    const wss = props.wss;
    const appId = props.appId;
    const appVersion = props.appVersion;
    super(wss, appId, appVersion);

    // pc.Application
    this.app = props.app;
  }
  onChatMessages(channelName, messages) {}
  onPrivateMessage(channelName, message) {}
  onStateChange(state) {}
  onSubscribeResult(results) {}
  onUnsubscribeResult(results) {}
  onUserStatusUpdate(userId, status, gotMessage, statusMessage) {}
  onUserSubscribe(channelName, userId) {}
  onUserUnsubscribe(channelName, userId) {}
}
