const { forwardTo } = require('prisma-binding')

const Query = {
  items: forwardTo('db')
  // THE LONG WAY IF NOT SAME AS PRISMA QUERY
  // async items (parent, args, ctx, info) {
  //   const items = await ctx.db.query.items()
  //   return items
  // }
}

module.exports = Query
