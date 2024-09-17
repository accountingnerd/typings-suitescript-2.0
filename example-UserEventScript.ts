/**
 * @NAPIVersion 2.1
 * @NScriptType UserEventScript
 */

import {EntryPoints} from 'N/types'
import log = require('N/log');

export const beforeSubmit: EntryPoints.UserEvent.beforeSubmit = (ctx) => {
    if (ctx.type == ctx.UserEventType.CREATE) {
        log.debug('Entity Id', ctx.newRecord.getValue('entity')); // When creating a transaction from an entity, log the entity internal id
    }
};
