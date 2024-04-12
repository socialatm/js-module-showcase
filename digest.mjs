export function digestBody (body) {
    const hash = crypto.createHash('sha256')
    hash.update(body)
    return `sha-256=${hash.digest('base64')}`
  }