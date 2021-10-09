export async function getAllTokensFOrUser() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('..')
    const posts = await res.json()
    return posts.map(post => {
      return {
        params: {
          id: post.id
        }
      }
    })
  }