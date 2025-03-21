import { Readable } from 'node:stream'
import { db } from '@/infra/db'
import { schema } from '@/infra/db/schemas'
import { z } from 'zod'

const uploadImageInput = z.object({
  fileName: z.string(),
  contentType: z.string(),
  contentStream: z.instanceof(Readable),
})

export type UploadImageInput = z.input<typeof uploadImageInput>

const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/webp', 'image/png']

export async function uploadImage(input: UploadImageInput) {
  const { fileName, contentType, contentStream } = uploadImageInput.parse(input)

  if (!allowedMimeTypes.includes(input.contentType)) {
    throw new Error('Invalid content type')
  }

  // TODO: Upload the image to Cloudflare R2

  await db.insert(schema.uploads).values({
    name: fileName,
    remoteKey: fileName,
    remoteUrl: fileName,
  })
}
