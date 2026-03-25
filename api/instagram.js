export default async function handler(req, res) {
  const token = process.env.INSTAGRAM_TOKEN

  if (!token) {
    return res.status(500).json({ error: 'Token de Instagram no configurado' })
  }

  const fields = 'id,media_url,thumbnail_url,permalink,media_type,caption'
  const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`

  const response = await fetch(url)
  const data = await response.json()

  if (!response.ok) {
    return res.status(response.status).json(data)
  }

  res.setHeader('Cache-Control', 's-maxage=300') // cache 5 minutos en Vercel
  res.json(data)
}
