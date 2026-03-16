import { MatrixRain } from "@/components/MatrixRain";

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-[980px] items-center justify-between px-6 text-[13px]">
          <a href="/" className="font-medium tracking-tight text-green">tessera</a>
          <div className="flex items-center gap-6 text-muted">
            <a href="#why" className="hidden cursor-pointer transition hover:text-text sm:block">Why</a>
            <a href="#how" className="hidden cursor-pointer transition hover:text-text sm:block">How</a>
            <a href="#cap" className="hidden cursor-pointer transition hover:text-text sm:block">Features</a>
            <a href="https://github.com/besslframework-stack/project-tessera" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition hover:text-text">GitHub</a>
          </div>
        </div>
      </nav>

      <main>
        {/* ━━━ HERO ━━━ */}
        <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-6">
          <MatrixRain />
          <div className="relative z-10 mx-auto w-full max-w-[980px]">
            <div className="grid gap-16 lg:grid-cols-[1fr,400px] lg:items-center">
              <div>
                <div className="mb-5 flex items-center gap-2 text-[12px] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-green" />
                  v1.5.0 &middot; open source &middot; local-first
                </div>
                <h1 className="glow text-[clamp(32px,5.5vw,56px)] font-bold leading-[1.1] tracking-[-0.03em]">
                  Memory layer
                  <br />
                  <span className="text-green">for every AI.</span>
                </h1>
                <p className="mt-5 max-w-[400px] text-[15px] leading-[1.7] text-muted">
                  Tessera sits between you and your AI tools.
                  It captures what you discuss, indexes your documents,
                  and makes everything searchable across Claude,
                  ChatGPT, Gemini, and Copilot.
                </p>
                <p className="mt-3 max-w-[400px] text-[14px] leading-[1.7] text-dim">
                  No cloud. No API keys. Your data stays on your machine, encrypted with AES-256.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href="#install" className="inline-flex h-9 cursor-pointer items-center rounded-md bg-green px-5 font-mono text-[12px] font-medium text-white transition hover:brightness-110">
                    pip install project-tessera
                  </a>
                  <a href="https://github.com/besslframework-stack/project-tessera" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-md border border-border-2 px-5 text-[13px] text-muted transition hover:border-muted hover:text-text">
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
                    Star on GitHub
                  </a>
                </div>
              </div>

              {/* Demo */}
              <div className="rounded-xl border border-border-2 bg-surface p-px">
                <div className="rounded-[11px] bg-bg">
                  <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-ghost" />
                    <span className="h-2 w-2 rounded-full bg-ghost" />
                    <span className="h-2 w-2 rounded-full bg-ghost" />
                    <span className="ml-2 font-mono text-[10px] text-dim">claude</span>
                  </div>
                  <div className="space-y-4 p-5 text-[12px] leading-[1.7]">
                    <div className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-2 text-[9px] text-dim">U</span>
                      <p className="text-muted">What auth method did we go with?</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-soft text-[9px] text-green">T</span>
                      <div className="space-y-2">
                        <div className="rounded-md border border-border bg-surface px-3 py-2 font-mono text-[10px]">
                          <span className="text-dim">recall</span>
                          <span className="ml-2 text-muted">&quot;JWT + refresh token. decided: 3/12 ChatGPT&quot;</span>
                        </div>
                        <p className="text-muted">
                          You decided on <span className="text-text">JWT + refresh token</span>. Discussed in your ChatGPT session on March 12.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 pl-8 font-mono text-[9px] text-dim">
                      <span className="h-1 w-1 rounded-full bg-green" />
                      saved via ChatGPT &middot; recalled in Claude
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ WHY ━━━ */}
        <section id="why" className="border-t border-border px-6 py-28 md:py-36">
          <div className="mx-auto max-w-[980px]">
            <p className="mb-4 font-mono text-[11px] text-green-dim">the problem</p>
            <div className="grid gap-14 md:grid-cols-2">
              <div>
                <h2 className="text-[24px] font-bold leading-[1.3] tracking-tight md:text-[28px]">
                  Every AI session<br />starts from zero.
                </h2>
                <p className="mt-5 text-[14px] leading-[1.8] text-muted">
                  You spend 20 minutes explaining your project to Claude.
                  Next session, gone. Switch to ChatGPT for a different task — start over.
                  Try Gemini — start over again.
                </p>
                <p className="mt-3 text-[14px] leading-[1.8] text-muted">
                  Decisions, context, preferences — scattered across sessions
                  that will never talk to each other.
                </p>
              </div>
              <div className="space-y-2">
                {[
                  "Claude doesn't know what you discussed in ChatGPT",
                  "Last week's decisions vanish when the session ends",
                  "You re-explain the same context every single time",
                  "Your documents aren't accessible inside AI tools",
                  "No way to search across past conversations",
                  "No memory of your preferences or working style",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-[13px]">
                    <span className="mt-px text-green-dim">&times;</span>
                    <span className="text-muted">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ SOLUTION ━━━ */}
        <section className="border-t border-border px-6 py-28 md:py-36">
          <div className="mx-auto max-w-[980px]">
            <p className="mb-4 font-mono text-[11px] text-green-dim">the solution</p>
            <h2 className="max-w-[500px] text-[24px] font-bold leading-[1.3] tracking-tight md:text-[28px]">
              One local knowledge base.
              <br /><span className="text-green">Every AI tool.</span>
            </h2>
            <p className="mt-5 max-w-[500px] text-[14px] leading-[1.8] text-muted">
              Tessera runs on your machine. Captures memories. Indexes documents.
              Builds a knowledge graph. Makes everything available to Claude, ChatGPT,
              Gemini, and Copilot simultaneously.
            </p>

            {/* Architecture */}
            <div className="mx-auto mt-20 max-w-[540px]">
              <div className="grid grid-cols-4 gap-2">
                {[["Claude","MCP"],["ChatGPT","Actions"],["Gemini","REST"],["Copilot","REST"]].map(([n,p]) => (
                  <div key={n} className="rounded-lg border border-border bg-surface py-3 text-center">
                    <div className="text-[12px] font-medium">{n}</div>
                    <div className="font-mono text-[9px] text-dim">{p}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center py-2"><div className="h-6 w-px bg-border-2" /></div>
              <div className="rounded-lg border border-green/20 bg-green-soft px-6 py-4 text-center">
                <div className="glow text-[16px] font-bold text-green">Tessera</div>
                <div className="mt-1 flex flex-wrap justify-center gap-x-4 font-mono text-[10px] text-green-dim">
                  <span>58 tools</span><span>54 endpoints</span><span>AES-256</span><span>local</span>
                </div>
              </div>
              <div className="flex justify-center py-2"><div className="h-6 w-px bg-border-2" /></div>
              <div className="grid grid-cols-3 gap-2">
                {[["Memories","auto-captured"],["Documents","40+ types"],["Knowledge Graph","entities & relations"]].map(([n,s]) => (
                  <div key={n} className="rounded-lg border border-border bg-bg py-3 text-center">
                    <div className="text-[11px] text-muted">{n}</div>
                    <div className="font-mono text-[9px] text-dim">{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ HOW ━━━ */}
        <section id="how" className="border-t border-border px-6 py-28 md:py-36">
          <div className="mx-auto max-w-[980px]">
            <p className="mb-16 font-mono text-[11px] text-green-dim">how it works</p>

            <div className="space-y-20">
              {[
                {
                  n: "01", h: "Install in 30 seconds",
                  p1: "One pip install. One setup command. Tessera detects Claude Desktop and configures itself as an MCP server. No Docker, no database, no cloud account.",
                  p2: "For ChatGPT, Gemini, Copilot — start the HTTP server with tessera api. ChatGPT Custom GPT Actions spec included.",
                  code: "$ pip install project-tessera\n$ tessera setup\n✓ Claude Desktop configured\n✓ MCP server ready (58 tools)\n$ tessera api\n✓ HTTP :8394 (54 endpoints)",
                },
                {
                  n: "02", h: "Feed it your knowledge",
                  p1: "Point at any folder. PDF, DOCX, XLSX, CSV, Markdown, Python, TypeScript, HTML, YAML, JSON, images (OCR) — 40+ formats. Chunked, embedded, stored locally.",
                  p2: "Conversations auto-captured. Decisions, preferences, facts — tagged, scored, deduplicated against existing memories.",
                  code: "$ tessera ingest ~/projects/api-docs\n  scanning...\n✓ 847 documents indexed\n✓ 12,340 chunks embedded\n\n$ tessera status\n  memories:  2,156\n  entities:  489\n  relations: 1,203",
                },
                {
                  n: "03", h: "Every AI remembers",
                  p1: "Ask Claude about a decision you made in ChatGPT last week. Ask Gemini to find a document you discussed with Copilot. One knowledge base bridges them all.",
                  p2: "Search by meaning (vector), keyword (BM25), entity graph, or natural language time — bilingual queries work in English and Korean.",
                  code: "# Claude (MCP)\nrecall(\"auth method\")\n→ JWT + refresh tokens (Mar 12)\n\n# ChatGPT (REST)\nGET /api/recall?q=auth+method\n→ same result\n\n# Natural language time\nrecall(\"decisions last week\")\n→ 3 decisions found",
                },
              ].map((s) => (
                <div key={s.n} className="grid gap-10 md:grid-cols-[1fr,360px] md:items-start">
                  <div>
                    <span className="font-mono text-[11px] text-green">{s.n}</span>
                    <h3 className="mt-2 text-[18px] font-semibold tracking-tight">{s.h}</h3>
                    <p className="mt-3 text-[14px] leading-[1.8] text-muted">{s.p1}</p>
                    <p className="mt-2 text-[14px] leading-[1.8] text-muted">{s.p2}</p>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-border-2 bg-surface">
                    <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                      <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
                      <span className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
                      <span className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
                    </div>
                    <pre className="p-4 font-mono text-[11px] leading-[1.8] text-muted">{s.code}</pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ NUMBERS ━━━ */}
        <section className="border-t border-border px-6 py-16">
          <div className="mx-auto grid max-w-[980px] grid-cols-2 gap-8 md:grid-cols-4">
            {[["58","MCP tools"],["54","HTTP endpoints"],["1,102","tests passing"],["40+","file types"]].map(([v,l]) => (
              <div key={l}>
                <div className="glow font-mono text-[36px] font-bold tabular-nums tracking-tight text-green md:text-[44px]">{v}</div>
                <div className="mt-1 text-[12px] text-dim">{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━ CAPABILITIES ━━━ */}
        <section id="cap" className="border-t border-border px-6 py-28 md:py-36">
          <div className="mx-auto max-w-[980px]">
            <p className="mb-4 font-mono text-[11px] text-green-dim">capabilities</p>
            <p className="mb-16 max-w-[480px] text-[14px] leading-[1.7] text-muted">
              58 MCP tools. 54 HTTP endpoints. 11 CLI commands.
              Everything below works out of the box.
            </p>

            <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
              {[
                ["Auto Memory", "Conversations auto-captured, tagged, classified by type (decision, preference, fact, procedure). Importance scoring. Duplicate detection and merge. Old memories decay unless reinforced."],
                ["Document Ingestion", "PDF, DOCX, XLSX, CSV, Markdown, Python, JS, TS, HTML, YAML, JSON, XML, images via OCR. 40+ formats. Incremental re-index on file changes. Point at a folder."],
                ["Cross-AI", "MCP for Claude Desktop (stdio + SSE). REST API with 54 endpoints for ChatGPT, Gemini, Copilot. ChatGPT Custom GPT Actions OpenAPI spec. Chrome extension for web AI tools."],
                ["Knowledge Graph", "Entities and relations auto-extracted. Temporal validity — knowledge expires when context changes. Sleep-cycle consolidation merges fragmented memories."],
                ["Encrypted Vault", "AES-256-CBC. Per-memory encryption toggle. Lock, unlock, store, retrieve via MCP + REST. No master key stored — derived from passphrase at runtime."],
                ["Smart Retrieval", "Vector (semantic), keyword (BM25), graph (entity traversal). Unified search combines all three. Bilingual NL time expressions — \"last week\", \"yesterday\", \"early March\" parse automatically in English and Korean."],
                ["User Profiling", "Long-term profile built from conversations. Communication style, expertise areas, decision patterns. AI reads your profile for personalized responses."],
                ["Project Spaces", "Isolate knowledge by project. Each has its own memory scope. Switch contexts without cross-contamination. List, assign, query within a project."],
                ["Provenance Chain", "Every memory tracks origin — which AI session, which document, which parent memories. Trace any knowledge back to its source. Full lineage chain."],
                ["Session Priming", "Start every session with context. Recent decisions, active topics, preferences, last session summary — assembled into a briefing automatically. No cold starts."],
              ].map(([title, body]) => (
                <div key={title}>
                  <h3 className="text-[14px] font-semibold">{title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.8] text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ COMPARISON ━━━ */}
        <section className="border-t border-border px-6 py-28 md:py-36">
          <div className="mx-auto max-w-[980px]">
            <p className="mb-4 font-mono text-[11px] text-green-dim">comparison</p>
            <p className="mb-14 max-w-[400px] text-[14px] leading-[1.7] text-muted">
              Tessera vs existing AI memory tools. Feature by feature.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-[12px]">
                <thead>
                  <tr className="border-b border-border-2 text-left">
                    <th className="pb-3 pr-6 font-normal text-dim" />
                    <th className="pb-3 px-3 text-center font-semibold text-green">Tessera</th>
                    <th className="pb-3 px-3 text-center font-normal text-dim">Mem0</th>
                    <th className="pb-3 px-3 text-center font-normal text-dim">Basic Memory</th>
                    <th className="pb-3 px-3 text-center font-normal text-dim">mcp-memory</th>
                  </tr>
                </thead>
                <tbody>
                  {([
                    ["Local-first", true, false, true, true],
                    ["Auto memory", true, true, false, false],
                    ["40+ file types", true, false, false, false],
                    ["Cross-AI REST", true, true, false, false],
                    ["Knowledge graph", true, false, false, false],
                    ["NL time queries", true, false, false, false],
                    ["Encrypted vault", true, false, false, false],
                    ["Consolidation", true, false, false, false],
                    ["User profiling", true, false, false, false],
                    ["Project spaces", true, false, false, false],
                    ["Provenance", true, false, false, false],
                    ["Session priming", true, false, false, false],
                    ["ChatGPT Actions", true, true, false, false],
                    ["Chrome extension", true, false, false, false],
                    ["Web dashboard", true, false, false, false],
                    ["MCP tools", "58", "6", "3", "4"],
                    ["HTTP endpoints", "54", "—", "0", "0"],
                    ["Tests", "1,102", "—", "—", "—"],
                  ] as const).map(([f, t, m, b, mc]) => (
                    <tr key={f} className="border-b border-border/40">
                      <td className="py-2 pr-6 text-muted">{f}</td>
                      {[t, m, b, mc].map((v, i) => (
                        <td key={i} className={`py-2 px-3 text-center ${i === 0 ? "text-green" : "text-dim"}`}>
                          {v === true ? (i === 0 ? "●" : "○") : v === false ? "—" : v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ━━━ INSTALL ━━━ */}
        <section id="install" className="border-t border-border px-6 py-28 md:py-36">
          <div className="mx-auto max-w-[980px]">
            <p className="mb-4 font-mono text-[11px] text-green-dim">get started</p>
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="text-[14px] leading-[1.8] text-muted">
                  Python 3.11+ required. Runs on macOS, Linux, Windows.
                </p>
                <p className="mt-3 text-[14px] leading-[1.8] text-muted">
                  <span className="text-text">tessera setup</span> auto-detects Claude Desktop
                  and writes MCP config. For other AI tools,
                  <span className="text-text"> tessera api</span> starts the HTTP server.
                </p>
                <p className="mt-3 text-[14px] leading-[1.8] text-muted">
                  Or run without installing:
                  <code className="ml-1 rounded bg-surface-2 px-2 py-0.5 font-mono text-[12px] text-muted">uvx project-tessera setup</code>
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["Python 3.11+","LanceDB","FastEmbed","SQLite","FastAPI","MCP","AES-256","PyPI","uvx","AGPL-3.0"].map((t) => (
                    <span key={t} className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[10px] text-dim">{t}</span>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-border-2 bg-surface">
                <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                  <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
                  <span className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
                  <span className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
                </div>
                <pre className="p-4 font-mono text-[11px] leading-[1.8] text-muted">{`# Install
pip install project-tessera

# Configure Claude Desktop
tessera setup

# Index documents
tessera ingest ~/docs

# Start REST API
tessera api

# Status
tessera status
✓ memories: 2,156 | entities: 489`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ CTA ━━━ */}
        <section className="border-t border-border px-6 py-28 md:py-36">
          <div className="mx-auto max-w-[980px] text-center">
            <h2 className="glow text-[24px] font-bold tracking-tight md:text-[32px]">
              Your AI should <span className="text-green">remember</span> you.
            </h2>
            <p className="mx-auto mt-4 max-w-[380px] text-[14px] leading-[1.7] text-dim">
              Open source. Local-first. Encrypted.
              One install away from persistent AI memory.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#install" className="inline-flex h-9 cursor-pointer items-center rounded-md bg-green px-6 font-mono text-[12px] font-medium text-white transition hover:brightness-110">
                pip install project-tessera
              </a>
              <a href="https://github.com/besslframework-stack/project-tessera" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-md border border-border-2 px-5 text-[13px] text-muted transition hover:border-muted hover:text-text">
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
                Star on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-5">
        <div className="mx-auto flex max-w-[980px] items-center justify-between text-[11px] text-dim">
          <div className="flex gap-5">
            <a href="https://github.com/besslframework-stack/project-tessera#readme" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition hover:text-muted">Docs</a>
            <a href="https://github.com/besslframework-stack/project-tessera" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition hover:text-muted">GitHub</a>
            <a href="https://pypi.org/project/project-tessera/" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition hover:text-muted">PyPI</a>
            <a href="https://github.com/besslframework-stack/project-tessera/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition hover:text-muted">AGPL-3.0</a>
          </div>
          <span>BESSL Framework</span>
        </div>
      </footer>
    </>
  );
}
