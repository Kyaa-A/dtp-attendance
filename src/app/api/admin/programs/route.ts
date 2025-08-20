import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/client';

export async function GET() {
  try {
    const programs = await prisma.program.findMany({
      where: {
        isActive: true, // Only return active programs
      },
      select: {
        id: true,
        name: true,
        displayName: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json(programs, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load programs';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}