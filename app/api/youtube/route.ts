import { NextResponse } from "next/server";

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = "UCLthyvbpHXXMNmRIp6--YbA";

export async function GET() {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`
    );
    const data = await res.json();

    return NextResponse.json(data.items);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar vídeos"}, { status: 500});
  }
}