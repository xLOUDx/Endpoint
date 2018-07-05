const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json([
  {
    id: '1',
    name: 'Casa',
    place: [ -36.82379704, -73.05620264 ]
  },
  {
    id: '2',
    name: 'Trabajo',
    place: [ -36.82269774, -73.04822039 ]
  },
  {
    id: '3',
    name: 'Universidad',
    place: [ -36.82530856, -73.06040835 ]
  }
  ])
});


app.listen(3000, () => { console.log('Server up!') });
