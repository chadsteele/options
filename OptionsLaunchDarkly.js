import { Options } from './Options'
import * as LDClient from 'launchdarkly-js-client-sdk'
require('dotenv').config()

const config = {
  id: process.env.REACT_APP_LAUNCHDARKLY_CLIENT_ID,
  user: {
    firstName: 'tasty',
    lastName: 'tester',
    key: 'testing@hear.com',
    custom: { groups: 'testing' },
  },
  // eslint-disable-next-line no-console
  log: console.log,
}

// console.log(config)

export class OptionsLaunchDarkly extends Options {
  constructor(props = {}) {
    super(props)
    config.log = props.log || config.log
    const { id, user } = config
    if (!user || !id) return
    this.ldclient = LDClient.initialize(id, user)
    this.ldclient.on('initialized', this.handleLaunchDarklyUpdates)
    this.ldclient.on('change', this.handleLaunchDarklyUpdates)
  }

  handleLaunchDarklyUpdates = () => {
    if (!this.ldclient) return
    this.allFlags = this.ldclient.allFlags()
    config.log({ allFlags: this.allFlags })
    this.update(this.allFlags) // this may trump query strings
    this.addQueryString() // so we have to add them back
  }
}

export const theOptionsLaunchDarkly = new OptionsLaunchDarkly() // singleton
export default theOptionsLaunchDarkly
