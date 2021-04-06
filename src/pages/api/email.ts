import type { NextApiRequest, NextApiResponse } from 'next'

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body

  const payload = {
    from: {
      email: 'felipe@redpentagon.com'
    },
    personalizations: [
      {
        to: [
          {
            email: 'livia@virtyva.com'
          }
        ],
        dynamic_template_data: {
          name,
          email,
          message
        }
      }
    ],
    template_id: 'd-b7487c6a9d4e41f3bbbd65ff70d73b6e'
  }

  await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    }
  })

  res.status(200).json({ success: true })
}

// export default handler(req, res)=> {
//   curl -X "POST" "" \
//   -H 'Authorization: Bearer <<YOUR_API_KEY>>' \
//   -H 'Content-Type: application/json' \
//   -d ''

// }
