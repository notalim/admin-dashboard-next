import { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

const authConfig = {
  providers: [
    GithubProvider({
      // TODO: Add github provider
      clientId: process.env.GITHUB_ID ?? '', 
      clientSecret: process.env.GITHUB_SECRET ?? ''
    }),
    CredentialProvider({
      credentials: {
        username: {
          type: 'text',
          label: 'Username'
        },
        password: {
          type: 'password',
          label: 'Password'
        }
      },
      async authorize(credentials) {
        const user = {
          id: '1',
          name: 'Admin',
          email: credentials?.username as string
        };
        return user;
      }
    })
  ],
  pages: {
    signIn: '/login'
  }
} satisfies NextAuthConfig;

export default authConfig;
