import { MoralisServices } from "@/services/MoralisServices";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const wallet = searchParams.get("wallet");
    if (!wallet) {
      return NextResponse.json(
        {
          error: "No wallet provided",
        },
        { status: 400 }
      );
    }
    const apiKey = process.env.MORALIS_API_KEY as string;
    const res = await MoralisServices.getNftCollection(wallet, apiKey);
    return NextResponse.json({
      message: "NFTs fetched successfully",
      NFTS: res.result.flatMap((nft: any) => ({
        ...nft._data,
      })),
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      error: "Error fetching NFTs",
    });
  }
}
