import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { connectDB } from '@/utils/connectDB';
import { user } from '@/models/model';

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

  const file: File | null = formData.get('profilePic') as File;

  if (file) {
    const filePath = path.join('public', '/', `${username}_${file.name}`);
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);
    try {
      connectDB();
      const result = await user.create({
        username,
        email,
        password,
        profilePic: buffer,
      });
      console.log(result);
      return NextResponse.json({ message: 'User created' });
    } catch (err: any) {
      console.log(err.message);
      return NextResponse.json({ message: ' internal server error' });
    }
  } else {
    try {
      connectDB();
      const result = await user.create({
        username,
        email,
        password,
      });
      console.log(result);
      return NextResponse.json({ message: 'User created' });
    } catch (err: any) {
      console.log(err.message);
      return NextResponse.json({ message: ' internal server error' });
    }
  }

  return NextResponse.json({ message: 'request received' });
};
