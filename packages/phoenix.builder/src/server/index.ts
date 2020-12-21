import express from 'express'
import conf from 'clavius.lib/src/server/next.config'
import next from 'next'

import { setup } from 'clavius.lib/src/server'

// c(▀̿Ĺ̯▀̿ ̿).
setup({ slug: 'help' })(
  express(),
  next({
    dev: process.env.NODE_ENV !== 'production',
    customServer: true,
    conf,
  }),
)
