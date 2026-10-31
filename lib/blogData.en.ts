// English blog posts, keyed by id (= English slug).
// Older articles live in blogData.ts; new ones are one file each in lib/blog-en/.
import type { BlogPost } from './blogTypes'
import { blogPosts as legacy } from './blogData'
import { post as wordpressProblems } from './blog-en/common-wordpress-problems-website-audit'
import { post as accessibilityErrors } from './blog-en/online-store-accessibility-errors-eaa'
import { post as developerDisappeared } from './blog-en/web-developer-disappeared-regain-control'

const legacyPosts: Record<string, BlogPost> = Object.fromEntries(
  Object.entries(legacy).map(([id, post]) => [id, { slug: id, ...post } as BlogPost])
)

export const blogPostsEn: Record<string, BlogPost> = {
  ...legacyPosts,
  'common-wordpress-problems-website-audit': wordpressProblems,
  'online-store-accessibility-errors-eaa': accessibilityErrors,
  'web-developer-disappeared-regain-control': developerDisappeared,
}
