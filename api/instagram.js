export default async function handler(req, res) {
  const token = process.env.INSTAGRAM_TOKEN
  const userId = process.env.INSTAGRAM_USER_ID || '17841469619972405'

  if (!token) {
    return res.status(500).json({ error: 'Token de Instagram no configurado' })
  }

  const fields = 'id,media_url,thumbnail_url,permalink,media_type,caption'
  const url = `https://graph.facebook.com/${userId}/media?fields=${fields}&access_token=${token}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    if (!response.ok) {
      return res.status(response.status).json(data)
    }

    res.setHeader('Cache-Control', 's-maxage=300')
    res.json(data)
  } catch {
    res.status(500).json({ error: 'Error al conectar con Instagram' })
  }
}
