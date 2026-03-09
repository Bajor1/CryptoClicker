import './App.css'
import './Monitor.css'

function Monitor() {
  return (
    <div className="monitor">
      <img src="/monior.png" className="monitor-img" alt="monitor" />

      <div className="icon icon1">
        <button>
          <img src="/folderXP_icon.png" alt="miner" />
          <h5>Miner.exe</h5>
        </button>
        
      </div>

      <div className="icon icon2">
        <button>
          <img src="/internetExplorer_icon.png" alt="google" />
          <h5>Google</h5>
        </button>
      </div>

      <div className="icon icon3">
        <button>
            <img src="/folderXP_icon.png" alt="marketWatch" />
            <h5>MarketWatch.exe</h5>
        </button>
      </div>

    </div>
  )
}

export default Monitor