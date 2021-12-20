import { networkMapFree } from 'network.js'
import {
          runCommandAndWait,
          disableLogs,
          announce,
        } from 'helpers.js'
// magic number (Ram required to run breadwinner.js)
const hackingScriptSize = 1.7
const scripts = ['hack.js', 'grow.js', 'weaken.js']

/**
 * @param {NS} ns
 **/
export async function main(ns) {
  disableLogs(ns, ['sleep'])

  let servers = Object.values(await networkMapFree())
    .filter(s => s.data.hasAdminRights &&
                s.name != 'home' &&
                s.maxRam - s.data.ramUsed >= hackingScriptSize &&
                (
                  !s.files.includes(scripts[0]) ||
                  !s.files.includes(scripts[1]) ||
                  !s.files.includes(scripts[2])
                )
    )

  // early return, if there are no servers no need to do anything else
  if ( servers.length == 0 ) {
    return
  }

  ns.tprint("Zombifying " + servers.length + " servers")
  for (let server of servers) {
    await zombify(ns, server.name)
    await ns.sleep(200)
  }
  let msg = `Zombified servers: ${servers.map(s => s.name).join(', ')}`
  announce(ns, msg)
  ns.tprint(msg)
}

async function zombify(ns, server) {
  for (const script of scripts) {
    await runCommandAndWait(ns, `ns.scp('${script}', "home", '${server}')`)
  }
  ns.print(`Copied ${scripts} to ${server}`)
}
