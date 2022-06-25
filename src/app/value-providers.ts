import { InjectionToken } from '@angular/core';

import { LookupList } from './lookup-list.model';

/**
 * This name can be anything
 * BTW IDK what name would be good for this file. I just select a name
 */
export const lookupListToken = new InjectionToken('lookupListToken');
/**
 * IDK either it is a good thing and where do we need it
 */
export const lookupList: LookupList = {
  mediums: ['Movies', 'Series'],
};
