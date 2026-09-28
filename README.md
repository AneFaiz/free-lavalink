# 🌊 Nazha Free Lavalink — 4 Public Nodes · 2026 Edition

> 100% Free Lavalink v4 nodes hosted in Singapore + US. No keys needed. Always online.

[![Lavalink v4](https://img.shields.io/badge/Lavalink-4.2.2-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://github.com/lavalink-devs/Lavalink)
[![Uptime 99.9%](https://img.shields.io/badge/Uptime-99.9%25-22c55e?style=for-the-badge)](https://status.nazha.online)
[![Sources 45+](https://img.shields.io/badge/Supported%20Sources-45%2B-22c55e?style=for-the-badge)](https://github.com/lavalink-devs/Lavalink)
[![Nazha Plugin](https://img.shields.io/badge/Plugin-nazha--source--1.0.1-8b5cf6?style=for-the-badge)](https://github.com/topi314/LavaSrc)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)

---

## ⚡ Node Details

| Node | Host | Port | Secure | Password | Region | Load |
|------|------|------|--------|----------|--------|------|
| **Singapore 1** | `sg-1.nazha.online` | `443` | ✅ | `https://discord.gg/XeSCnk57ZF` | 🇸🇬 Singapore | 🟢 |
| **Singapore 2** | `sg-2.nazha.online` | `443` | ✅ | `https://discord.gg/XeSCnk57ZF` | 🇸🇬 Singapore | 🟢 |
| **Singapore 3** | `sg-3.nazha.online` | `443` | ✅ | `https://discord.gg/XeSCnk57ZF` | 🇸🇬 Singapore | 🟢 |
| **Main (Global)** | `lavalink.nazha.online` | `443` | ✅ | `nazhafreelava` | 🌍 US Global | 🟢 |

### ✅ WebSocket / REST endpoint

```
wss://sg-1.nazha.online/            (Lavalink v4)
wss://sg-2.nazha.online/
wss://sg-3.nazha.online/
wss://lavalink.nazha.online/
```

> **Tip:** For Lavalink v4, point your client at `wss://<host>/` (path `/` maps to `/v4/websocket`).

---

## 🎵 Everything you can play

YouTube (4K/8K/Dolby), Spotify, Apple Music, SoundCloud, Deezer, Tidal, Amazon Music, Yandex Music, Gaana, JioSaavn, Pandora, Audiomack, Internet Archive, Napster, Bandcamp, Twitch, Vimeo, Niconico, Newgrounds, Netease, Audius, iHeartRadio, Reddit, TikTok, Instagram, Telegram, Kwai, Pinterest, Google Drive, RSS, Eternalbox, GetYarn, Clyp, Speak, OCRemix, Mixcloud, Soundgasm, local files + **all mirror sources** — 45+ total.

- 🎧 **50s-EOF fixed** — edge-host failover + stable v6 tunneling
- 🧾 **Lyrics** via Lavalink Lyrics plugin (Lrclib / Genius / Deezer / Spotify)
- 🔇 SponsorBlock & DuncteBot plugins pre-installed
- 🎚 All V4 filters: Equalizer, Karaoke, Timescale, Tremolo, Vibrato, Distortion, Rotation, ChannelMix, LowPass

---

## 🚀 Quick Start

### Lavalink-client (TypeScript / JS)

```ts
import { LavalinkManager } from "lavalink-client";

const lavalink = new LavalinkManager({
  nodes: [
    {
      id: "nazha-sg1",
      host: "sg-1.nazha.online",
      port: 443,
      secure: true,
      auth: "https://discord.gg/XeSCnk57ZF",
    },
    {
      id: "nazha-sg2",
      host: "sg-2.nazha.online",
      port: 443,
      secure: true,
      auth: "https://discord.gg/XeSCnk57ZF",
    },
    {
      id: "nazha-sg3",
      host: "sg-3.nazha.online",
      port: 443,
      secure: true,
      auth: "https://discord.gg/XeSCnk57ZF",
    },
    {
      id: "nazha-main",
      host: "lavalink.nazha.online",
      port: 443,
      secure: true,
      auth: "nazhafreelava",
    },
  ],
  sendToShard: (guildId, payload) => client.guilds.cache.get(guildId)?.shard?.send(payload),
});
await lavalink.init(client.user.id);
```

### Wavelink (Python)

```python
import wavelink
from wavelink import NodeConnection, NodeType

node_sg = NodeConnection(
    id="nazha-sg1",
    uri="wss://sg-1.nazha.online",
    password="https://discord.gg/XeSCnk57ZF",
    secure=True,
    type=NodeType.Normal,
)
```

### Shoukaku (JS)

```js
const Shoukaku = require("shoukaku");
const shoukaku = new Shoukaku.Shoukaku(new LavalinkConnectors.DiscordJS(client), [
  {
    name: "Nazha SG1",
    url: "sg-1.nazha.online:443",
    auth: "https://discord.gg/XeSCnk57ZF",
    secure: true,
  },
]);
```

### Erela.js (JS)

```js
const client = new ErelaClient(client, [
  {
    host: "sg-1.nazha.online",
    port: 443,
    password: "https://discord.gg/XeSCnk57ZF",
    secure: true,
  },
]);
```

---

## 🔎 Search examples

- YouTube: `ytsearch:Daft Punk Get Lucky` or just `Daft Punk Get Lucky`
- Spotify: `spsearch:never gonna give you up` / `spsearch:spotify:track:...`
- Apple Music: `amsearch:...` · Deezer: `dzsearch:...` · Tidal: `tidal:...`
- SoundCloud: `scsearch:...` · Bandcamp: `bcsearch:...`

---

## ❓ FAQ

**Is this really free?** Yes — all 4 nodes are community-funded public nodes. We only ask that you keep usage reasonable (no 24/7 4K streaming farms).

**Rate limits?** ~1500s total playtime per user per day per node, then rotate to another node.

**Does `/v4/loadtracks` work?** Yes, full REST API is available on the same host + password.

**How do I get an unrotated / reserved node?** Join the Discord (the password itself is our Discord invite) — we offer priority nodes for active members.

---

## ⚠️ Fair-use notice

These are real production nodes. Abuse (looped streams, huge uploads, scanning `#ext-m3u` torrents/spam) will get your IP temp-blocked. Please join our community and report downtime — thank you for keeping the network healthy! 🫶

---

## 📜 License

Everything in this repo is under the [MIT License](LICENSE). The nodes themselves are operated by Independent community members and provided "as is", without warranty.

---

<p align="center">
  <b>Made with 💜 for the open-source Discord music community<br>Started 2026 · Lavalink v4 · 45+ sources · 4 nodes</b>
</p>