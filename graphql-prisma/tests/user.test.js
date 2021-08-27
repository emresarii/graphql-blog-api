import 'cross-fetch/polyfill'
import ApolloBoost, {gql} from 'apollo-boost'
import prisma from '../src/prisma.js'
import seed, { userOne } from './utils/seed.js'
import getClient from './utils/getClient'

const client = getClient()

beforeEach(seed)

test('Creating user', async ()=>{
    const createUser = gql`
         mutation{
             createUser(data:{
                 name: "Emre",
                 email: "emresari@gmail.com",
                 password: "ww2021ww"
             }){
                 token,
                 user{
                     id
                 }
             }
         }
    `

    const response = await client.mutate({
        mutation: createUser
    })
const exists = await prisma.exists.User({ id: response.data.createUser.user.id})
expect(exists).toBe(true)
})

test('User query', async ()=> {
    const queryUser = gql `
         query{
             users{
                 id
                 name
                 email
             }
         }
    `
    const response = await client.query({query: queryUser})
    expect(response.data.users.length).toBe(1)
    expect(response.data.users[0].email).toBe(null)
    expect(response.data.users[0].name).toBe("Sena")
})

test('Failed login', async () => {
    const login = gql `
    mutation{
        login(
            data:{
                email: "emre@hotmail.com",
                password: "sssss22222"
            }
        ){
            token
        }
    }
    `
    await expect(client.mutate({mutation: login})).rejects.toThrow()
    

})

test('Signup failure', async () => {
    const createUser = gql`
         mutation{
             createUser(data:{
                 name: "Emre",
                 email: "emresari@gmail.com",
                 password: "ww2021"
             }){
                 token               
             }
         }
    `
    await expect(client.mutate({mutation: createUser})).rejects.toThrow()
} )

test('Should fetch user profile', async () => {
    const client = getClient(userOne.jwt)
    const getProfile = gql`
        query {
            me {
                id
                name
                email
            }
        }
    `
    const { data } = await client.query({ query: getProfile })

    expect(data.me.id).toBe(userOne.user.id)
    expect(data.me.name).toBe(userOne.user.name)
    expect(data.me.email).toBe(userOne.user.email)
})

