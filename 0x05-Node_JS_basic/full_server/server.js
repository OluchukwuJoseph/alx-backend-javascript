import express from 'express';
import router from './routes/index';

const app = express();
const PORT = 1245;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export default app;
