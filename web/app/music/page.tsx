import { getPostsData } from "@/lib/getPosts"
import { setImage } from "@/lib/setImage"
import Image from "next/image"
import { DocumentRenderer } from "@keystone-6/document-renderer"
import { MusicNav } from "@/components/MusicNav"
// import type { Metadata } from "next"

export default async function Music() {
  const { posts } = await getPostsData("music")
  if (!posts) return null
  return (
    <div>
      <div className="float-left">
        <MusicNav posts={posts} />
      </div>
    </div>
  )
}
