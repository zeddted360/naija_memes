import { post } from '@/models/model';
import { connectDB } from '@/utils/connectDB';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const postId = req.nextUrl.searchParams?.get('_id');
  try {
    connectDB;
    const result = await post.findOne({ _id: postId });
    if (!result) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json({ message: result }, { status: 300 });
    console.log(result);
  } catch (err: any) {
    console.log(err.message);
    return NextResponse.json(
      { message: 'Internal server error ' },
      { status: 500 }
    );
  }
};
