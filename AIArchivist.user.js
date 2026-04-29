// ==UserScript==
// @name         AI Archivist
// @namespace    https://github.com/Seemerry/AI-Archivist
// @version      1.0.1
// @description  AI 对话忠实存档器 · 把 ChatGPT 对话（含思维链 / 引用 / 附件 / 工具调用）导出为 ZIP，HTML 高保真复刻原网页视觉，支持朗读、复制 Markdown 源码、长图截屏。
// @author       Seemerry
// @homepageURL  https://github.com/Seemerry/AI-Archivist
// @supportURL   https://github.com/Seemerry/AI-Archivist/issues
// @updateURL    https://raw.githubusercontent.com/Seemerry/AI-Archivist/main/AIArchivist.user.js
// @downloadURL  https://raw.githubusercontent.com/Seemerry/AI-Archivist/main/AIArchivist.user.js
// @icon         data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJiZyIgeDE9IjE2OCIgeTE9IjEwNiIgeDI9Ijg1NiIgeTI9IjkxOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDkwQjI2Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC41NSIgc3RvcC1jb2xvcj0iIzA3MDkxRSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxMjBBMkYiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InJpbmciIHgxPSIyNTAiIHkxPSI3NDIiIHgyPSI3NzQiIHkyPSIyODIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM5RDZGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNDgiIHN0b3AtY29sb3I9IiM1QjdDRkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQTg1QkZGIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0ic29mdEdsb3ciIHg9IjE3MCIgeT0iMTcwIiB3aWR0aD0iNjg0IiBoZWlnaHQ9IjY4NCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgogICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI4IiByZXN1bHQ9ImJsdXIiLz4KICAgICAgPGZlQ29sb3JNYXRyaXggaW49ImJsdXIiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuMjQgMCAwIDAgMCAwLjcyIDAgMCAwIDAgMSAwIDAgMCAwLjYgMCIvPgogICAgICA8ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgbW9kZT0ic2NyZWVuIi8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CgogIDwhLS0gQXBwIGljb24gYmFja2dyb3VuZCAtLT4KICA8cmVjdCB4PSI2NCIgeT0iNjQiIHdpZHRoPSI4OTYiIGhlaWdodD0iODk2IiByeD0iMjA4IiBmaWxsPSJ1cmwoI2JnKSIvPgoKICA8IS0tIEVjaG8gcmluZyBzeW1ib2wgLS0+CiAgPGcgZmlsdGVyPSJ1cmwoI3NvZnRHbG93KSIgc3Ryb2tlPSJ1cmwoI3JpbmcpIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgPCEtLSBNYWluIG9wZW4gcmluZyAtLT4KICAgIDxwYXRoIGQ9Ik03MzUgNjM1QzY5MiA3NDMgNTg3IDgxNCA0NzEgNzk4QzMyMyA3NzcgMjE5IDY0MCAyNDAgNDkyQzI2MSAzNDQgMzk4IDI0MCA1NDYgMjYxQzY3MiAyNzkgNzY2IDM4MyA3NzggNTA3IiBzdHJva2Utd2lkdGg9IjU2Ii8+CgogICAgPCEtLSBJbm5lciByaW5nIC8gbWVtb3J5IGNvcmUgLS0+CiAgICA8Y2lyY2xlIGN4PSI1MTIiIGN5PSI1MTIiIHI9IjQ2IiBzdHJva2Utd2lkdGg9IjQyIi8+CgogICAgPCEtLSBVcHBlci1yaWdodCBlY2hvIGFyY3MgLS0+CiAgICA8cGF0aCBkPSJNNzYxIDI3MUM4MTggMzA2IDg1OCAzNjMgODcyIDQyOSIgc3Ryb2tlLXdpZHRoPSIyOCIvPgogICAgPHBhdGggZD0iTTc1MCAzNDhDNzgyIDM3MSA4MDQgNDA3IDgxMiA0NDkiIHN0cm9rZS13aWR0aD0iMjgiLz4KCiAgICA8IS0tIExvd2VyLWxlZnQgZWNobyBhcmNzIC0tPgogICAgPHBhdGggZD0iTTI2MyA3NTNDMjA2IDcxOCAxNjYgNjYxIDE1MiA1OTUiIHN0cm9rZS13aWR0aD0iMjgiLz4KICAgIDxwYXRoIGQ9Ik0yNzQgNjc2QzI0MiA2NTMgMjIwIDYxNyAyMTIgNTc1IiBzdHJva2Utd2lkdGg9IjI4Ii8+CiAgPC9nPgo8L3N2Zz4K
// @match        https://chatgpt.com/*
// @match        https://chat.openai.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js
// @grant        none
// @license      PolyForm-Noncommercial-1.0.0
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    // --- 配置与全局变量 Config & globals ---
    const BASE_DELAY = 600;
    const JITTER = 400;
    const PAGE_LIMIT = 100;
    let accessToken = null;
    let capturedWorkspaceIds = new Set();
    let stopNetworkIntercept = () => {};
    let interceptStopped = false;

    // 导出格式配置 Export formats
    let exportFormats = { json: true, markdown: true, html: true };

    // 安全恢复拦截，防止长期劫持 fetch 影响正常聊天
    function maybeStopIntercept() {
        if (interceptStopped) return;
        interceptStopped = true;
        try { stopNetworkIntercept(); } catch (_) {}
    }

    // --- 网络拦截与信息捕获 Network intercept (minimal & safe) ---
    (function interceptNetwork() {
        const rawFetch = window.fetch;
        const rawOpen = XMLHttpRequest.prototype.open;
        stopNetworkIntercept = () => {
            window.fetch = rawFetch;
            XMLHttpRequest.prototype.open = rawOpen;
        };
        function isSameOriginResource(res) {
            try {
                const url = typeof res === 'string' ? new URL(res, location.href) : new URL(res.url, location.href);
                return url.origin === location.origin;
            } catch (_) { return true; }
        }
        function getHeaderValueFromAny(hLike, name) {
            if (!hLike) return null;
            try {
                if (hLike instanceof Headers) return hLike.get(name) || hLike.get(name.toLowerCase());
                if (Array.isArray(hLike)) {
                    const found = hLike.find(p => Array.isArray(p) && (String(p[0]).toLowerCase() === name.toLowerCase()));
                    return found ? found[1] : null;
                }
                if (typeof hLike === 'object') return hLike[name] || hLike[name.toLowerCase()] || null;
                if (typeof hLike === 'string' && name.toLowerCase() === 'authorization') return hLike;
            } catch (_) {}
            return null;
        }
        window.fetch = function(resource, options) {
            try {
                if (isSameOriginResource(resource)) {
                    const headerCandidates = [];
                    if (resource && typeof Request !== 'undefined' && resource instanceof Request) {
                        headerCandidates.push(resource.headers);
                    }
                    if (options && options.headers) {
                        headerCandidates.push(options.headers);
                    }
                    for (const hc of headerCandidates) {
                        tryCaptureToken(getHeaderValueFromAny(hc, 'Authorization'));
                        const wid = getHeaderValueFromAny(hc, 'ChatGPT-Account-Id');
                        if (wid && !capturedWorkspaceIds.has(wid)) {
                            capturedWorkspaceIds.add(wid);
                            try { console.log('🎯 [Fetch] 捕获 Workspace ID:', wid); } catch(_){}
                        }
                    }
                }
            } catch (_) {}
            return rawFetch.apply(this, arguments);
        };

        XMLHttpRequest.prototype.open = function () {
            this.addEventListener('readystatechange', () => {
                if (this.readyState === 4) {
                    try {
                        const auth = this.getRequestHeader && this.getRequestHeader('Authorization');
                        tryCaptureToken(auth);
                        const id = this.getRequestHeader && this.getRequestHeader('ChatGPT-Account-Id');
                        if (id && !capturedWorkspaceIds.has(id)) {
                            capturedWorkspaceIds.add(id);
                            try { console.log('🎯 [XHR] 捕获 Workspace ID:', id); } catch(_){}
                        }
                    } catch (_) {}
                }
            });
            return rawOpen.apply(this, arguments);
        };
    })();

    function tryCaptureToken(headerLike) {
        let h = null;
        try {
            if (!headerLike) { h = null; }
            else if (typeof headerLike === 'string') { h = headerLike; }
            else if (headerLike instanceof Headers) { h = headerLike.get('Authorization') || headerLike.get('authorization'); }
            else if (Array.isArray(headerLike)) {
                const found = headerLike.find(e => Array.isArray(e) && String(e[0]).toLowerCase() === 'authorization');
                h = found ? found[1] : null;
            } else if (typeof headerLike === 'object') {
                h = headerLike.Authorization || headerLike.authorization || null;
            }
        } catch (_) {}
        if (h && /^Bearer\s+(.+)/i.test(h)) {
            const token = h.replace(/^Bearer\s+/i, '');
            if (token && token.toLowerCase() !== 'dummy') {
                accessToken = token;
                maybeStopIntercept();
            }
        }
    }

    async function ensureAccessToken() {
        if (accessToken) return accessToken;
        try {
            const session = await (await fetch('/api/auth/session?unstable_client=true')).json();
            if (session.accessToken) {
                accessToken = session.accessToken;
                maybeStopIntercept();
                return accessToken;
            }
        } catch (_) {}
        alert('无法获取 Access Token。请刷新页面或打开任意一个对话后再试。');
        return null;
    }

    // --- 辅助函数 Helpers ---
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const jitter = () => BASE_DELAY + Math.random() * JITTER;
    const sanitizeFilename = (name) => name.replace(/[\/\\?%*:|"<>]/g, '-').trim();

    function getOaiDeviceId() {
        const cookieString = document.cookie;
        const match = cookieString.match(/oai-did=([^;]+)/);
        return match ? match[1] : null;
    }

    async function fetchWithRetry(input, init = {}, retries = 3) {
        let attempt = 0;
        while (true) {
            try {
                const res = await fetch(input, init);
                if (res.ok) return res;
                if (attempt < retries && (res.status === 429 || res.status >= 500)) {
                    await sleep(BASE_DELAY * Math.pow(2, attempt) + Math.random() * JITTER);
                    attempt++;
                    continue;
                }
                return res;
            } catch (err) {
                if (attempt < retries) {
                    await sleep(BASE_DELAY * Math.pow(2, attempt) + Math.random() * JITTER);
                    attempt++;
                    continue;
                }
                throw err;
            }
        }
    }

    function buildHeaders(workspaceId) {
        const headers = { 'Authorization': `Bearer ${accessToken}` };
        const did = getOaiDeviceId();
        if (did) headers['oai-device-id'] = did;
        if (workspaceId) headers['ChatGPT-Account-Id'] = workspaceId;
        return headers;
    }

    function generateUniqueFilename(convData, extension = 'json') {
        const convId = String(convData.conversation_id || '').trim();
        const idPart = convId || Math.random().toString(36).slice(2, 10);
        const ts = convData.create_time ? new Date(convData.create_time * 1000) : new Date();
        const tsPart = `${ts.getFullYear()}${String(ts.getMonth() + 1).padStart(2, '0')}${String(ts.getDate()).padStart(2, '0')}_${String(ts.getHours()).padStart(2, '0')}${String(ts.getMinutes()).padStart(2, '0')}${String(ts.getSeconds()).padStart(2, '0')}`;
        let baseName = convData.title;
        if (!baseName || baseName.trim().toLowerCase() === 'new chat') {
            baseName = 'Untitled Conversation';
        }
        return `${sanitizeFilename(baseName)}_${idPart}_${tsPart}.${extension}`;
    }

    function downloadFile(blob, filename) {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);
    }

    // --- 附件助手 Asset helpers ---
    const MIME_TO_EXT = {
        // 图像
        'image/png': 'png', 'image/jpeg': 'jpg', 'image/jpg': 'jpg',
        'image/webp': 'webp', 'image/gif': 'gif', 'image/svg+xml': 'svg',
        'image/bmp': 'bmp', 'image/heic': 'heic', 'image/heif': 'heif',
        'image/avif': 'avif', 'image/tiff': 'tiff',
        // 办公文档
        'application/pdf': 'pdf',
        'application/msword': 'doc',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
        'application/vnd.ms-excel': 'xls',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
        'application/vnd.ms-powerpoint': 'ppt',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
        'application/vnd.oasis.opendocument.text': 'odt',
        'application/rtf': 'rtf', 'application/x-tex': 'tex',
        // 文本 / 代码
        'text/plain': 'txt', 'text/csv': 'csv', 'text/markdown': 'md', 'text/html': 'html',
        'text/xml': 'xml', 'application/xml': 'xml',
        'text/javascript': 'js', 'application/javascript': 'js',
        'application/typescript': 'ts', 'text/x-typescript': 'ts',
        'text/x-python': 'py', 'application/x-python-code': 'py',
        'text/x-c': 'c', 'text/x-c++': 'cpp', 'text/x-java-source': 'java',
        'text/x-go': 'go', 'text/x-rust': 'rs', 'text/x-ruby': 'rb', 'text/x-php': 'php',
        'text/x-shellscript': 'sh', 'application/x-yaml': 'yaml', 'text/yaml': 'yaml',
        'text/x-toml': 'toml',
        // 数据 / 通用
        'application/json': 'json',
        'application/octet-stream': 'bin',
        // 压缩
        'application/zip': 'zip', 'application/x-tar': 'tar', 'application/gzip': 'gz',
        'application/x-7z-compressed': '7z', 'application/x-rar-compressed': 'rar',
        'application/x-bzip2': 'bz2',
        // 音频 / 视频
        'audio/mpeg': 'mp3', 'audio/wav': 'wav', 'audio/ogg': 'ogg', 'audio/webm': 'weba',
        'audio/flac': 'flac', 'audio/aac': 'aac', 'audio/mp4': 'm4a',
        'video/mp4': 'mp4', 'video/webm': 'webm', 'video/quicktime': 'mov',
        'video/x-matroska': 'mkv', 'video/x-msvideo': 'avi'
    };
    function extractFileId(pointer) {
        if (!pointer || typeof pointer !== 'string') return null;
        // 去掉 file-service:// / sediment:// 等协议头
        const stripped = pointer.replace(/^[a-z][a-z0-9+.-]*:\/\//i, '');
        const m = stripped.match(/(file[-_][A-Za-z0-9_-]+)/);
        return m ? m[1] : null;
    }
    function pickExtension(mime, fileName) {
        const m = (mime || '').toLowerCase();
        if (MIME_TO_EXT[m]) return MIME_TO_EXT[m];
        if (fileName) {
            const dot = fileName.match(/\.([A-Za-z0-9]{1,8})$/);
            if (dot) return dot[1].toLowerCase();
        }
        if (m.startsWith('image/')) return (m.split('/')[1] || 'img').replace(/[^a-z0-9]/g, '') || 'img';
        return 'bin';
    }
    function isImageMime(mime) { return !!mime && /^image\//i.test(mime); }

    // --- 引用渲染 Citation rendering ---
    // ChatGPT 在原文里用 Private Use Area 字符包裹引用占位符：
    //   U+E200 ... U+E202 ... U+E201
    // 真实数据藏在 message.metadata.content_references[] 里，需要把 matched_text 替换成 markdown 链接。
    function buildCitationReplacement(ref) {
        // 前端已经预渲染好 markdown 形式的 alt 字段，例如 "([DeepSeek](https://www.deepseek.com/...))"
        const alt = ref && ref.alt;
        if (alt && typeof alt === 'string' && alt.trim()) return ' ' + alt.trim();
        // fallback: 用 items[].url + attribution 自拼
        const items = (ref && Array.isArray(ref.items)) ? ref.items.filter(it => it && it.url) : [];
        const fmt = it => `[${(it.attribution || it.title || 'source').replace(/[\[\]]/g, '')}](${it.url})`;
        if (items.length === 1) return ' (' + fmt(items[0]) + ')';
        if (items.length > 1) return ' (' + items.map(fmt).join(', ') + ')';
        // 再 fallback 到 safe_urls
        const urls = (ref && Array.isArray(ref.safe_urls)) ? ref.safe_urls.filter(u => u && /^https?:/i.test(u)) : [];
        if (!urls.length) return '';
        const fmtUrl = u => { try { return `[${new URL(u).hostname}](${u})`; } catch (_) { return `<${u}>`; } };
        if (urls.length === 1) return ' (' + fmtUrl(urls[0]) + ')';
        return ' (' + urls.map(fmtUrl).join(', ') + ')';
    }
    // --- 思维链摘要 Thinking summary ---
    // ChatGPT 接口默认不下发模型的原始思维段落（OpenAI 出于安全考虑隐藏），但下发了"思考元数据"：
    //   - 思考用了多久 (reasoning_recap.content)
    //   - 调用工具的步骤标题 (metadata.reasoning_title)
    //   - 搜索关键词 (metadata.search_model_queries.queries)
    //   - 访问的网址列表 (metadata.search_result_groups[].entries[])
    // 一次"思考回合"由 reasoning_status=is_reasoning 开始、reasoning_recap 结束。
    function extractThinkingTurns(mapping) {
        const ordered = [];
        for (const key in mapping) {
            const node = mapping[key];
            const m = node && node.message;
            if (m) ordered.push(m);
        }
        ordered.sort((a, b) => (a.create_time || 0) - (b.create_time || 0));

        const turns = [];
        let cur = null;
        for (const m of ordered) {
            const md = m.metadata || {};
            const c = m.content || {};
            if (md.reasoning_status === 'is_reasoning' && !cur) {
                cur = {
                    startTime: md.reasoning_start_time || m.create_time || null,
                    endTime: null,
                    durationText: '',
                    durationSec: null,
                    events: [],          // 时间序事件列表，混合 step / thought 两种类型
                    _stepIdx: new Map(), // title → step event ref（用于跨消息合并同一标题的查询/结果）
                    _segSeen: new Set()
                };
            }
            if (cur) {
                // 工具调用步骤：metadata.reasoning_title 出现就 emit 一个 step event（同 title 复用）
                const title = md.reasoning_title;
                if (title) {
                    let step = cur._stepIdx.get(title);
                    if (!step) {
                        step = { type: 'step', title, queries: [], results: [] };
                        cur.events.push(step);
                        cur._stepIdx.set(title, step);
                    }
                    const smq = md.search_model_queries;
                    if (smq && Array.isArray(smq.queries)) {
                        smq.queries.forEach(q => { if (q && step.queries.indexOf(q) === -1) step.queries.push(q); });
                    }
                    const srg = md.search_result_groups;
                    if (Array.isArray(srg)) {
                        srg.forEach(g => {
                            const entries = (g && Array.isArray(g.entries)) ? g.entries : [];
                            entries.forEach(e => {
                                if (e && e.url && !step.results.some(r => r.url === e.url)) {
                                    step.results.push({
                                        domain: (g && g.domain) || '',
                                        url: e.url,
                                        title: e.title || '',
                                        snippet: e.snippet || ''
                                    });
                                }
                            });
                        });
                    }
                }
                // 思维段落：content_type=thoughts 消息的 thoughts[] 每项 emit 一个 thought event
                if (c.content_type === 'thoughts' && Array.isArray(c.thoughts)) {
                    c.thoughts.forEach(th => {
                        if (!th || typeof th !== 'object') return;
                        const summary = (th.summary || '').toString().trim();
                        const content = (th.content || '').toString().trim();
                        if (!summary && !content) return;
                        const key = summary + '||' + content.slice(0, 80);
                        if (cur._segSeen.has(key)) return;
                        cur._segSeen.add(key);
                        cur.events.push({ type: 'thought', summary, content });
                    });
                }
            }
            if (c.content_type === 'reasoning_recap' && cur) {
                cur.endTime = m.create_time || null;
                cur.durationText = String(c.content || '').trim();
                cur.durationSec = (typeof md.finished_duration_sec === 'number') ? md.finished_duration_sec : null;
                delete cur._stepIdx;
                delete cur._segSeen;
                turns.push(cur);
                cur = null;
            }
        }
        if (cur) { delete cur._stepIdx; delete cur._segSeen; turns.push(cur); }
        return turns;
    }

    // 把思维回合附着到对应 assistant 消息（紧随 turn.startTime 之后的第一条 assistant）。
    // 注意：reasoning_recap 的 createTime 通常比 final assistant text 还晚 0.5~2s（事后补记），
    // 所以 boundary 必须用 startTime 而不是 endTime，否则会找不到归属。
    function attachThinkingToMessages(messages, turns) {
        if (!turns.length) return;
        let i = 0;
        for (const m of messages) {
            if (i >= turns.length) break;
            if (m.role !== 'assistant') continue;
            const t = turns[i];
            const boundary = t.startTime || t.endTime || 0;
            if ((m.createTime || 0) >= boundary) {
                m.thinking = t;
                i++;
            }
        }
    }

    function applyContentReferences(text, contentReferences) {
        if (!text) return text || '';
        let result = String(text);
        if (Array.isArray(contentReferences) && contentReferences.length) {
            for (const ref of contentReferences) {
                const matched = ref && ref.matched_text;
                if (!matched || typeof matched !== 'string') continue;
                if (result.indexOf(matched) === -1) continue;
                result = result.split(matched).join(buildCitationReplacement(ref));
            }
        }
        // 清理任何残留的 PUA 标记字符 (U+E200..U+E2FF)，避免漏网的 cite token 在导出里残留乱码
        result = result.replace(new RegExp('[\\uE200-\\uE2FF]', 'g'), '');
        return result;
    }

    function thinkingDurationLabel(thinking) {
        if (thinking.durationText) return thinking.durationText;
        if (typeof thinking.durationSec === 'number') return `Thought for ${thinking.durationSec}s`;
        return 'Thought';
    }

    function renderThinkingMarkdown(thinking) {
        if (!thinking) return '';
        const events = thinking.events || [];
        const segs = events.filter(e => e.type === 'thought');
        const steps = events.filter(e => e.type === 'step');
        const labelBits = [thinkingDurationLabel(thinking)];
        if (segs.length) labelBits.push(`${segs.length} 段思考`);
        if (steps.length) labelBits.push(`${steps.length} 个工具步骤`);
        const label = '💭 ' + labelBits.join(' · ');

        if (!segs.length && !steps.length) {
            return `<details><summary>${label}</summary></details>\n\n`;
        }

        // 关键：<details> 内部全部用 HTML 写，避免 markdown 解析器在空行处中断 type 6 HTML 块。
        // 不能掺 markdown 语法（**bold** / [link](url) / list 等），全部 HTML 标签。
        const esc = (s) => String(s == null ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

        let body = '';
        if (segs.length) {
            body += '<div>';
            segs.forEach(seg => {
                if (seg.summary) body += `<p><strong>${esc(seg.summary)}</strong></p>`;
                if (seg.content) {
                    const lines = seg.content.split('\n').map(l => esc(l)).join('<br>');
                    body += `<blockquote>${lines}</blockquote>`;
                }
            });
            body += '</div>';
        }
        if (steps.length) {
            if (segs.length) body += '<hr>';
            body += '<ol>';
            steps.forEach(step => {
                body += `<li><strong>${esc(step.title || '未命名步骤')}</strong>`;
                const queries = step.queries || [];
                const results = step.results || [];
                if (queries.length || results.length) {
                    body += '<ul>';
                    queries.forEach(q => {
                        body += `<li>🔍 <code>${esc(q)}</code></li>`;
                    });
                    // 完整 URL 列表：每条独立一项，含 title + domain
                    results.forEach(r => {
                        const title = esc(r.title || r.url);
                        const dom = r.domain ? ` — ${esc(r.domain)}` : '';
                        body += `<li>🌐 <a href="${esc(r.url)}">${title}</a>${dom}</li>`;
                    });
                    body += '</ul>';
                }
                body += '</li>';
            });
            body += '</ol>';
        }
        // 整个 <details> 写成单行，杜绝任何空行触发 markdown 块中断
        return `<details><summary>${label}</summary>${body}</details>\n\n`;
    }

    // --- Conversation parsing (full mapping sorted by time) ---
    function parseConversation(convData) {
        const mapping = convData.mapping || {};
        const allMsgs = [];
        for (const key in mapping) {
            const node = mapping[key];
            const message = node && node.message;
            if (!message || !message.content) continue;
            const role = message.author && message.author.role;
            // tool 角色也要进来 —— 图像生成等工具返回的图片就挂在 tool 消息里
            if (role !== 'user' && role !== 'assistant' && role !== 'tool') continue;

            // parts 是混合数组：字符串是文本，对象通常是图片等资源引用
            const parts = Array.isArray(message.content.parts) ? message.content.parts : [];
            const stringParts = parts.filter(p => typeof p === 'string');
            const objectParts = parts.filter(p => p && typeof p === 'object');
            // tool 消息的文本通常是工具内部 JSON / 状态，对用户没有意义，强制清空
            const content = (role === 'tool') ? '' : stringParts.join('\n');

            const attachments = [];
            const seen = new Set();
            const pushAtt = (att) => {
                if (!att || !att.fileId || seen.has(att.fileId)) return;
                seen.add(att.fileId);
                attachments.push(att);
            };

            // 用户上传的任意类型文件（PDF / 代码 / 表格 / 音视频...）都挂在 metadata.attachments 上
            const metaAtts = (message.metadata && Array.isArray(message.metadata.attachments)) ? message.metadata.attachments : [];
            metaAtts.forEach(att => {
                if (!att) return;
                pushAtt({
                    fileId: att.id || att.file_id || att.fileId,
                    name: att.name || att.file_name || att.fileName || '',
                    mime: att.mime_type || att.mimeType || att.content_type || '',
                    width: att.width || null,
                    height: att.height || null,
                    source: 'metadata'
                });
            });

            // 内嵌资源（图像生成、tool 返回图片等）出现在 parts 的对象元素里
            objectParts.forEach(p => {
                const pointer = p.asset_pointer || (p.metadata && p.metadata.asset_pointer);
                const fileId = extractFileId(pointer);
                if (!fileId) return;
                pushAtt({
                    fileId,
                    name: (p.metadata && p.metadata.name) || '',
                    mime: p.mime_type || '',
                    width: p.width || null,
                    height: p.height || null,
                    source: 'parts',
                    contentType: p.content_type || ''
                });
            });

            if (!content.trim() && attachments.length === 0) continue;

            // 引用占位符（如 citeturnXXX）的真实数据藏在这里，渲染器出文本时替换为真正的 markdown 链接
            const contentReferences = (message.metadata && Array.isArray(message.metadata.content_references)) ? message.metadata.content_references : [];

            allMsgs.push({
                role,
                content,
                attachments,
                contentReferences,
                createTime: message.create_time,
                model: (message.metadata && message.metadata.model_slug) || ''
            });
        }
        allMsgs.sort((a, b) => (a.createTime || 0) - (b.createTime || 0));

        // tool 消息一律转成一条"仅含附件"的 assistant，保留原时间戳。
        // 这样图像生成流程在导出里呈现为：User 提示 → Assistant 出图 → (可选) Assistant 总结文本。
        const messages = allMsgs.map(m => {
            if (m.role !== 'tool') return m;
            return { role: 'assistant', content: '', attachments: m.attachments, contentReferences: [], createTime: m.createTime, model: m.model || '' };
        });

        // 提取每次 thinking 回合并挂到对应的 assistant 消息上
        attachThinkingToMessages(messages, extractThinkingTurns(mapping));

        return {
            title: convData.title || 'Untitled Conversation',
            createTime: convData.create_time,
            updateTime: convData.update_time,
            conversationId: convData.conversation_id,
            model: convData.default_model_slug || '',
            messages
        };
    }

    // --- 模型 slug → 显示名 ---
    // 把 ChatGPT 后端用的 model_slug 转换成人类可读的展示名。
    // 用于 MD / HTML 渲染中 assistant 消息的角色标签，让导出文件能体现实际使用的模型。
    //
    // 设计：以模式匹配为主、显式映射为补充。当前 ChatGPT 主力模型（GPT-5.3/5.4/5.5
    // 系列的 Instant/Thinking/Pro/mini 变体，以及 o-series）由下方两段正则自动处理，
    // 不需要逐个登记。direct 表只用于 regex 处理不对、或语义需特殊还原的 slug：
    //   - 路由器（auto） → 显示为通用 "ChatGPT"
    //   - 图像生成 → "gpt-image-2" 走 regex 会变成 "GPT-image 2"，需显式映射
    //   - 历史/将退役模型 → 归档老对话时仍可能遇到，保留以免显示成 ChatGPT
    function modelDisplayName(slug) {
        if (!slug) return 'ChatGPT';
        const s = String(slug).toLowerCase().trim();
        const direct = {
            'auto': 'ChatGPT',

            // 图像生成模型（DALL·E 2/3 于 2026-05-12 在 ChatGPT 关停，此后均为 GPT Image）
            'gpt-image-2': 'GPT Image 2',
            'gpt-image-1': 'GPT Image 1',

            // 历史 / 已退役 —— 归档老对话时可能遇到
            'dall-e-3': 'DALL·E 3',
            'dall-e-2': 'DALL·E 2',
            'text-davinci-002-render-sha': 'GPT-3.5',
            'text-davinci-002-render': 'GPT-3.5'
        };
        if (direct[s]) return direct[s];
        // gpt-* 家族：gpt-5-5-thinking → GPT-5.5 Thinking, gpt-5-3-instant → GPT-5.3 Instant,
        // gpt-5-5-pro → GPT-5.5 Pro, gpt-5-4-thinking-mini → GPT-5.4 Thinking mini, ...
        const gptMatch = /^gpt-(.+)$/.exec(s);
        if (gptMatch) {
            let rest = gptMatch[1].replace(/-canmore$/, '');
            // 5-5 → 5.5（ChatGPT slug 用连字符表示版本号小数点）
            rest = rest.replace(/^(\d+)-(\d+)(-|$)/, '$1.$2$3');
            const parts = rest.split('-');
            const first = parts.shift();
            const tail = parts.map(p => {
                if (p === 'mini') return 'mini';
                if (p === 'pro') return 'Pro';
                if (p === 'high') return 'high';
                if (p === 'thinking') return 'Thinking';
                if (p === 'instant') return 'Instant';
                if (p === 'turbo') return 'Turbo';
                return p.charAt(0).toUpperCase() + p.slice(1);
            });
            return ['GPT-' + first].concat(tail).join(' ');
        }
        // o-series: o3 / o3-pro / o4-mini-high 等
        if (/^o\d/.test(s)) {
            const parts = s.split('-');
            const head = parts.shift();
            const tail = parts.map(p => p === 'pro' ? 'Pro' : p);
            return tail.length ? `${head}-${tail.join('-')}` : head;
        }
        // 未知 slug（含工具内部名如 image_gen.text2im、search.web 等）一律回退到 ChatGPT，避免暴露内部细节
        return 'ChatGPT';
    }

    // --- Markdown 转换函数 Markdown converter ---
    // 设计哲学：
    // - 用户消息走 blockquote（视觉内缩），AI 消息走正常段落（视觉全宽），
    //   在纯文本里复刻 HTML 的"右贴气泡 / 全宽气泡"非对称感。
    // - AI 角色标签用行内粗体 + 模型名（动态），不用 H2 —— 避免污染 Typora 大纲。
    // - 时间戳压到 HH:MM:SS（顶部元信息已含日期），不用 locale 格式（避免美式 mm/dd 歧义）。
    function convertToMarkdown(convData, attachmentMap = {}) {
        const parsed = parseConversation(convData);
        const pad = (n) => String(n).padStart(2, '0');
        const fmtDate = (t) => {
            const d = new Date(t * 1000);
            return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
        };
        const fmtTime = (t) => {
            const d = new Date(t * 1000);
            return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
        };
        // 把多行文本整体打成 blockquote：每行加 `> `，空行变 `>`
        const blockquote = (text) => text.split('\n').map(l => l.length ? `> ${l}` : '>').join('\n');

        let md = `# ${parsed.title}\n\n`;

        // 顶部紧凑元信息：model · 时间范围 / id
        const metaBits = [];
        if (parsed.model) metaBits.push(modelDisplayName(parsed.model));
        if (parsed.createTime) {
            const created = fmtDate(parsed.createTime);
            const updated = parsed.updateTime ? fmtDate(parsed.updateTime) : '';
            if (updated && updated !== created) {
                // 同一天就把右侧日期省掉：2026-04-25 08:01 → 08:02
                const sameDay = created.slice(0, 10) === updated.slice(0, 10);
                metaBits.push(sameDay ? `${created} → ${updated.slice(11)}` : `${created} → ${updated}`);
            } else {
                metaBits.push(created);
            }
        }
        if (metaBits.length) md += metaBits.join(' · ') + '\n\n';
        if (parsed.conversationId) md += '`' + parsed.conversationId + '`\n\n';
        md += '---\n\n';

        parsed.messages.forEach((msg) => {
            const time = msg.createTime ? fmtTime(msg.createTime) : '';
            const timeSuffix = time ? ` · ${time}` : '';
            const renderedText = applyContentReferences(msg.content, msg.contentReferences);
            const hasText = renderedText && renderedText.trim();

            if (msg.role === 'user') {
                // 用户消息整体 blockquote 包裹（含文本 + 附件）
                const lines = [`**You**${timeSuffix}`];
                if (hasText) {
                    lines.push('');
                    lines.push.apply(lines, renderedText.split('\n'));
                }
                (msg.attachments || []).forEach(att => {
                    const info = attachmentMap[att.fileId];
                    const mime = (info && info.mime) || att.mime || '';
                    const name = att.name || (info && info.name) || att.fileId;
                    lines.push('');
                    if (info && info.path) {
                        lines.push(isImageMime(mime)
                            ? `![${name}](${info.path})`
                            : `[📎 ${name}](${info.path})`);
                    } else {
                        lines.push(`⚠️ 附件未下载：${name} (\`${att.fileId}\`)`);
                    }
                });
                md += blockquote(lines.join('\n')) + '\n\n';
            } else {
                // Assistant：动态模型名作为角色标签
                const label = modelDisplayName(msg.model || parsed.model);
                md += `**${label}**${timeSuffix}\n\n`;
                if (msg.thinking) md += renderThinkingMarkdown(msg.thinking);
                if (hasText) md += `${renderedText}\n\n`;
                (msg.attachments || []).forEach(att => {
                    const info = attachmentMap[att.fileId];
                    const mime = (info && info.mime) || att.mime || '';
                    const name = att.name || (info && info.name) || att.fileId;
                    if (info && info.path) {
                        md += isImageMime(mime)
                            ? `![${name}](${info.path})\n\n`
                            : `[📎 ${name}](${info.path})\n\n`;
                    } else {
                        md += `> ⚠️ 附件未下载：${name} (\`${att.fileId}\`)\n\n`;
                    }
                });
            }
        });
        return md;
    }

    // --- HTML 转换函数：复刻 ChatGPT 网页视觉（AI Archivist 核心渲染层）---
    function convertToHTML(convData, attachmentMap = {}) {
        const parsed = parseConversation(convData);
        const escapeHtml = (text) => { const div = document.createElement('div'); div.textContent = text == null ? '' : String(text); return div.innerHTML; };

        // —— URL / 域名工具 —— //
        const hostnameOf = (url) => { try { return new URL(url).hostname.replace(/^www\./, ''); } catch (_) { return ''; } };
        const faviconUrl = (domainOrUrl) => {
            if (!domainOrUrl) return '';
            const host = domainOrUrl.includes('://') ? hostnameOf(domainOrUrl) : domainOrUrl.replace(/^www\./, '');
            if (!host) return '';
            return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=64`;
        };

        // —— 正文 markdown-lite 渲染（代码块 / 表格 / 行内）—— //
        // 单元格内的行内 markdown
        const inlineMd = (s) => {
            let h = escapeHtml(s);
            h = h.replace(/`([^`]+)`/g, '<code>$1</code>');
            h = h.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
            h = h.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer noopener">$1</a>');
            return h;
        };
        // 把表格段落转成 <table>，把代码块和表格各自塞占位符
        const extractBlocks = (text) => {
            const blocks = [];
            // 1) 代码块先抽出（避免里面的 | 被误识别为表格）
            let processed = text.replace(/```(\w+)?\n([\s\S]*?)```/g, (m, lang, code) => {
                blocks.push(`<pre><code class="language-${lang || 'text'}">${escapeHtml(code.trim())}</code></pre>`);
                return `[[[BLK_${blocks.length - 1}]]]`;
            });
            // 2) 表格识别：连续的 |...| 行 + 第二行是 |---|---|
            const lines = processed.split('\n');
            const out = [];
            let i = 0;
            while (i < lines.length) {
                const trimmed = lines[i].trim();
                if (/^\|.+\|$/.test(trimmed) && i + 1 < lines.length) {
                    const nxt = lines[i + 1].trim();
                    if (/^\|(\s*:?-+:?\s*\|)+$/.test(nxt)) {
                        const splitRow = (ln) => ln.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
                        const headers = splitRow(trimmed);
                        const aligns = splitRow(nxt).map(a => {
                            const L = a.startsWith(':'), R = a.endsWith(':');
                            if (L && R) return 'center';
                            if (R) return 'right';
                            return 'left';
                        });
                        let j = i + 2;
                        const rows = [];
                        while (j < lines.length && /^\|.+\|$/.test(lines[j].trim())) {
                            rows.push(splitRow(lines[j].trim()));
                            j++;
                        }
                        let table = '<div class="md-table-wrap"><table class="md-table"><thead><tr>';
                        headers.forEach((h, k) => {
                            table += `<th style="text-align:${aligns[k] || 'left'}">${inlineMd(h)}</th>`;
                        });
                        table += '</tr></thead><tbody>';
                        rows.forEach(r => {
                            table += '<tr>';
                            // 行长度可能少于表头，用空字符串补
                            for (let k = 0; k < headers.length; k++) {
                                table += `<td style="text-align:${aligns[k] || 'left'}">${inlineMd(r[k] || '')}</td>`;
                            }
                            table += '</tr>';
                        });
                        table += '</tbody></table></div>';
                        blocks.push(table);
                        out.push(`[[[BLK_${blocks.length - 1}]]]`);
                        i = j;
                        continue;
                    }
                }
                out.push(lines[i]);
                i++;
            }
            return { text: out.join('\n'), blocks };
        };
        const renderContent = (content) => {
            const { text, blocks } = extractBlocks(content);
            // 按占位符切片，非占位部分走完整行内 markdown + 转义 + 换行
            const parts = text.split(/(\[\[\[BLK_\d+\]\]\])/);
            let html = parts.map(p => {
                if (/^\[\[\[BLK_\d+\]\]\]$/.test(p)) return p;
                let h = escapeHtml(p);
                h = h.replace(/`([^`]+)`/g, '<code>$1</code>');
                h = h.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
                h = h.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer noopener">$1</a>');
                h = h.replace(/\n/g, '<br>');
                return h;
            }).join('');
            html = html.replace(/\[\[\[BLK_(\d+)\]\]\]/g, (_, i) => blocks[Number(i)]);
            return html;
        };

        // —— 附件渲染：用户 / 助手不同样式 —— //
        const renderAttachments = (attachments, role) => {
            if (!attachments || !attachments.length) return '';
            const items = attachments.map(att => {
                const info = attachmentMap[att.fileId];
                const mime = (info && info.mime) || att.mime || '';
                const name = att.name || (info && info.name) || att.fileId;
                if (!info || !info.path) {
                    return `<div class="att-missing">附件未下载：${escapeHtml(name)} (<code>${escapeHtml(att.fileId)}</code>)</div>`;
                }
                const safePath = escapeHtml(info.path);
                const safeName = escapeHtml(name);
                if (isImageMime(mime)) {
                    return `<a class="att-img-link" href="${safePath}" target="_blank" rel="noreferrer noopener"><img class="att-img" src="${safePath}" alt="${safeName}" loading="lazy"></a>`;
                }
                return `<a class="att-file" href="${safePath}" target="_blank" rel="noreferrer noopener" download><span class="att-file-icon">📎</span><span class="att-file-name">${safeName}</span></a>`;
            }).join('');
            return `<div class="atts atts-${role}">${items}</div>`;
        };

        // —— 思维事件 → 侧边面板 HTML（不直接显示在主聊天里）—— //
        const renderPanelEvents = (events) => {
            if (!events || !events.length) return '<div class="panel-empty">（无思维元数据）</div>';
            return events.map(ev => {
                if (ev.type === 'step') {
                    const title = escapeHtml(ev.title || '未命名步骤');
                    const queries = (ev.queries || []).map(q => `<div class="step-query">🔍 <code>${escapeHtml(q)}</code></div>`).join('');
                    // 渲染所有 result，超出前 6 的加 src-pill-extra 默认隐藏；点 +N more 展开
                    const results = ev.results || [];
                    const makePill = (r, extra) => {
                        const dom = r.domain || hostnameOf(r.url) || '';
                        const fav = faviconUrl(dom || r.url);
                        return `<a class="src-pill${extra ? ' src-pill-extra' : ''}" href="${escapeHtml(r.url)}" target="_blank" rel="noreferrer noopener" title="${escapeHtml(r.title || r.url)}"><img class="src-fav" src="${escapeHtml(fav)}" alt="" loading="lazy" onerror="this.style.display='none'"><span class="src-dom">${escapeHtml(dom)}</span></a>`;
                    };
                    const pillsHead = results.slice(0, 6).map(r => makePill(r, false)).join('');
                    const pillsRest = results.slice(6).map(r => makePill(r, true)).join('');
                    const moreN = results.length - 6;
                    const moreBtn = moreN > 0 ? `<button class="src-pill src-more" type="button" data-expand>+${moreN} more</button>` : '';
                    return `<div class="ev ev-step"><div class="ev-marker"></div><div class="ev-body"><div class="ev-title">${title}</div>${queries}<div class="src-pills">${pillsHead}${pillsRest}${moreBtn}</div></div></div>`;
                }
                if (ev.type === 'thought') {
                    const summary = escapeHtml(ev.summary || '');
                    const content = escapeHtml(ev.content || '').replace(/\n/g, '<br>');
                    return `<div class="ev ev-thought"><div class="ev-marker ev-marker-dot"></div><div class="ev-body">${summary ? `<div class="ev-summary">${summary}</div>` : ''}${content ? `<div class="ev-content">${content}</div>` : ''}</div></div>`;
                }
                return '';
            }).join('');
        };

        // —— 收集每条消息会用到的"sources"（思维结果 + content_references 里的 URL，按域名去重）—— //
        const collectSources = (msg) => {
            const seen = new Set();
            const out = [];
            const push = (url, title, domain) => {
                const key = (url || '') + '|' + (domain || '');
                if (!url || seen.has(key)) return;
                seen.add(key);
                out.push({ url, title: title || url, domain: domain || hostnameOf(url) });
            };
            if (msg.thinking && msg.thinking.events) {
                msg.thinking.events.forEach(ev => {
                    if (ev.type === 'step' && ev.results) ev.results.forEach(r => push(r.url, r.title, r.domain || hostnameOf(r.url)));
                });
            }
            (msg.contentReferences || []).forEach(ref => {
                (ref.items || []).forEach(it => { if (it && it.url) push(it.url, it.title, hostnameOf(it.url)); });
                (ref.safe_urls || []).forEach(u => push(u, hostnameOf(u), hostnameOf(u)));
            });
            return out;
        };

        // —— 主聊天里底部的 Sources 行（前 3 个 favicon + "Sources" 文本）—— //
        const renderSourcesRow = (sources, panelId) => {
            if (!sources || !sources.length) return '';
            const heads = sources.slice(0, 3).map(s => {
                const fav = faviconUrl(s.domain || s.url);
                return `<img class="src-row-fav" src="${escapeHtml(fav)}" alt="" loading="lazy" onerror="this.style.display='none'">`;
            }).join('');
            return `<button class="sources-row" data-panel="${panelId}" type="button"><span class="src-row-favs">${heads}</span><span class="src-row-label">Sources</span></button>`;
        };

        // —— 助手底部的"copy / like / dislike / share / refresh"装饰图标行 —— //
        const ACTION_ICONS = `
            <button class="act-btn act-copy" title="Copy" type="button" data-copy><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
            <button class="act-btn" title="Good response" type="button"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg></button>
            <button class="act-btn" title="Bad response" type="button"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/></svg></button>
            <button class="act-btn act-speak" title="朗读 (再点击停止)" type="button" data-speak><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>
            <button class="act-btn" title="Regenerate" type="button"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg></button>
            <button class="act-btn" title="More" type="button"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg></button>
        `;

        // —— Activity 面板的 templates（每个有思维或源的 assistant 消息一个）—— //
        const panelTemplates = [];
        let panelCounter = 0;
        parsed.messages.forEach(msg => {
            if (msg.role !== 'assistant') return;
            if (!msg.thinking && !(msg.contentReferences && msg.contentReferences.length)) return;
            const id = 'p' + (++panelCounter);
            msg.__panelId = id;
            const events = (msg.thinking && msg.thinking.events) ? msg.thinking.events : [];
            const headerLabel = msg.thinking ? thinkingDurationLabel(msg.thinking) : 'Sources';
            // 如果只有 sources 没有 thinking，构造一个伪 step event 列出所有源
            let bodyHtml;
            if (events.length) {
                bodyHtml = renderPanelEvents(events);
            } else {
                const sources = collectSources(msg);
                bodyHtml = `<div class="ev ev-step"><div class="ev-marker"></div><div class="ev-body"><div class="ev-title">Sources</div><div class="src-pills">${
                    sources.map(s => `<a class="src-pill" href="${escapeHtml(s.url)}" target="_blank" rel="noreferrer noopener" title="${escapeHtml(s.title || s.url)}"><img class="src-fav" src="${escapeHtml(faviconUrl(s.domain || s.url))}" alt="" loading="lazy" onerror="this.style.display='none'"><span class="src-dom">${escapeHtml(s.domain || hostnameOf(s.url))}</span></a>`).join('')
                }</div></div></div>`;
            }
            panelTemplates.push(`<template id="tmpl-${id}" data-label="${escapeHtml(headerLabel)}"><div class="panel-section-title">Thinking</div>${bodyHtml}</template>`);
        });

        // —— 拼装消息流 —— //
        const messagesHtml = parsed.messages.map(msg => {
            if (msg.role === 'user') {
                const text = applyContentReferences(msg.content, msg.contentReferences);
                const bubble = (text && text.trim()) ? `<div class="user-bubble">${renderContent(text)}</div>` : '';
                const atts = renderAttachments(msg.attachments, 'user');
                return `<article class="msg msg-user">${atts}${bubble}</article>`;
            }
            // assistant
            const text = applyContentReferences(msg.content, msg.contentReferences);
            const textHtml = (text && text.trim()) ? `<div class="msg-content">${renderContent(text)}</div>` : '';
            // 把"已替换 cite token 的 Markdown 源码"藏在 <template> 里，给复制按钮原料用。
            // template 内容浏览器会解析但不渲染；通过 .content.textContent 取回时 HTML 实体已被还原，无信息丢失。
            const mdSource = (text || '').trim();
            const sourceTag = mdSource ? `<template class="md-source">${escapeHtml(mdSource)}</template>` : '';
            const atts = renderAttachments(msg.attachments, 'assistant');
            const trigger = msg.thinking
                ? `<button class="thought-trigger" data-panel="${msg.__panelId}" type="button">${escapeHtml(thinkingDurationLabel(msg.thinking))} <span class="thought-arrow">›</span></button>`
                : '';
            const sources = collectSources(msg);
            const sourcesRow = msg.__panelId ? renderSourcesRow(sources, msg.__panelId) : '';
            const actions = `<div class="msg-actions">${ACTION_ICONS}${sourcesRow}</div>`;
            return `<article class="msg msg-assistant">${sourceTag}${trigger}${textHtml}${atts}${actions}</article>`;
        }).join('');

        const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(parsed.title)}</title>
<style>
:root {
    --bg: #ffffff;
    --text: #0d0d0d;
    --text-secondary: #5d5d5d;
    --text-tertiary: #8e8ea0;
    --border: #e5e5e5;
    --user-bubble: #f4f4f4;
    --hover: #f7f7f8;
    --link: #2563eb;
    --panel-w: 420px;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { height: 100%; }
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Söhne", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
    color: var(--text);
    background: var(--bg);
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
}
.app { display: flex; height: 100vh; overflow: hidden; }
.app-main { flex: 1; display: flex; flex-direction: column; min-width: 0; transition: margin-right 0.25s ease; }
.app.panel-open .app-main { margin-right: var(--panel-w); }
.topbar {
    flex-shrink: 0; height: 56px;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 18px; border-bottom: 1px solid transparent;
}
.brand { font-weight: 600; font-size: 18px; color: var(--text); cursor: default; user-select: none; display: inline-flex; align-items: center; gap: 6px; }
.brand-caret { color: var(--text-tertiary); display: inline-flex; align-items: center; }
.brand-caret svg { display: block; }
.topbar-actions { display: flex; gap: 4px; align-items: center; }
.topbar-btn {
    background: transparent; border: 0; padding: 8px 12px; border-radius: 8px;
    color: var(--text); cursor: pointer; font-size: 14px;
    display: inline-flex; align-items: center; gap: 6px;
}
.topbar-btn:hover { background: var(--hover); }
.scroll-area { flex: 1; overflow-y: auto; }
.chat { max-width: 760px; margin: 0 auto; padding: 24px 24px 120px; }

/* 消息基础布局 */
.msg { margin: 28px 0; }
.msg-user { display: flex; flex-direction: column; align-items: flex-end; gap: 10px; }
.user-bubble {
    background: var(--user-bubble);
    border-radius: 22px;
    padding: 10px 18px;
    max-width: 70%;
    font-size: 15.5px;
    line-height: 1.55;
    color: var(--text);
    white-space: pre-wrap;
    word-wrap: break-word;
}
.user-bubble strong { font-weight: 600; }
.user-bubble code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-size: 13.5px; }

.msg-assistant { display: flex; flex-direction: column; gap: 10px; }
.msg-content {
    font-size: 16px;
    line-height: 1.75;
    color: var(--text);
    word-wrap: break-word;
}
.msg-content p, .msg-content br + br { margin-top: 0.6em; }
.msg-content strong { font-weight: 600; }
.msg-content code { background: rgba(0,0,0,0.05); padding: 1px 6px; border-radius: 4px; font-size: 0.92em; font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; }
.msg-content pre { background: #0d0d0d; color: #e6e6e6; padding: 14px 16px; border-radius: 10px; overflow-x: auto; margin: 12px 0; font-size: 13.5px; line-height: 1.5; }
.msg-content pre code { background: none; padding: 0; color: inherit; font-size: inherit; }
.msg-content a { color: var(--link); text-decoration: none; }
.msg-content a:hover { text-decoration: underline; }

.md-table-wrap { overflow-x: auto; margin: 14px 0; border: 1px solid var(--border); border-radius: 8px; }
.md-table { border-collapse: collapse; width: 100%; font-size: 14.5px; line-height: 1.5; }
.md-table th, .md-table td { padding: 10px 14px; border-bottom: 1px solid var(--border); vertical-align: top; }
.md-table tr:last-child td { border-bottom: 0; }
.md-table th { font-weight: 600; background: #fafafa; border-bottom: 1.5px solid #d4d4d4; text-align: left; }
.md-table tbody tr:hover { background: rgba(0,0,0,0.02); }
.md-table code { background: rgba(0,0,0,0.05); padding: 1px 5px; border-radius: 3px; font-size: 0.92em; }

/* 思维 trigger */
.thought-trigger {
    background: transparent; border: 0; padding: 0;
    color: var(--text-secondary); font-size: 14px; cursor: pointer;
    display: inline-flex; align-items: center; gap: 4px; margin-bottom: 4px;
    font-family: inherit;
}
.thought-trigger:hover { color: var(--text); }
.thought-arrow { color: var(--text-tertiary); font-size: 16px; line-height: 1; }

/* 助手底部动作栏 */
.msg-actions {
    display: flex; align-items: center; gap: 2px;
    margin-top: 8px; opacity: 0.85;
}
.act-btn {
    background: transparent; border: 0; padding: 6px; border-radius: 6px;
    color: var(--text-secondary); cursor: pointer; line-height: 0;
}
.act-btn:hover { background: var(--hover); color: var(--text); }
.act-btn.act-success { color: #16a34a; }
.act-btn.act-speaking { color: #2563eb; background: rgba(37,99,235,0.08); }
.act-btn.act-speaking svg { animation: speakingPulse 1.1s ease-in-out infinite; }
@keyframes speakingPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.55; transform: scale(1.18); }
}
.topbar-btn[disabled] { opacity: 0.6; cursor: progress; }
.sources-row {
    background: transparent; border: 0; padding: 4px 8px 4px 4px; margin-left: 4px;
    border-radius: 999px; cursor: pointer;
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 13.5px; color: var(--text-secondary);
}
.sources-row:hover { background: var(--hover); color: var(--text); }
.src-row-favs { display: inline-flex; }
.src-row-fav {
    width: 18px; height: 18px; border-radius: 4px; background: #eee;
    margin-right: -4px; border: 1.5px solid #fff; object-fit: contain;
}
.src-row-label { margin-left: 4px; font-weight: 500; }

/* 附件 */
.atts { display: flex; flex-direction: column; gap: 10px; }
.atts-user { align-items: flex-end; }
.atts-user .att-img { max-width: 360px; max-height: 360px; border-radius: 14px; }
.atts-assistant .att-img { max-width: 100%; max-height: 540px; border-radius: 14px; border: 1px solid var(--border); }
.att-img-link { display: block; }
.att-img { display: block; background: #fafafa; }
.att-file {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 8px 12px; background: var(--user-bubble);
    border-radius: 10px; color: var(--text); text-decoration: none;
    font-size: 14px; max-width: 360px;
}
.att-file:hover { background: #ececec; }
.att-file-icon { font-size: 18px; }
.att-file-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.att-missing { color: #dc2626; font-size: 13px; padding: 6px 10px; background: #fef2f2; border-radius: 6px; }

/* —— 侧边面板 —— */
.side-panel {
    position: fixed; right: 0; top: 0; bottom: 0;
    width: var(--panel-w);
    background: var(--bg);
    border-left: 1px solid var(--border);
    transform: translateX(100%);
    transition: transform 0.25s ease;
    display: flex; flex-direction: column;
    z-index: 50;
}
.side-panel.open { transform: translateX(0); }
.panel-head {
    flex-shrink: 0; height: 56px;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 18px; border-bottom: 1px solid var(--border);
}
.panel-title { font-size: 16px; font-weight: 600; color: var(--text); }
.panel-meta { color: var(--text-tertiary); font-weight: 400; margin-left: 4px; }
.panel-close {
    background: transparent; border: 0; padding: 6px; border-radius: 6px;
    color: var(--text-secondary); cursor: pointer; line-height: 0;
}
.panel-close:hover { background: var(--hover); color: var(--text); }
.panel-body { flex: 1; overflow-y: auto; padding: 20px 24px 40px; }
.panel-section-title { font-size: 18px; font-weight: 600; margin-bottom: 18px; color: var(--text); }
.panel-empty { color: var(--text-tertiary); font-style: italic; }

/* 单个事件 */
.ev { display: flex; gap: 12px; margin-bottom: 18px; position: relative; }
.ev-marker {
    flex-shrink: 0; width: 14px; height: 14px;
    border: 2px solid #c4c4c4; border-radius: 50%;
    margin-top: 4px; background: var(--bg);
}
.ev-marker-dot {
    width: 6px; height: 6px;
    background: #c4c4c4; border: 0;
    margin-top: 9px; margin-left: 4px;
    margin-right: 4px;
}
.ev-body { flex: 1; min-width: 0; }
.ev-title { font-weight: 500; color: var(--text); font-size: 14.5px; margin-bottom: 8px; }
.ev-summary { font-weight: 600; color: var(--text); font-size: 14.5px; margin-bottom: 4px; }
.ev-content { color: var(--text-secondary); font-size: 14px; line-height: 1.6; }
.step-query { color: var(--text-secondary); font-size: 13px; margin: 4px 0; }
.step-query code { background: var(--user-bubble); padding: 1px 6px; border-radius: 4px; font-size: 12px; font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; }

/* 源 favicon pill */
.src-pills { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
.src-pill {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 4px 10px 4px 6px;
    background: var(--user-bubble);
    border-radius: 999px; text-decoration: none;
    color: var(--text); font-size: 13px; max-width: 220px;
}
.src-pill:hover { background: #ececec; }
.src-fav { width: 16px; height: 16px; border-radius: 4px; flex-shrink: 0; object-fit: contain; }
.src-dom { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.src-more { background: var(--user-bubble); color: var(--text-secondary); padding: 4px 10px; border: 0; cursor: pointer; font-family: inherit; font-size: 13px; }
.src-more:hover { background: #ececec; }
.src-pills .src-pill-extra { display: none; }
.src-pills.expanded .src-pill-extra { display: inline-flex; }
.src-pills.expanded .src-more { display: none; }

.footer-tag { padding: 24px; text-align: center; color: var(--text-tertiary); font-size: 12px; }

@media (max-width: 900px) {
    :root { --panel-w: 100vw; }
    .app.panel-open .app-main { margin-right: 0; }
}
</style>
</head>
<body>
<div class="app" id="app">
    <div class="app-main">
        <header class="topbar">
            <div class="brand">ChatGPT<span class="brand-caret"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span></div>
            <div class="topbar-actions">
                <button class="topbar-btn topbar-btn-share" type="button" title="导出为长图" data-share><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>Share</button>
                <button class="topbar-btn" type="button" title="More"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg></button>
            </div>
        </header>
        <div class="scroll-area">
            <main class="chat">${messagesHtml}</main>
            <div class="footer-tag">Exported by AI Archivist v1.0.1 · ${escapeHtml(parsed.title)}</div>
        </div>
    </div>
    <aside class="side-panel" id="sidePanel" aria-hidden="true">
        <header class="panel-head">
            <div class="panel-title">Activity <span class="panel-meta" id="panelMeta"></span></div>
            <button class="panel-close" id="panelClose" type="button" title="Close"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </header>
        <div class="panel-body" id="panelBody"></div>
    </aside>
</div>
${panelTemplates.join('')}
<script>
(function(){
    var app = document.getElementById('app');
    var panel = document.getElementById('sidePanel');
    var body = document.getElementById('panelBody');
    var meta = document.getElementById('panelMeta');

    function openPanel(id) {
        var tmpl = document.getElementById('tmpl-' + id);
        if (!tmpl) return;
        body.innerHTML = '';
        body.appendChild(tmpl.content.cloneNode(true));
        meta.textContent = tmpl.getAttribute('data-label') || '';
        body.scrollTop = 0;
        app.classList.add('panel-open');
        panel.classList.add('open');
        panel.setAttribute('aria-hidden', 'false');
    }
    function closePanel() {
        app.classList.remove('panel-open');
        panel.classList.remove('open');
        panel.setAttribute('aria-hidden', 'true');
    }

    // —— 复制按钮：把所属 article 的 .msg-content 文本写入剪贴板 —— //
    var CHECK_SVG = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
    function flashOk(btn) {
        var orig = btn.innerHTML;
        btn.innerHTML = CHECK_SVG;
        btn.classList.add('act-success');
        setTimeout(function() { btn.innerHTML = orig; btn.classList.remove('act-success'); }, 1400);
    }
    function copyMsg(btn) {
        var art = btn.closest('article');
        if (!art) return;
        // 优先复制 Markdown 源码（保留语法 + 引用链接），fallback 才用渲染后的纯文本
        var text = '';
        var src = art.querySelector('template.md-source');
        if (src && src.content) {
            text = (src.content.textContent || '').trim();
        }
        if (!text) {
            var c = art.querySelector('.msg-content');
            text = c ? (c.innerText || c.textContent || '').trim() : '';
        }
        if (!text) return;
        var done = function() { flashOk(btn); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(done, function() { fallbackCopy(text); done(); });
        } else {
            fallbackCopy(text); done();
        }
    }
    function fallbackCopy(text) {
        var ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (_) {}
        document.body.removeChild(ta);
    }

    // —— TTS：用浏览器内置 Web Speech API 朗读（零依赖、零凭证、离线可用）—— //
    var ttsCurrentBtn = null;
    function stripMd(s) {
        return String(s || '')
            .replace(/\`\`\`[\\s\\S]*?\`\`\`/g, '')
            .replace(/^\\s*\\|[\\s:|-]+\\|\\s*$/gm, '')
            .replace(/!\\[([^\\]]*)\\]\\(([^)]+)\\)/g, '$1')
            .replace(/\\[([^\\]]+)\\]\\(([^)]+)\\)/g, '$1')
            .replace(/\\*\\*([^*]+)\\*\\*/g, '$1')
            .replace(/\`([^\`]+)\`/g, '$1')
            .replace(/^#{1,6}\\s+/gm, '')
            .replace(/^>\\s+/gm, '')
            .replace(/^[\\s]*[-*+]\\s+/gm, '')
            .replace(/^[\\s]*\\d+\\.\\s+/gm, '')
            .replace(/\\|/g, ' ')
            .replace(/[\\uE200-\\uE2FF]/g, '')
            .replace(/\\n{3,}/g, '\\n\\n')
            .trim();
    }
    function pickVoice(lang) {
        var voices = window.speechSynthesis.getVoices();
        if (!voices.length) return null;
        // 简单语言探测：含中文字符就用中文音色
        if (/[一-鿿]/.test(lang || '')) {
            var preferred = ['zh-CN', 'zh-TW', 'zh-HK'];
            for (var i = 0; i < preferred.length; i++) {
                var v = voices.find(function(x) { return x.lang === preferred[i]; });
                if (v) return v;
            }
            return voices.find(function(x) { return /^zh/i.test(x.lang); }) || null;
        }
        return voices.find(function(x) { return /^en/i.test(x.lang); }) || null;
    }
    function clearSpeaking(btn) {
        if (btn) btn.classList.remove('act-speaking');
    }
    function speakMsg(btn) {
        var synth = window.speechSynthesis;
        if (!synth) { alert('当前浏览器不支持语音合成 (Web Speech API)'); return; }
        // 同按钮再点 → toggle off
        if (ttsCurrentBtn === btn && (synth.speaking || synth.pending)) {
            synth.cancel();
            clearSpeaking(btn);
            ttsCurrentBtn = null;
            return;
        }
        // 切换到其他消息 → 停旧
        if (synth.speaking || synth.pending) synth.cancel();
        if (ttsCurrentBtn) clearSpeaking(ttsCurrentBtn);

        var art = btn.closest('article');
        var src = art && art.querySelector('template.md-source');
        var raw = src && src.content ? (src.content.textContent || '').trim() : '';
        if (!raw) {
            var c = art && art.querySelector('.msg-content');
            raw = c ? (c.innerText || c.textContent || '').trim() : '';
        }
        var text = stripMd(raw);
        if (!text) return;

        var u = new SpeechSynthesisUtterance(text);
        var voice = pickVoice(text);
        if (voice) { u.voice = voice; u.lang = voice.lang; }
        u.rate = 1.0; u.pitch = 1.0; u.volume = 1.0;
        u.onend = function() { clearSpeaking(btn); if (ttsCurrentBtn === btn) ttsCurrentBtn = null; };
        u.onerror = function() { clearSpeaking(btn); if (ttsCurrentBtn === btn) ttsCurrentBtn = null; };

        btn.classList.add('act-speaking');
        ttsCurrentBtn = btn;
        synth.speak(u);
    }
    // 触发一次 voices 加载（Chrome 需要异步等 voiceschanged）
    if (window.speechSynthesis) {
        window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = function() {};
    }
    // 关闭页面时停掉朗读，避免后台残留
    window.addEventListener('beforeunload', function() {
        if (window.speechSynthesis && window.speechSynthesis.speaking) window.speechSynthesis.cancel();
    });

    // —— Share 按钮：懒加载 html2canvas，把 .chat 截成长图下载 —— //
    var html2canvasUrl = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    function loadH2C(cb) {
        if (typeof window.html2canvas !== 'undefined') return cb();
        var s = document.createElement('script');
        s.src = html2canvasUrl;
        s.onload = function() { cb(); };
        s.onerror = function() { alert('无法加载截图库（需要联网）'); };
        document.head.appendChild(s);
    }
    function shareAsImage(btn) {
        var origHtml = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<span style="font-size:13px">截图中…</span>';
        var wasOpen = panel.classList.contains('open');
        if (wasOpen) closePanel();
        loadH2C(function() {
            var target = document.querySelector('.scroll-area');
            // 用 .scroll-area 而不是 .chat：能带上 footer，且 html2canvas 会自动取完整 scrollHeight
            window.html2canvas(target, {
                backgroundColor: '#ffffff',
                scale: window.devicePixelRatio > 1 ? 2 : 1.5,
                useCORS: true,
                allowTaint: true,
                logging: false,
                windowWidth: target.scrollWidth,
                windowHeight: target.scrollHeight,
                width: target.scrollWidth,
                height: target.scrollHeight
            }).then(function(canvas) {
                canvas.toBlob(function(blob) {
                    var a = document.createElement('a');
                    a.href = URL.createObjectURL(blob);
                    var safeTitle = (document.title || 'chatgpt-conversation').replace(/[\/\\?%*:|"<>]/g, '-');
                    a.download = safeTitle + '.png';
                    document.body.appendChild(a); a.click(); document.body.removeChild(a);
                    setTimeout(function() { URL.revokeObjectURL(a.href); }, 1000);
                    btn.innerHTML = origHtml; btn.disabled = false;
                    if (wasOpen) {} // 不自动重开，避免出现"再次截屏"循环
                }, 'image/png');
            }).catch(function(err) {
                console.error('html2canvas error:', err);
                alert('截图失败：' + (err && err.message ? err.message : err));
                btn.innerHTML = origHtml; btn.disabled = false;
            });
        });
    }

    // —— 统一事件代理 —— //
    document.addEventListener('click', function(e) {
        var t = e.target;
        while (t && t !== document.body) {
            if (!t.dataset) { t = t.parentElement; continue; }
            if (t.dataset.copy !== undefined) { copyMsg(t); return; }
            if (t.dataset.speak !== undefined) { speakMsg(t); return; }
            if (t.dataset.share !== undefined) { shareAsImage(t); return; }
            if (t.dataset.expand !== undefined) {
                var pills = t.parentElement;
                if (pills && pills.classList) pills.classList.add('expanded');
                e.preventDefault();
                return;
            }
            if (t.dataset.panel) { openPanel(t.dataset.panel); return; }
            t = t.parentElement;
        }
    });
    document.getElementById('panelClose').addEventListener('click', closePanel);
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closePanel(); });
})();
</script>
</body>
</html>`;
        return html;
    }

    // --- 导出流程 Export process ---
    async function processConversationList(scope, list, workspaceId, formats, includeAttachments, btn, progressLabel) {
        for (let i = 0; i < list.length; i++) {
            const conv = list[i];
            btn.textContent = `📥 ${progressLabel} (${i + 1}/${list.length})`;
            const convData = await getConversation(conv.id, workspaceId);

            const attachmentMap = {};
            if (includeAttachments) {
                const parsed = parseConversation(convData);
                const totalAttachments = parsed.messages.reduce((s, m) => s + (m.attachments ? m.attachments.length : 0), 0);
                if (totalAttachments > 0) {
                    const convId = convData.conversation_id || conv.id || `unknown-${Date.now()}`;
                    btn.textContent = `🖼️ ${progressLabel} (${i + 1}/${list.length}) 附件 0/${totalAttachments}`;
                    const downloads = await fetchConversationAttachments(parsed, convId, workspaceId, (done, total) => {
                        btn.textContent = `🖼️ ${progressLabel} (${i + 1}/${list.length}) 附件 ${done}/${total}`;
                    });
                    const attachmentsRoot = `attachments/${convId}`;
                    for (const [fileId, result] of downloads) {
                        if (!result || !result.blob) continue;
                        const relPath = `${attachmentsRoot}/${fileId}.${result.ext}`;
                        scope.file(relPath, result.blob);
                        attachmentMap[fileId] = { path: relPath, name: result.name, mime: result.mime };
                    }
                }
                // 把"本地附件路径表"塞进 JSON 输出，便于后续工具按 file_id 反查
                convData.__local_attachments = attachmentMap;
            }

            if (formats.json) scope.file(generateUniqueFilename(convData, 'json'), JSON.stringify(convData, null, 2));
            if (formats.markdown) scope.file(generateUniqueFilename(convData, 'md'), convertToMarkdown(convData, attachmentMap));
            if (formats.html) scope.file(generateUniqueFilename(convData, 'html'), convertToHTML(convData, attachmentMap));
            await sleep(jitter());
        }
    }

    async function startExportProcess(mode, workspaceId, formats, selectedConversations = [], includeAttachments = true) {
        const btn = document.getElementById('gpt-rescue-btn');
        btn.disabled = true;
        if (!await ensureAccessToken()) { btn.disabled = false; btn.textContent = 'Export Conversations'; return; }
        try {
            const zip = new JSZip();
            if (!selectedConversations.length) throw new Error('没有需要导出的对话。');
            const rootConvs = selectedConversations.filter(c => !c.projectId);
            const projectMap = {};
            selectedConversations.filter(c => c.projectId).forEach(c => {
                if (!projectMap[c.projectId]) projectMap[c.projectId] = { title: c.projectTitle || c.projectId, items: [] };
                projectMap[c.projectId].items.push(c);
            });

            if (rootConvs.length) {
                btn.textContent = '📂 导出项目外对话…';
                await processConversationList(zip, rootConvs, workspaceId, formats, includeAttachments, btn, '根目录');
            }

            for (const [projectId, detail] of Object.entries(projectMap)) {
                const folderName = sanitizeFilename(detail.title || projectId);
                const projectFolder = zip.folder(folderName);
                btn.textContent = `📂 项目: ${folderName}`;
                await processConversationList(projectFolder, detail.items, workspaceId, formats, includeAttachments, btn, folderName.substring(0, 10));
            }

            btn.textContent = '📦 生成 ZIP 文件…';
            const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE" });
            const date = new Date().toISOString().slice(0, 10);
            const filename = mode === 'team' ? `chatgpt_team_backup_${workspaceId}_${date}.zip` : `chatgpt_personal_backup_${date}.zip`;
            downloadFile(blob, filename);
            alert(`✅ 导出完成！`);
            btn.textContent = '✅ 完成';
        } catch (e) {
            console.error("导出过程中发生严重错误", e);
            alert(`导出失败: ${e.message}。详情请查看控制台（F12 -> Console）。`);
            btn.textContent = '⚠️ Error';
        } finally {
            setTimeout(() => { btn.disabled = false; btn.textContent = 'Export Conversations'; }, 3000);
        }
    }

    // --- API 调用函数 API helpers ---
    async function getProjects(workspaceId) {
        if (!workspaceId) return [];
        const r = await fetchWithRetry(`/backend-api/gizmos/snorlax/sidebar`, { headers: buildHeaders(workspaceId) });
        if (!r.ok) { console.warn(`获取项目(Gizmo)列表失败 (${r.status})`); return []; }
        const data = await r.json();
        const projects = [];
        data.items?.forEach(item => { if (item?.gizmo?.id && item?.gizmo?.display?.name) { projects.push({ id: item.gizmo.id, title: item.gizmo.display.name }); } });
        return projects;
    }

    async function collectIds(btn, workspaceId, gizmoId) {
        const all = new Set();
        const headers = buildHeaders(workspaceId);
        if (gizmoId) {
            let cursor = '0';
            do {
                const r = await fetchWithRetry(`/backend-api/gizmos/${gizmoId}/conversations?cursor=${cursor}`, { headers });
                if (!r.ok) throw new Error(`列举项目对话列表失败 (${r.status})`);
                const j = await r.json();
                j.items?.forEach(it => all.add(it.id));
                cursor = j.cursor;
                await sleep(jitter());
            } while (cursor);
        } else {
            for (const is_archived of [false, true]) {
                let offset = 0, has_more = true, page = 0;
                do {
                    btn.textContent = `📂 项目外对话 (${is_archived ? 'Archived' : 'Active'} p${++page})`;
                    const r = await fetchWithRetry(`/backend-api/conversations?offset=${offset}&limit=${PAGE_LIMIT}&order=updated${is_archived ? '&is_archived=true' : ''}`, { headers });
                    if (!r.ok) throw new Error(`列举项目外对话列表失败 (${r.status})`);
                    const j = await r.json();
                    if (j.items && j.items.length > 0) {
                        j.items.forEach(it => all.add(it.id));
                        has_more = j.items.length === PAGE_LIMIT;
                        offset += j.items.length;
                    } else { has_more = false; }
                    await sleep(jitter());
                } while (has_more);
            }
        }
        return Array.from(all);
    }

    async function listConversationMetas(mode, workspaceId, progressCb = () => {}) {
        if (!await ensureAccessToken()) throw new Error('无法获取 Access Token，无法列出对话。');
        const headers = buildHeaders(workspaceId);
        const all = [];
        const seen = new Set();
        const pushItem = (item, projectInfo = {}) => {
            if (!item || !item.id || seen.has(item.id)) return;
            seen.add(item.id);
            all.push({
                id: item.id,
                title: item.title || '未命名对话',
                projectId: projectInfo.id || null,
                projectTitle: projectInfo.title || ''
            });
        };

        // 根目录对话
        progressCb('加载项目外对话列表…');
        for (const is_archived of [false, true]) {
            let offset = 0, has_more = true, page = 0;
            do {
                progressCb(`加载项目外对话 ${is_archived ? 'Archived' : 'Active'} 第 ${++page} 页…`);
                const r = await fetchWithRetry(`/backend-api/conversations?offset=${offset}&limit=${PAGE_LIMIT}&order=updated${is_archived ? '&is_archived=true' : ''}`, { headers });
                if (!r.ok) throw new Error(`列举项目外对话列表失败 (${r.status})`);
                const j = await r.json();
                if (j.items && j.items.length > 0) {
                    j.items.forEach(it => pushItem(it));
                    has_more = j.items.length === PAGE_LIMIT;
                    offset += j.items.length;
                } else { has_more = false; }
                await sleep(jitter());
            } while (has_more);
        }

        // 项目内对话（仅团队空间有）
        if (workspaceId) {
            const projects = await getProjects(workspaceId);
            for (const project of projects) {
                let cursor = '0';
                do {
                    progressCb(`加载项目 ${project.title}…`);
                    const r = await fetchWithRetry(`/backend-api/gizmos/${project.id}/conversations?cursor=${cursor}`, { headers });
                    if (!r.ok) throw new Error(`列举项目 ${project.title} 对话列表失败 (${r.status})`);
                    const j = await r.json();
                    j.items?.forEach(it => pushItem(it, { id: project.id, title: project.title }));
                    cursor = j.cursor;
                    await sleep(jitter());
                } while (cursor);
            }
        }

        progressCb(`已加载 ${all.length} 个对话，可勾选导出。`);
        return all;
    }

    async function getConversation(id, workspaceId) {
        const headers = buildHeaders(workspaceId);
        const r = await fetchWithRetry(`/backend-api/conversation/${id}`, { headers });
        if (!r.ok) throw new Error(`获取对话详情失败 conv ${id} (${r.status})`);
        const j = await r.json();
        j.__fetched_at = new Date().toISOString();
        return j;
    }

    // --- 文件下载 API File download API ---
    // 端点 GET /backend-api/files/download/{file_id}?conversation_id=X&inline=false
    // 同时覆盖用户上传 (file-XXX) 与 AI 生成图 (file_XXX，sediment 类型；GPT Image / 历史 DALL·E 等)。
    // conversation_id 是必填，缺失会 422。响应通常是直接的二进制流（带 Content-Disposition），
    // 偶尔会返回 {download_url} JSON 重定向 —— 两种都处理。
    async function downloadConversationAsset(fileId, convId, workspaceId) {
        const url = `/backend-api/files/download/${encodeURIComponent(fileId)}?conversation_id=${encodeURIComponent(convId)}&inline=false`;
        const r = await fetchWithRetry(url, { headers: buildHeaders(workspaceId) });
        if (!r.ok) throw new Error(`下载失败 ${fileId} (${r.status})`);
        const ct = (r.headers.get('content-type') || '').toLowerCase();
        if (ct.startsWith('application/json')) {
            // JSON 重定向：取签名 URL 再拉一次（注意签名 URL 不能附加 Authorization 头，否则破坏签名）
            const info = await r.json();
            const dl = info.download_url || info.downloadUrl;
            if (!dl) throw new Error('JSON 响应缺少 download_url');
            const r2 = await fetchWithRetry(dl, {}, 3);
            if (!r2.ok) throw new Error(`签名 URL 下载失败 (${r2.status})`);
            const blob = await r2.blob();
            return { blob, mime: blob.type || (info.metadata && info.metadata.mime_type) || '', name: info.file_name || info.fileName || '' };
        }
        const blob = await r.blob();
        // 从 Content-Disposition 提取原始文件名（filename*=UTF-8''xxx 优先于 filename=xxx）
        const cd = r.headers.get('content-disposition') || '';
        const fnStar = cd.match(/filename\*\s*=\s*(?:UTF-8'')?["']?([^"';]+)/i);
        const fnPlain = cd.match(/filename\s*=\s*["']?([^"';]+)/i);
        let name = '';
        try {
            if (fnStar) name = decodeURIComponent(fnStar[1]);
            else if (fnPlain) name = fnPlain[1];
        } catch (_) { name = (fnPlain && fnPlain[1]) || ''; }
        return { blob, mime: blob.type || '', name };
    }

    async function fetchConversationAttachments(parsed, convId, workspaceId, onProgress, concurrency = 4) {
        const uniq = new Map();
        parsed.messages.forEach(m => (m.attachments || []).forEach(a => {
            if (a && a.fileId && !uniq.has(a.fileId)) uniq.set(a.fileId, a);
        }));
        const fileIds = Array.from(uniq.keys());
        const results = new Map();
        if (!fileIds.length) return results;
        if (!convId) {
            try { console.warn('缺少 conversation_id，跳过附件下载'); } catch(_){}
            fileIds.forEach(fileId => results.set(fileId, { error: 'missing conversation_id', name: (uniq.get(fileId) || {}).name || '' }));
            return results;
        }
        let cursor = 0;
        let completed = 0;
        const worker = async () => {
            while (cursor < fileIds.length) {
                const i = cursor++;
                const fileId = fileIds[i];
                const att = uniq.get(fileId);
                try {
                    const { blob, mime, name } = await downloadConversationAsset(fileId, convId, workspaceId);
                    const finalMime = mime || att.mime || '';
                    const finalName = name || att.name || '';
                    const ext = pickExtension(finalMime, finalName);
                    results.set(fileId, { blob, mime: finalMime, name: finalName, ext });
                } catch (e) {
                    try { console.warn(`附件下载失败 ${fileId}:`, e); } catch (_) {}
                    results.set(fileId, { error: (e && e.message) || String(e), name: att.name || '' });
                }
                completed++;
                if (onProgress) { try { onProgress(completed, fileIds.length); } catch (_) {} }
                await sleep(120 + Math.random() * 180);
            }
        };
        const workerCount = Math.min(concurrency, fileIds.length);
        const workers = [];
        for (let i = 0; i < workerCount; i++) workers.push(worker());
        await Promise.all(workers);
        return results;
    }

    // --- 工作空间自动检测 Workspace detection ---
    function detectAllWorkspaceIds() {
        const foundIds = new Set(capturedWorkspaceIds);
        try {
            const data = JSON.parse(document.getElementById('__NEXT_DATA__')?.textContent || '{}');
            const accounts = data?.props?.pageProps?.user?.accounts;
            if (accounts) { Object.values(accounts).forEach(acc => { if (acc?.account?.id) foundIds.add(acc.account.id); }); }
        } catch (e) {}
        try {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (!key) continue;
                if (key.includes('account') || key.includes('workspace')) {
                    const value = localStorage.getItem(key);
                    if (!value) continue;
                    if (/^ws-[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(value.replace(/"/g, ''))) {
                        foundIds.add(value.replace(/"/g, ''));
                    } else if (/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(value.replace(/"/g, ''))) {
                        foundIds.add(value.replace(/"/g, ''));
                    }
                }
            }
        } catch(e) {}
        try { console.log('🔍 检测到以下 Workspace IDs:', Array.from(foundIds)); } catch(_){}
        return Array.from(foundIds);
    }

    // --- 对话框 UI 注入：把所有样式集中到一个 <style> 里，避免散落 inline style ---
    function injectExportStyles() {
        if (document.getElementById('aia-styles')) return;
        const css = `
        :root { --aia-text:#0d0d0d; --aia-text-2:#5d5d5d; --aia-text-3:#8e8e98; --aia-border:#e5e5e5; --aia-bg:#ffffff; --aia-soft:#f4f4f4; --aia-hover:#f7f7f8; --aia-accent:#0d0d0d; }
        #gpt-rescue-btn.aia-fab {
            position: fixed; bottom: 24px; right: 24px; z-index: 99997;
            background: var(--aia-accent); color: #fff;
            padding: 11px 20px; border: 0; border-radius: 999px;
            cursor: pointer; font-size: 14px; font-weight: 500;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
            box-shadow: 0 4px 16px rgba(0,0,0,0.18);
            user-select: none; line-height: 1.2;
            transition: transform 0.12s, box-shadow 0.12s, background 0.12s;
        }
        #gpt-rescue-btn.aia-fab:hover:not(:disabled) { background: #1a1a1a; transform: translateY(-1px); box-shadow: 0 6px 22px rgba(0,0,0,0.24); }
        #gpt-rescue-btn.aia-fab:active:not(:disabled) { transform: translateY(0); }
        #gpt-rescue-btn.aia-fab:disabled { opacity: 0.7; cursor: not-allowed; box-shadow: 0 2px 8px rgba(0,0,0,0.12); }

        .aia-overlay {
            position: fixed; inset: 0; z-index: 99998;
            background: rgba(0,0,0,0.55);
            display: flex; align-items: center; justify-content: center;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
            color: var(--aia-text); font-size: 14px;
            -webkit-font-smoothing: antialiased;
        }
        .aia-dialog {
            background: var(--aia-bg); border-radius: 20px;
            width: 560px; max-width: calc(100vw - 32px); max-height: calc(100vh - 48px);
            box-shadow: 0 24px 60px rgba(0,0,0,0.28);
            display: flex; flex-direction: column; overflow: hidden;
        }
        .aia-dlg-head {
            display: flex; align-items: center; justify-content: space-between;
            padding: 18px 22px 6px;
        }
        .aia-dlg-head h2 { font-size: 19px; font-weight: 600; margin: 0; color: var(--aia-text); }
        .aia-icon-btn {
            background: transparent; border: 0; padding: 6px;
            border-radius: 8px; cursor: pointer; line-height: 0;
            color: var(--aia-text-2);
        }
        .aia-icon-btn:hover { background: var(--aia-soft); color: var(--aia-text); }
        .aia-dlg-body { flex: 1; overflow-y: auto; padding: 12px 22px 16px; }
        .aia-section { margin-bottom: 18px; }
        .aia-section:last-child { margin-bottom: 0; }
        .aia-label { display: block; font-size: 12px; font-weight: 600; color: var(--aia-text-2); margin-bottom: 8px; letter-spacing: 0.02em; text-transform: uppercase; }

        /* Pill 切换（多选） */
        .aia-pills { display: flex; gap: 8px; flex-wrap: wrap; }
        .aia-pill { display: inline-flex; cursor: pointer; user-select: none; position: relative; }
        .aia-pill input { position: absolute; opacity: 0; pointer-events: none; }
        .aia-pill > span {
            background: var(--aia-bg); color: var(--aia-text);
            border: 1px solid var(--aia-border); border-radius: 999px;
            padding: 7px 14px; font-size: 13.5px;
            transition: all 0.1s;
        }
        .aia-pill:hover > span { background: var(--aia-hover); }
        .aia-pill input:checked + span {
            background: var(--aia-accent); color: #fff; border-color: var(--aia-accent);
        }

        /* Segmented 单选（仿 ChatGPT 模型选择器风格，滑块平滑过渡） */
        .aia-segmented {
            display: inline-flex; background: var(--aia-soft);
            border-radius: 999px; padding: 3px;
            position: relative;
        }
        .aia-segmented::before {
            content: ""; position: absolute;
            top: 3px; bottom: 3px; left: 3px;
            width: calc(50% - 3px);
            background: var(--aia-bg);
            border-radius: 999px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.08);
            transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
        }
        .aia-segmented:has(input[value="team"]:checked)::before {
            transform: translateX(100%);
        }
        .aia-seg {
            display: inline-flex; cursor: pointer; user-select: none;
            position: relative; flex: 1; z-index: 1;
        }
        .aia-seg input { position: absolute; opacity: 0; pointer-events: none; }
        .aia-seg > span {
            flex: 1; text-align: center;
            padding: 7px 18px; border-radius: 999px;
            font-size: 13.5px; color: var(--aia-text-2);
            transition: color 0.18s ease;
        }
        .aia-seg input:checked + span {
            color: var(--aia-text); font-weight: 500;
        }

        /* Checkbox row */
        .aia-checkbox { display: flex; align-items: center; gap: 8px; cursor: pointer; user-select: none; font-size: 14px; color: var(--aia-text); }
        .aia-checkbox input[type=checkbox] { width: 16px; height: 16px; accent-color: var(--aia-accent); cursor: pointer; }
        .aia-checkbox .aia-hint { color: var(--aia-text-3); font-size: 12px; margin-left: auto; }
        .aia-checkbox .aia-hint code { background: var(--aia-soft); padding: 1px 5px; border-radius: 3px; font-size: 11.5px; }

        /* Team area */
        .aia-team-area { margin-top: 10px; }
        .aia-detected-list { font-size: 12px; color: var(--aia-text-3); margin-bottom: 6px; word-break: break-all; }
        .aia-input {
            width: 100%; padding: 10px 12px;
            border: 1px solid var(--aia-border); border-radius: 12px;
            font-size: 13.5px; font-family: inherit;
            background: var(--aia-bg); color: var(--aia-text);
            transition: border-color 0.1s;
        }
        .aia-input:focus { outline: 0; border-color: var(--aia-accent); }
        .aia-input::placeholder { color: var(--aia-text-3); }

        /* Conversation list */
        .aia-section-row { display: flex; align-items: center; justify-content: space-between; }
        .aia-btn-text {
            background: transparent; border: 0; cursor: pointer;
            color: var(--aia-text-2); font-size: 13px; font-family: inherit;
            padding: 4px 8px; border-radius: 6px;
        }
        .aia-btn-text:hover { background: var(--aia-soft); color: var(--aia-text); }
        .aia-conv-status { font-size: 12px; color: var(--aia-text-3); margin: 6px 0 8px; min-height: 16px; }
        .aia-conv-tools { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
        .aia-conv-list {
            border: 1px solid var(--aia-border); border-radius: 12px;
            background: #fafafa; max-height: 240px; overflow-y: auto;
            padding: 4px;
        }
        .aia-conv-empty { font-size: 13px; color: var(--aia-text-3); padding: 14px; text-align: center; }
        .aia-conv-error { font-size: 13px; color: #dc2626; padding: 14px; text-align: center; }
        .aia-conv-row {
            display: flex; align-items: center; justify-content: space-between;
            padding: 8px 12px; border-radius: 8px;
            cursor: pointer; gap: 10px; font-size: 13.5px;
            transition: background 0.1s;
        }
        .aia-conv-row:hover { background: #fff; }
        .aia-conv-row .aia-conv-title { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--aia-text); }
        .aia-conv-row input[type=checkbox] { width: 15px; height: 15px; accent-color: var(--aia-accent); cursor: pointer; flex-shrink: 0; }
        .aia-proj { margin: 2px 0; }
        .aia-proj > summary { list-style: none; cursor: pointer; padding: 8px 12px; border-radius: 8px; color: var(--aia-text-2); font-weight: 500; font-size: 12.5px; user-select: none; }
        .aia-proj > summary::-webkit-details-marker { display: none; }
        .aia-proj > summary::before { content: '▸'; display: inline-block; margin-right: 6px; color: var(--aia-text-3); transition: transform 0.1s; }
        .aia-proj[open] > summary::before { content: '▾'; }
        .aia-proj > summary:hover { background: #fff; }
        .aia-proj .aia-conv-row { padding-left: 28px; }

        /* Footer */
        .aia-dlg-foot { display: flex; justify-content: flex-end; gap: 10px; padding: 14px 22px 18px; border-top: 1px solid #f0f0f0; }
        .aia-btn {
            border: 0; cursor: pointer;
            padding: 10px 20px; border-radius: 999px;
            font-size: 14px; font-weight: 500; font-family: inherit;
            transition: background 0.1s;
        }
        .aia-btn-secondary { background: var(--aia-bg); color: var(--aia-text); border: 1px solid var(--aia-border); }
        .aia-btn-secondary:hover { background: var(--aia-hover); }
        .aia-btn-primary { background: var(--aia-accent); color: #fff; }
        .aia-btn-primary:hover:not(:disabled) { background: #1a1a1a; }
        .aia-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
        `;
        const s = document.createElement('style');
        s.id = 'aia-styles';
        s.textContent = css;
        document.head.appendChild(s);
    }

    // --- 对话框 UI Export dialog (ChatGPT-style) ---
    function showExportDialog() {
        if (document.getElementById('export-dialog-overlay')) return;
        injectExportStyles();
        const overlay = document.createElement('div');
        overlay.id = 'export-dialog-overlay';
        overlay.className = 'aia-overlay';
        overlay.innerHTML = `
            <div class="aia-dialog" role="dialog" aria-labelledby="aia-dlg-title">
                <header class="aia-dlg-head">
                    <h2 id="aia-dlg-title">导出对话</h2>
                    <button class="aia-icon-btn" id="dlg-close-x" type="button" aria-label="关闭">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </header>
                <div class="aia-dlg-body">
                    <section class="aia-section">
                        <label class="aia-label">导出格式</label>
                        <div class="aia-pills">
                            <label class="aia-pill"><input type="checkbox" id="fmt-json" checked><span>JSON</span></label>
                            <label class="aia-pill"><input type="checkbox" id="fmt-md" checked><span>Markdown</span></label>
                            <label class="aia-pill"><input type="checkbox" id="fmt-html" checked><span>HTML</span></label>
                        </div>
                    </section>
                    <section class="aia-section">
                        <label class="aia-checkbox">
                            <input type="checkbox" id="include-attachments" checked>
                            <span>包含附件 (图片 / 上传文件)</span>
                            <span class="aia-hint">下载到 <code>attachments/</code></span>
                        </label>
                    </section>
                    <section class="aia-section">
                        <label class="aia-label">空间</label>
                        <div class="aia-segmented" role="radiogroup">
                            <label class="aia-seg"><input type="radio" name="mode" value="personal" checked><span>个人</span></label>
                            <label class="aia-seg"><input type="radio" name="mode" value="team"><span>团队</span></label>
                        </div>
                        <div id="team-area" class="aia-team-area" hidden>
                            <div id="detected" class="aia-detected-list"></div>
                            <input type="text" id="team-id" class="aia-input" placeholder="或在此粘贴 Workspace ID (ws-...)">
                        </div>
                    </section>
                    <section class="aia-section">
                        <div class="aia-section-row">
                            <span class="aia-label" style="margin:0;">选择对话</span>
                            <button id="conv-refresh" class="aia-btn-text" type="button">↻ 刷新</button>
                        </div>
                        <div id="conv-select-status" class="aia-conv-status">加载中…</div>
                        <div class="aia-conv-tools">
                            <label class="aia-checkbox"><input type="checkbox" id="conv-select-all" checked><span>全选</span></label>
                        </div>
                        <div id="conv-list" class="aia-conv-list"></div>
                    </section>
                </div>
                <footer class="aia-dlg-foot">
                    <button class="aia-btn aia-btn-secondary" id="dlg-cancel" type="button">取消</button>
                    <button class="aia-btn aia-btn-primary" id="dlg-start" type="button">开始导出</button>
                </footer>
            </div>
        `;
        document.body.appendChild(overlay);
        const dialog = overlay.querySelector('.aia-dialog');
        const radioPersonal = dialog.querySelector('input[name="mode"][value="personal"]');
        const radioTeam = dialog.querySelector('input[name="mode"][value="team"]');
        const teamArea = dialog.querySelector('#team-area');
        const detectedDiv = dialog.querySelector('#detected');
        const teamInput = dialog.querySelector('#team-id');
        const convStatus = dialog.querySelector('#conv-select-status');
        const convListEl = dialog.querySelector('#conv-list');
        const convRefresh = dialog.querySelector('#conv-refresh');
        const convSelectAll = dialog.querySelector('#conv-select-all');
        const convCache = {};
        let loadToken = 0;

        const renderConversationList = (items) => {
            convListEl.innerHTML = '';
            if (!items.length) {
                convListEl.innerHTML = '<div class="aia-conv-empty">暂无可用对话</div>';
                convSelectAll.checked = false;
                return;
            }
            const roots = [];
            const projectMap = {};
            const projectOrder = [];
            items.forEach(it => {
                if (it.projectId) {
                    if (!projectMap[it.projectId]) {
                        projectMap[it.projectId] = { title: it.projectTitle || it.projectId, list: [] };
                        projectOrder.push(it.projectId);
                    }
                    projectMap[it.projectId].list.push(it);
                } else {
                    roots.push(it);
                }
            });
            const frag = document.createDocumentFragment();

            projectOrder.forEach(pid => {
                const detail = projectMap[pid];
                if (!detail.list.length) return;
                const wrap = document.createElement('details');
                wrap.className = 'aia-proj';
                wrap.open = true;
                const summary = document.createElement('summary');
                summary.textContent = `${sanitizeFilename(detail.title)} · ${detail.list.length} 个`;
                wrap.appendChild(summary);
                detail.list.forEach(item => {
                    const row = document.createElement('label');
                    row.className = 'aia-conv-row';
                    row.innerHTML = `
                        <span class="aia-conv-title">${sanitizeFilename(item.title)}</span>
                        <input class="conv-check" type="checkbox" data-id="${item.id}" data-project="${item.projectId}" data-project-title="${sanitizeFilename(detail.title)}" data-title="${sanitizeFilename(item.title)}" checked>
                    `;
                    wrap.appendChild(row);
                });
                frag.appendChild(wrap);
            });

            roots.forEach(item => {
                const row = document.createElement('label');
                row.className = 'aia-conv-row';
                row.innerHTML = `
                    <span class="aia-conv-title">${sanitizeFilename(item.title)}</span>
                    <input class="conv-check" type="checkbox" data-id="${item.id}" data-project="" data-project-title="" data-title="${sanitizeFilename(item.title)}" checked>
                `;
                frag.appendChild(row);
            });
            convListEl.appendChild(frag);
            convSelectAll.checked = true;
        };

        const determineWorkspace = () => {
            const mode = radioTeam.checked ? 'team' : 'personal';
            if (mode === 'personal') return { mode, workspaceId: null };
            const manual = teamInput.value.trim();
            const workspaceId = manual || ids[0] || '';
            return { mode, workspaceId };
        };

        const loadConversationList = async (showWarnOnMissing = false) => {
            const { mode, workspaceId } = determineWorkspace();
            if (mode === 'team' && !workspaceId) {
                convStatus.textContent = '请输入有效的 Team Workspace ID 后再刷新列表。';
                convListEl.innerHTML = '';
                convSelectAll.checked = false;
                if (showWarnOnMissing) alert('请输入一个有效的 Team Workspace ID 再加载对话列表。');
                return;
            }
            const cacheKey = `${mode}:${workspaceId || 'personal'}`;
            if (convCache[cacheKey]) {
                convStatus.textContent = `已加载 ${convCache[cacheKey].length} 个对话（缓存）`;
                renderConversationList(convCache[cacheKey]);
                return;
            }
            const token = ++loadToken;
            convStatus.textContent = '加载对话列表中…';
            convListEl.innerHTML = '';
            try {
                const data = await listConversationMetas(mode, workspaceId || null, (msg) => { if (token === loadToken) convStatus.textContent = msg; });
                if (token !== loadToken) return;
                convCache[cacheKey] = data;
                renderConversationList(data);
            } catch (e) {
                if (token !== loadToken) return;
                convStatus.textContent = `加载失败: ${e.message}`;
                convListEl.innerHTML = '<div class="aia-conv-error">无法加载对话列表</div>';
                convSelectAll.checked = false;
            }
        };

        const updateTeamVisibility = () => {
            if (radioTeam.checked) teamArea.removeAttribute('hidden'); else teamArea.setAttribute('hidden', '');
        };

        convSelectAll.addEventListener('change', () => {
            convListEl.querySelectorAll('.conv-check').forEach(cb => { cb.checked = convSelectAll.checked; });
        });
        convListEl.addEventListener('change', () => {
            const checks = Array.from(convListEl.querySelectorAll('.conv-check'));
            convSelectAll.checked = checks.length > 0 && checks.every(cb => cb.checked);
        });
        convRefresh.onclick = () => { loadConversationList(true); };
        const ids = detectAllWorkspaceIds();
        if (ids.length) {
            detectedDiv.textContent = '已检测到: ' + ids.join(' · ');
            radioTeam.checked = true;
            radioPersonal.checked = false;
        }
        updateTeamVisibility();
        radioTeam.addEventListener('change', () => { updateTeamVisibility(); loadConversationList(); });
        radioPersonal.addEventListener('change', () => { updateTeamVisibility(); loadConversationList(); });
        teamInput.addEventListener('change', () => { loadConversationList(); });
        loadConversationList();

        const closeDlg = () => { try { document.body.removeChild(overlay); } catch (_) {} };
        dialog.querySelector('#dlg-close-x').onclick = closeDlg;
        dialog.querySelector('#dlg-cancel').onclick = closeDlg;
        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape' && document.body.contains(overlay)) {
                closeDlg();
                document.removeEventListener('keydown', escHandler);
            }
        });
        dialog.querySelector('#dlg-start').onclick = async () => {
            const formats = { json: dialog.querySelector('#fmt-json').checked, markdown: dialog.querySelector('#fmt-md').checked, html: dialog.querySelector('#fmt-html').checked };
            if (!formats.json && !formats.markdown && !formats.html) { alert('请至少选择一种导出格式！'); return; }
            const mode = radioTeam.checked ? 'team' : 'personal';
            let workspaceId = null;
            if (mode === 'team') {
                const manual = teamInput.value.trim();
                workspaceId = manual || ids[0] || '';
                if (!workspaceId) { alert('请选择或输入一个有效的 Team Workspace ID！'); return; }
            }
            const selected = Array.from(dialog.querySelectorAll('.conv-check:checked')).map(cb => ({
                id: cb.getAttribute('data-id'),
                projectId: cb.getAttribute('data-project') || null,
                projectTitle: cb.getAttribute('data-project-title') || '',
                title: cb.getAttribute('data-title') || ''
            }));
            if (!selected.length) {
                await loadConversationList(true);
                const retrySelected = Array.from(dialog.querySelectorAll('.conv-check:checked')).map(cb => ({
                    id: cb.getAttribute('data-id'),
                    projectId: cb.getAttribute('data-project') || null,
                    projectTitle: cb.getAttribute('data-project-title') || '',
                    title: cb.getAttribute('data-title') || ''
                }));
                if (!retrySelected.length) { alert('请至少勾选一个要导出的对话。'); return; }
                selected.splice(0, selected.length, ...retrySelected);
            }
            const includeAttachments = dialog.querySelector('#include-attachments').checked;
            closeDlg();
            exportFormats.mode = mode; exportFormats.workspaceId = workspaceId;
            startExportProcess(mode, workspaceId, formats, selected, includeAttachments);
        };
        overlay.onclick = (e) => { if (e.target === overlay) closeDlg(); };
    }

    function addBtn() {
        if (document.getElementById('gpt-rescue-btn')) return;
        injectExportStyles();
        const b = document.createElement('button');
        b.id = 'gpt-rescue-btn';
        b.className = 'aia-fab';
        b.type = 'button';
        b.textContent = 'Export Conversations';
        b.onclick = showExportDialog;
        document.body.appendChild(b);
    }

    setTimeout(addBtn, 2000);
})();
