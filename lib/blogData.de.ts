// German blog posts, keyed by the id (= English slug) of the original article.
import type { BlogPost } from './blogTypes'
import { post as agencyGuide } from './blog-de/how-to-choose-web-design-agency-netherlands'
import { post as fastWebsites } from './blog-de/why-fast-websites-win'
import { post as seoChecklist } from './blog-de/seo-checklist-2025'
import { post as wordpressVsLaravel } from './blog-de/wordpress-vs-laravel'
import { post as localSeo } from './blog-de/local-seo-netherlands'
import { post as wordpressProblems } from './blog-de/common-wordpress-problems-website-audit'
import { post as accessibilityErrors } from './blog-de/online-store-accessibility-errors-eaa'
import { post as developerDisappeared } from './blog-de/web-developer-disappeared-regain-control'

export const blogPostsDe: Record<string, BlogPost> = {
  'how-to-choose-web-design-agency-netherlands': agencyGuide,
  'why-fast-websites-win': fastWebsites,
  'seo-checklist-2025': seoChecklist,
  'wordpress-vs-laravel': wordpressVsLaravel,
  'local-seo-netherlands': localSeo,
  'common-wordpress-problems-website-audit': wordpressProblems,
  'online-store-accessibility-errors-eaa': accessibilityErrors,
  'web-developer-disappeared-regain-control': developerDisappeared,
}
