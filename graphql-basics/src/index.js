import { GraphQLServer, PubSub} from 'graphql-yoga'
import db from './db'
import Query from './resolvers/Query'
import User from  './resolvers/User'
import Comment from './resolvers/Comment'
import Post from './resolvers/Post'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
 
const pubsub = new PubSub()
const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers: {
        Query,
        User,
        Comment,
        Post,
        Mutation,
        Subscription
    },
    context:{
        db,
        pubsub
    }
})


server.start(() =>{
    console.log('Server is online')
}
)