import bcrypt from 'bcryptjs'
import prisma from '../../src/prisma.js'
import jwt from 'jsonwebtoken'

const userOne= {
    input: {
        name:"Sena",
        email:"sena@gmail.com",
        password: bcrypt.hashSync('ww2021ww')
    },
    user: undefined,
    jwt: undefined
}

const postOne= {
    input:{
        title: "dummypost1",
        body:"dummypost1",
        published: true,
        
    },
    post: undefined
}
const postTwo= {
    input:{
        title: "dummypost2",
        body:"dummypost2",
        published: false,
    },
    post: undefined
}
const seed = async () => {
    await prisma.mutation.deleteManyPosts()
    await prisma.mutation.deleteManyUsers()
    userOne.user = await prisma.mutation.createUser({
        data: userOne.input
    })

    userOne.jwt= jwt.sign({userId: userOne.user.id}, process.env.JWT_SECRET)

    postOne.post = await prisma.mutation.createPost({
        data:{
            ...postOne.input,
            author:{
                connect: {
                    id:userOne.user.id
                }
            }
        }
    })
    postTwo.post = await prisma.mutation.createPost({
        data:{
            ...postTwo.input,
            author:{
                connect: {
                    id:userOne.user.id
                }
            }
        }
    })
}

export {seed as default, userOne, postOne, postTwo}