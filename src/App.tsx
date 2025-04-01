import './App.css'

function App() {
  const repositories = [
    {
      name: "evm-mcp-server",
      url: "https://github.com/mcpdotdirect/evm-mcp-server",
      description: "mcp server that provides llm with tools for interacting with evm networks",
      packageUrl: "https://www.npmjs.com/package/@mcpdotdirect/evm-mcp-server"
    },
    {
      name: "starknet-mcp-server",
      url: "https://github.com/mcpdotdirect/starknet-mcp-server",
      description: "mcp server that provides an llm with tools for interacting with starknet",
      packageUrl: "https://www.npmjs.com/package/@mcpdotdirect/starknet-mcp-server"
    },
    {
      name: "template-mcp-server",
      url: "https://github.com/mcpdotdirect/template-mcp-server",
      description: "quickly set up your own mcp server via npx @mcpdotdirect/create-mcp-server",
      packageUrl: "https://www.npmjs.com/package/@mcpdotdirect/create-mcp-server"
    },
    {
      name: "need a custom mcp server built ?",
      url: "mailto:info@mcp.direct",
      description: "get in touch, we can advise & build a solution tailored for your needs",
      packageUrl: ""
    }
  ]

  const otherResources = [
    {
      name: "modelcontextprotocol official specs",
      url: "https://spec.modelcontextprotocol.io/",
      description: "original spec for sharing context, tools, and composable integrations with language models",
      buttonText: "docs"
    },
    {
      name: "modelcontextprotocol/servers",
      url: "https://github.com/modelcontextprotocol/servers",
      description: "official collection of reference implementations for the model context protocol"
    },
    {
      name: "awesome-mcp-servers",
      url: "https://github.com/punkpeye/awesome-mcp-servers",
      description: "curated list of production-ready and experimental MCP servers"
    },
    {
      name: "mcpdotdirect",
      url: "https://github.com/mcpdotdirect",
      description: "more open source tools (to come) for optimizing llm attention",
      packageUrl: "https://www.npmjs.com/settings/mcpdotdirect/packages"
    }
  ]

  return (
    <div className="terminal-wrapper">
      <div className="container">
        <header>
          <img src="/mcp_white_wide.png" alt="MCP Logo" className="logo" />
        </header>

        <section>
          <h2>mcpdotdirect repositories</h2>
          <div className="terminal-card-container">
            {repositories.map((repo) => (
              <div key={repo.name} className="repo-card terminal-card">
                <h3>{repo.name}</h3>
                <p>
                  {repo.name === "template-mcp-server" ? (
                    <>
                      quickly set up your own mcp server via <span className="command">npx @mcpdotdirect/create-mcp-server</span>
                    </>
                  ) : (
                    repo.description
                  )}
                </p>
                <div className="button-container">
                  <a href={repo.url} target="_blank" rel="noopener noreferrer" className="btn terminal-button">
                    {repo.name === "need a custom mcp server built ?" ? "email" : "github"}
                  </a>
                  {repo.packageUrl && repo.name !== "need a custom mcp server built ?" && (
                    <a href={repo.packageUrl} target="_blank" rel="noopener noreferrer" className="btn terminal-button">
                      package
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <h3>quickly run <span className="command">evm-mcp-server</span> in cursor with a <span className="command">~/.cursor/mcp.json</span> file:</h3>
          <div>
            <pre>
{`{
  "mcpServers": {
    "evm-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@mcpdotdirect/evm-mcp-server"
      ]
    }
  }
}`}
            </pre>
          </div>
          
          <h2 className="resources">resources</h2>
          <div className="resource-container">
            {otherResources.map((resource) => (
              <div key={resource.name} className="resource-item terminal-card">
                <h4>{resource.name}</h4>
                <p>{resource.description}</p>
                <div className="button-container">
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn terminal-button"
                  >
                    {resource.buttonText || "github"}
                  </a>
                  {resource.packageUrl && (
                    <a 
                      href={resource.packageUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn terminal-button"
                    >
                      packages
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer>
          <p>
            <a href="mailto:info@mcp.direct">info@mcp.direct</a>
            <span className="footer-separator">|</span>
            <a href="https://promethea.tech" target="_blank" rel="noopener noreferrer">promethea.tech</a>
            <span className="footer-separator">|</span>
            <a href="https://x.com/prometheatech" target="_blank" rel="noopener noreferrer">x.com/prometheatech</a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
