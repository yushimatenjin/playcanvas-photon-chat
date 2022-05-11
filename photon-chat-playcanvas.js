class PhotonChatPlayCanvas extends pc.ScriptType {
  initialize() {
    const options = {
      app: this.app,
      appId: this.appId,
      appVersion: this.appVersion,
      wss: this.wss ? 1 : 0,
    };

    this.app.chat = new ChatClient(options);
  }
}

pc.registerScript(PhotonChatPlayCanvas);
// LoadBalancing options
PhotonChatPlayCanvas.attributes.add("appId", { type: "string" });
PhotonChatPlayCanvas.attributes.add("appVersion", {
  type: "string",
  default: "1.0",
});

PhotonChatPlayCanvas.attributes.add("wss", { type: "boolean", default: true });

// Photon realtime options
PhotonChatPlayCanvas.attributes.add("region", {
  type: "string",
  default: "asia",
  description:
    "Photon Cloud has servers in several regions, distributed across multiple hosting centers over the world.You can choose optimized region for you.",
  enum: [
    { "Select Region": "default" },
    { "Asia, Singapore": "asia" },
    { "Europe, Amsterdam": "eu" },
  ],
});

// Room options
PhotonChatPlayCanvas.attributes.add("roomName", {
  type: "string",
  default: "room",
});
