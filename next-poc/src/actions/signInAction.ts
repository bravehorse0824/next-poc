'use server';

import { redirect } from 'next/navigation';

export const signInAction = async (formData: FormData) => {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  try {
  } catch (error) {
    return { message : "Username or email not correct" };
  }

  redirect('/home');
};