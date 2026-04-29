# AI Archivist

> AI 对话忠实存档器 · 一键把对话导出为 ZIP，HTML 高保真复刻原网页视觉

**当前支持 ChatGPT**（个人 + 团队空间）。

---

## 这是什么

一个 Tampermonkey / Violentmonkey 用户脚本（单文件、零构建、零依赖、纯本地）。装好后访问 ChatGPT，右下角会出现一颗黑色胶囊按钮"Export Conversations"——点开勾选要导出的对话和格式，几秒钟下载一个 ZIP 包。

## 为什么不用 ChatGPT 自带的导出

官方导出给你一堆 JSON 原始数据，附件、思维链、引用都丢了，自己根本读不下去。AI Archivist 的目标是**保存一份和你在网页上看到的完全一样的对话**：

- ✅ **思维链完整保留** — `Thought for 49s` + 每段思考 + 工具调用步骤 + 访问的所有网站
- ✅ **图片/文件真下载** — AI 生成图、用户上传文件、代码解释器输出文件，都拉到本地 `attachments/` 目录
- ✅ **引用变真链接** — `citeturn605463...` 这种乱码占位符自动还原成 `([来源](URL))`
- ✅ **表格 / 代码块 / 列表** — Markdown 表格识别 + 代码高亮容器，不再是一堆 `|---|---|`
- ✅ **HTML 视觉复刻** — 顶栏 ChatGPT 品牌、用户右对齐胶囊、助手无气泡正文、底部动作栏、右侧滑出 Activity 面板（思维链全文 + 来源 favicon），双击 HTML 直接打开就像在 ChatGPT 网页里
- ✅ **交互齐全** — 复制按钮真的复制 Markdown 源码（保留语法和链接）、小喇叭按钮调浏览器内置 TTS 朗读、Share 按钮把整段对话截成长图 PNG

## 安装

1. 装 [Tampermonkey](https://www.tampermonkey.net/)（Chrome / Edge / Firefox / Safari 都有）
2. 一键安装：[点这里](https://raw.githubusercontent.com/Seemerry/AI-Archivist/main/AIArchivist.user.js)（Tampermonkey 会自动识别 `.user.js` 后缀并弹出安装确认页）
3. 或手动：打开 Tampermonkey 仪表盘 → 创建新脚本，把 [`AIArchivist.user.js`](https://github.com/Seemerry/AI-Archivist/blob/main/AIArchivist.user.js) 全文粘贴进去，`Ctrl + S` 保存
4. 访问 https://chatgpt.com（或 https://chat.openai.com）
5. 等约 2 秒，右下角应该出现一颗黑色胶囊"Export Conversations"按钮

> 不需要 npm install、不需要 build、不需要 Chrome 商店审核。

## 使用

### 导出对话

1. 点右下角的"Export Conversations"按钮（黑色胶囊） → 弹出对话框
2. 选格式（JSON / Markdown / HTML，可多选）
3. 选空间（个人 / 团队），团队会自动检测 Workspace ID
4. 勾选要导出的对话（默认全选，按项目分组）
5. 选择"包含附件"（默认开），会同步下载所有图片/文件到 ZIP
6. 点"开始导出" → 几秒到几分钟（取决于对话数量和附件大小）
7. 自动下载 `chatgpt_personal_backup_2026-04-29.zip` 之类的 ZIP 文件

### 浏览导出

解压 ZIP，结构是这样：

```
chatgpt_personal_backup_xxx.zip
├─ 一个对话_xxx_xxx.html      # 双击直接看（推荐）
├─ 一个对话_xxx_xxx.md         # Markdown 源码
├─ 一个对话_xxx_xxx.json       # 原始 API 响应（含 __local_attachments 索引）
├─ attachments/
│  └─ {conversation_id}/
│     └─ file_xxx.png          # 真实的图片字节
└─ {项目名}/
   ├─ 项目内对话_xxx.html
   └─ attachments/.../
```

打开 `.html` 就能看到完整的对话视图。点 `Thought for 49s ›` 弹出右侧面板浏览思维链；点 `Sources` 看引用来源；点 📋 复制 Markdown 源码；点 🔊 用浏览器 TTS 朗读；点顶栏 Share 把整段对话截成长图 PNG。

### Markdown / JSON 用途

- `.md` — 适合贴到 Notion / Obsidian / VSCode；GitHub 上 `<details>` 折叠的思维块也支持
- `.json` — 原始 API 数据 + `__local_attachments` 字段（`{file_id: {path, name, mime}}`），适合二次处理

## 隐私 & 安全

**数据完全留在你自己的浏览器和本地磁盘内，没有任何向第三方服务器发送的代码路径。**

| 行为 | 走哪里 |
|---|---|
| 抓你账号的对话列表和详情 | chatgpt.com 同源接口（你浏览器本来就能访问） |
| 下载附件文件 | chatgpt.com 同源接口 |
| Token / Cookie / Workspace ID | 只用于构造发回 chatgpt.com 的请求头，**不写任何持久化存储**，捕获到就立即恢复原始 fetch |
| 唯一外部资源 | `cdnjs.cloudflare.com` 上的 JSZip（打包 ZIP）、html2canvas（仅点 Share 时懒加载，截长图） |

代码可审计，全文一千多行，自己 grep 一遍 `fetch(` 看所有请求目标即可。

## 技术架构

- **采集层**：网络拦截 → 拿 Bearer token → 调 `/backend-api/...` 列对话/拉详情/下附件
- **解析层**：把 ChatGPT 的 `mapping` DAG 走平、还原引用、提取思维回合
- **渲染层**：MD / HTML 两种独立渲染器，HTML 自带交互 JS（侧边面板 / 复制 / TTS / 截图）
- **打包层**：JSZip 在浏览器里本地打包下载

## 常见问题

**Q：导出大对话特别慢？**
A：思维型模型对话往往有几十次工具调用 + 几十张访问的网站，每次接口调用之间有 600-1000ms 的礼貌延迟（避免触发 ChatGPT 的反爬）。100 条对话 + 50 张图大约需要 5-10 分钟。

**Q：HTML 里的图片是裂图？**
A：检查 ZIP 解压时是否完整保留了 `attachments/` 文件夹。HTML 用相对路径加载图片，文件夹结构必须完整。

**Q：思维链显示"无可见步骤元数据"？**
A：某些对话 ChatGPT 服务端没保存思维内容（特别是较老的对话），这种情况无解。新生成的 GPT-5 thinking 对话一般都有完整内容。

**Q：Share 截图里的 favicon 是裂图？**
A：截图用 html2canvas，favicon 来自 Google API。如果离线或 CORS 失败会变裂图——主体内容仍然完整。

**Q：朗读机器感太重？**
A：用的是浏览器内置 Web Speech API，质量取决于你 OS 装了什么 TTS 引擎。Windows 可以在 设置 → 时间和语言 → 语音 里下载"中文（中国大陆）— 晓晓 神经网络"获得高质量音色。

## 致谢

本项目最初基于 [zjt666666zjt](https://github.com/zjt666666zjt) 的 [ChatGPT_Exporter](https://github.com/zjt666666zjt/ChatGPT_Exporter)（MIT 许可，原名 *ChatGPT Universal Exporter Enhanced (Fixed)*）重构而来。从原项目沿用并改造的部分：

- `document-start` 阶段拦截 `fetch` / `XMLHttpRequest` 以捕获 Bearer token 和 Workspace ID
- `/backend-api/conversations` 分页拉取、Project (gizmos) cursor 分页、归档对话合并
- `fetchWithRetry`（指数退避 + jitter）+ `buildHeaders` 的请求基础设施
- 三格式（JSON / Markdown / HTML）并行导出 + ZIP 打包的整体骨架

在此基础上 AI Archivist 新增的：

- **附件 / 图片提取** — 通过 `/backend-api/files/download/{file_id}` 拉取用户上传文件、DALL·E 生成图、code-interpreter 输出，并发下载、按对话归档
- **思维链提取** — 从 `reasoning_status` / `content_type: thoughts` / `reasoning_recap` 等元数据复原 GPT-5 thinking、o-series 的推理过程和工具步骤
- **引用解析** — 解析 PUA 占位符 (`-`) 还原对话里的 citation 链接
- **HTML 高保真渲染** — 复刻 ChatGPT 网页 UI（topbar、侧边面板、消息气泡、代码块、表格），不是简单的纯文本导出
- **Markdown 排版重设计** — 用户消息 blockquote 非对称布局、按消息动态显示模型名、ISO 时间格式
- **交互功能** — TTS（Web Speech API）、复制 Markdown 源码（保留语法+引用链接）、长图截屏（html2canvas）
- **工程性补强** — `@updateURL` 自动更新、`@icon` 图标、ChatGPT 风格的胶囊按钮和对话框

感谢原作者把脚本开源——没有那份基础工作，这个项目不会存在。

## 反馈

欢迎 [PR](https://github.com/Seemerry/AI-Archivist/pulls) 或 [issue](https://github.com/Seemerry/AI-Archivist/issues)。

## 许可

[PolyForm Noncommercial 1.0.0](LICENSE) — 允许个人、研究、教育、非营利等非商业用途的使用、修改、分发；商业用途需另行授权。
