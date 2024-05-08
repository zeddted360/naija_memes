import { NextResponse, NextRequest } from 'next/server';

export const GET = async (req: NextRequest, context: any) => {
  const { params } = context;
  const { _id } = params;

  return NextResponse.json(
    { message: 'call received', params: `${_id}` },
    { status: 200 }
  );
};
