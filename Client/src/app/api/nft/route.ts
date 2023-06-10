import { MoralisServices } from "@/services/MoralisServices";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

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
    const res = await MoralisServices.getNftCollection(wallet);
    return NextResponse.json({
      message: "NFTs fetched successfully",
      NFTS: res.result.flatMap((nft: any) => ({
        ...nft._data,
      })),
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      error: e,
    });
  }
}
