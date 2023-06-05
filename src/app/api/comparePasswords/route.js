import { NextApiRequest, NextApiResponse } from 'next';

export const POST = async (req) => {
  const { password } = await req.json()
  if (password === "123456") {
      return new Response(JSON.stringify({ message: 'Correct' }), { status: 200 })
  }
  else {
      return new Response(JSON.stringify({ error: 'Wrong password' }), { status: 400 })
  }
}