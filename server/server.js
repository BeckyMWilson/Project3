const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const path = require('path')
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

const app = express();

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));

    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../client/build/index.html'));
    // });
// }

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    
    server.applyMiddleware({ app });
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
}


// log mongo queries that are executed
// mongoose.set('debug', true);

startApolloServer(typeDefs, resolvers);