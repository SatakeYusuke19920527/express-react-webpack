import express from 'express';
import v1Router from './routes/v1/index';
import v2Router from './routes/v2/index';

const app = express();

const allowCrossDomain = function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token'
  )
  // intercept OPTIONS method
  if ('OPTIONS' === req.method) {
    res.send(200)
  } else {
    next()
  }
}
app.use(allowCrossDomain)

// JSONオブジェクトの受信設定
app.use(express.json())
// 配列側のオブジェクトの受信設定
app.use(express.urlencoded({ extended: true }));

// ルーティング
app.use('/v1', v1Router);
app.use('/v2', v2Router);

// 3001ポートで受信
const port = process.env.PORT || 3001;

// APIサーバ起動
app.listen(port);
console.log('Express WebApi listening on port ' + port);