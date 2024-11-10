import { NextResponse } from 'next/server'
 
export async function POST(request: Request) {
  const data = await request.json()
  
  const message = `Hello ${data.name}! Your message was: ${data.message}`
  
  return NextResponse.json({ 
    status: 'success',
    message: message 
  })
}
