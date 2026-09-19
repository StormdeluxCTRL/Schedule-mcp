import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    console.log('SUPABASE URL EXISTS:', !!process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log(
      'SUPABASE KEY EXISTS:',
      !!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
    )

    const { data, error } = await supabase
      .from('urniki')
      .select('*')

    console.log('DATA:', data)
    console.log('ERROR:', error)

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(data)
  } catch (err) {
    console.error('SERVER ERROR:', err)

    return NextResponse.json(
      { error: String(err) },
      { status: 500 }
    )
  }
}