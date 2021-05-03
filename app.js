const express = require('express');
const app = express();

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});

app.use('/api', '../server/index');
