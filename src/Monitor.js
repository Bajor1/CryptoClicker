import './App.css'
import './Monitor.css'
import bg from './misc/bkg_stol.png';

function Monitor() {
  return (
    <div className='bkg' style={{ backgroundImage: `url(${bg})` }}>
        <div className="monitor">
          <img src="/monior.png" className="monitor-img" alt="monitor" />
            <div className='screen'>
              <div className="icon icon1">
                <button>
                  <img src="/folderXP_icon.png" alt="miner" />
                  <h5>Miner.exe</h5>
                </button>
                
              </div>

              <div className="icon icon2">
                <button>
                  <img src="/internetExplorer_icon.png" alt="internet" />
                  <h5>Internet</h5>
                </button>
              </div>

              <div className="icon icon3">
                <button>
                    <img src="/folderXP_icon.png" alt="marketWatch" />
                    <h5>MarketWatch.exe</h5>
                </button>
              </div>

              <div className="icon icon4">
                <button>
                    <img src="/myComputer_icon.png" alt="MyComputer" />
                    <h5>My Computer</h5>
                </button>
              </div>

              <div className="icon icon5">
                <button>
                    <img src="/folderXP_icon.png" alt="Avergainer" />
                    <h5>Avergainer.exe</h5>
                </button>
              </div>
              <div className="scanlines"></div>
            </div>
        </div>
    </div>
  )
}

export default Monitor