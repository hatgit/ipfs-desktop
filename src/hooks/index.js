import autoLaunch from './auto-launch'
import downloadHash from './download-hash'
import ipfs from './ipfs'
import launchWebUI from './launch-webui'
import openDataFolder from './open-data-folder'
import takeScreenshot from './take-screenshot'

export default function (opts) {
  autoLaunch(opts)
  downloadHash(opts)
  ipfs(opts)
  launchWebUI(opts)
  openDataFolder(opts)
  takeScreenshot(opts)
}