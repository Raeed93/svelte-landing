import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad, PageData } from './$types';
import stytchClient from '../../lib/stytch/stytchClient'

export function load({ cookies }) {
  let username = cookies.get('username')
}

export const actions = {
  login: async ({ cookies, request}) => {
		const data = await request.formData();
		const email = data.get('username');   
        //
        if (typeof email !== 'string' || !email) {
            return fail(400, { error: 'Invalid email address' });
          }

          try {
            const response = await stytchClient.magicLinks.email.loginOrCreate({
              email,
              login_magic_link_url: 'http://localhost:5174',
            });

            console.log('Stytch response:', response);

        return { message: 'Magic link sent to your email!' };
        } catch (error) {
        console.error('Error sending magic link:', error);
        return fail(500, { error: 'Failed to send magic link' });
        }

  }
}; 
  


