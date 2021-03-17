/**
 * removeHistory
 * @author: oldj
 * @homepage: https://oldj.net
 */

import { swhdb } from '@main/data'

export default async (id: string) => {
  await swhdb.collection.history.delete(item => item.id === id)
}
