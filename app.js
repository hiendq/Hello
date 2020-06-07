const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

// app.use('/api/auth', authRoutes);
// app.use('/api/product', productRoutes);
app.get('/', (req, res) => {
    
    res.send('Say Hi');
})


app.get('/', (req, res) => {
    res.send(`Listening on ${ PORT }`);
})