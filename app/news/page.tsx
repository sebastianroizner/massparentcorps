import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'News | Mass ParentCorps',
  description: 'Latest updates, stories, and announcements from Mass ParentCorps.',
}

const posts = [
  {
    slug: 'focus-groups-complete',
    category: 'Research',
    date: 'January 28, 2026',
    title: 'Mass ParentCorps Completes Statewide Focus Groups',
    excerpt: 'Twenty-seven parent leaders across Massachusetts participated in six focus groups to shape the MPC credential pathway. Here\'s what we heard.',
    readTime: '5 min read',
    featured: true,
  },
  {
    slug: 'five-cbo-partners',
    category: 'Partnership',
    date: 'December 10, 2025',
    title: 'Five Community-Based Organizations Join the MPC Coalition',
    excerpt: 'We\'re proud to announce that five CBOs across Massachusetts have committed to co-designing and hosting the Parent Leadership Credential program.',
    readTime: '3 min read',
    featured: false,
  },
  {
    slug: 'credential-pathway-announced',
    category: 'Program',
    date: 'October 22, 2025',
    title: 'Introducing the MPC Parent Leadership Credential',
    excerpt: 'Mass ParentCorps announces a new four-element credential pathway — combining college coursework, field experience, specialized training, and a capstone project.',
    readTime: '4 min read',
    featured: false,
  },
  {
    slug: 'backbone-model-explainer',
    category: 'Explainer',
    date: 'September 15, 2025',
    title: 'What Is a Backbone Model? How MPC Coordinates Without Duplicating',
    excerpt: 'MPC operates as a backbone organization — coordinating funding, curriculum, and credentials while partner CBOs remain the direct connectors to families.',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'ny-metro-center-visit',
    category: 'Learning',
    date: 'August 5, 2025',
    title: 'Learning from New York: A Visit to the NY Metro Center',
    excerpt: 'The MPC team traveled to New York City to learn from the NY Metro Center\'s established parent leadership credential model — and returned with key lessons for Massachusetts.',
    readTime: '4 min read',
    featured: false,
  },
]

const categories = ['All', 'Research', 'Partnership', 'Program', 'Explainer', 'Learning']

export default function NewsPage() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* Hero */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#0C3B38' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute rounded-full" style={{ top: '-20%', left: '-5%', width: 600, height: 600, background: 'radial-gradient(circle, #2EC4B6 0%, transparent 70%)', opacity: 0.1, filter: 'blur(80px)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>News & Updates</span>
          <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          <h1 className="mt-6 text-5xl md:text-6xl font-bold" style={{ color: '#F0DC9A' }}>
            From the field
          </h1>
          <p className="mt-4 text-xl max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Stories, research updates, and announcements as Mass ParentCorps grows.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20" style={{ background: '#FBF7E8' }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Category filter — visual only */}
          <div className="flex flex-wrap gap-2 mb-14">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-all"
                style={{
                  background: i === 0 ? '#0C3B38' : 'white',
                  color: i === 0 ? '#F0DC9A' : '#4B5563',
                  border: '1px solid',
                  borderColor: i === 0 ? '#0C3B38' : 'rgba(0,0,0,0.1)',
                }}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <div
              className="rounded-3xl overflow-hidden mb-10"
              style={{ background: '#0C3B38' }}
            >
              <div className="p-10 md:p-14">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{ background: 'rgba(46,196,182,0.2)', color: '#2EC4B6' }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {featured.date}
                  </span>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: '#F0DC9A' }}>
                  {featured.title}
                </h2>
                <p className="text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {featured.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
                  style={{ background: '#F0DC9A', color: '#0C3B38' }}
                >
                  Read article →
                </span>
                <p className="mt-3 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Full articles coming soon</p>
              </div>
            </div>
          )}

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <div
                key={post.slug}
                className="rounded-2xl p-8 flex flex-col bg-white"
                style={{ border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(46,196,182,0.12)', color: '#1A6B63' }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: '#9CA3AF' }}>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold leading-snug mb-3 flex-1" style={{ color: '#0C3B38' }}>
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <span className="text-xs" style={{ color: '#9CA3AF' }}>{post.date}</span>
                  <span className="text-sm font-semibold" style={{ color: '#2EC4B6' }}>Read →</span>
                </div>
              </div>
            ))}

            {/* Subscribe card */}
            <div
              className="rounded-2xl p-8 flex flex-col justify-between"
              style={{ background: '#FBF7E8', border: '1px solid rgba(46,196,182,0.2)' }}
            >
              <div>
                <div className="text-2xl mb-3">📬</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0C3B38' }}>Stay in the loop</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  Get MPC updates, research findings, and program news delivered directly to your inbox.
                </p>
              </div>
              <a
                href="mailto:marostrategies@gmail.com?subject=Subscribe to MPC Updates"
                className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold"
                style={{ background: '#0C3B38', color: '#F0DC9A' }}
              >
                Subscribe via Email →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
