import { createServer } from 'http'

import cors from 'cors'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

import schema from './graphql'

const app = express()
app.use(express.json())//ทำให้รับ request ที่เป็น json ได้
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.json({ message: 'Server running' })
})

//สร้างเซอร์เวอร์ให้รัน
const startApolloServer = async () => {
    const httpServer = createServer(app)
    const apolloServer = new ApolloServer({
        schema,
        introspection: true,
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({ app, path: '/graphql' })
    httpServer.listen({ port: process.env.PORT })
}
startApolloServer()