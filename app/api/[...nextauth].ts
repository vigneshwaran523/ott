import { error } from "console";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";
import { compare } from   'bcrypt'

export default NextAuth({
    providers:[
        Credentials({
            id: 'credentials',
            name: 'credentials',
            credentials:{
                Email:{
                    label: 'Email',
                    type: 'text'
                },
                password:{
                    label: 'password',
                    type: 'password'
                }
            },
            async authorize (credentials){
              if(!credentials?.Email || !credentials?.password){
                throw new Error('Email and password requried');
              }          

              const user = await prismadb.user.findUnique({
                where:{
                    email: credentials.Email
                }
              });
     if(!user || !user.hashedPassword){
        throw new Error('Email does not exist')
     }

    const iscorrectPassword = await compare(credentials.password,
        user.hashedPassword
         );

         if(!iscorrectPassword){
            throw new Error('Incoorect password');
         }
         return user;

            }
        })
    ],
    pages:{
        signIn:'/auth',
    },
    debug:process.env.NODE_ENV === 'development',
    session:{
        strategy:'jwt'
    },
    jwt:{
        secret:process.env.NEXTAUTH_SECRET
    },
    secret:process.env.AUTH_SECRET
})