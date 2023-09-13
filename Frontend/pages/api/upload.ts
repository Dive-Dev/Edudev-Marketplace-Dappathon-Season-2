import type { NextApiRequest, NextApiResponse } from 'next'
import { SpheronClient, ProtocolEnum } from "@spheron/storage";


interface TokenRes {
  uploadToken: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TokenRes>,
) {
  try {
    const bucketName = "DAPPATHON"; 
    const protocol = ProtocolEnum.IPFS;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiJlMzEyOWFhYzE2MTYzYjA2NGI1YWZkMjc2NTQyZDcxZWRlYjVkMGI5OWE3OTI4N2M3OWZlMjg4MDZmNDA5NjI0NDg5MmU2MmYwMWIzODcxN2EzM2FmNWU1MDRlYjNlMjFlM2MyYWU5YjE2ZWZhOGFiNDE3M2VlZjFlNDg0MGY5NyIsImlhdCI6MTY5NDYxMjEyMCwiaXNzIjoid3d3LnNwaGVyb24ubmV0d29yayJ9.a9QJcrXoW-CdpFVFCje4OIqr2CR4NPkYGMWV_PssvTs" as string;
 
    const client = new SpheronClient({ token });
 
    const { uploadToken } = await client.createSingleUploadToken({
      name: bucketName,
      protocol,
    });
 
    res.status(200).json({
      uploadToken,
    });
  } catch (error) {
    console.error(error);
  }
}