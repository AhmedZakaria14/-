import express from 'express';
import http from 'http';
const app = express();
app.get('*all', (req, res) => res.send('matched *all'));
const server = http.createServer(app);
server.listen(3001, () => {
  http.get('http://localhost:3001/test/path', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('Response:', data);
      server.close();
    });
  });
});
