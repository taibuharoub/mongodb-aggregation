## Some Guidelines on using the aggregation framework

[1]

`$group` stage is almost used in every stage, `_id` is mandatory field must be present in every group stage. When combining `$match` and `$group`, the most efficient way is to match first and then group

[2]

`$count` stage, if there are several stages in the aggregation request `$count` is always the last stage

[3]

`$sort` stage is usually placed after the `$match` and `$group` stage

[4]

`$project` stage is normally goes directly after the `$match` stage

[5] 

`$limit` is usually used in two cases

1. Sampled aggregation results with `$limit` as first stage
2. After `$sort` stage to produce the top `N` results

[6]

`$unwind` stage is usually used in conjunction with the `$group` stage

[7]

Accumulators are operators used inside of the `$group` stage e.g `$sum`, `$avg`, `$max`, `$min`

[8]

Unary operators usually used in two cases e.g `$type`, `$lt`, `$or`, return `true` or `false`

1. Unary operators are usually used in the `$project` stage
2. In the `$group` stage unary operators can be only used in conjunction with Accummulators

[9]

`$out` stage must be the last stage in the pipeline

[10]

`allowDiskUse` will enable MonoDB to write stage data to temporal files when set to `true`, default is `false`