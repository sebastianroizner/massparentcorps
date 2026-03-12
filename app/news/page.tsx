import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News & Updates | Mass ParentCorps',
  description: 'Latest updates, stories, and announcements from Mass ParentCorps.',
}

const posts = [
  {
    slug: 'needs-assessment-completed',
    category: 'Milestone',
    date: 'January 2026',
    title: 'Phase 1 Needs Assessment Completed',
    excerpt: 'Mass ParentCorps has completed Phase 1 of its development, gathering insights from parent leaders and organizations across Massachusetts to inform the pilot design.',
    readTime: '3 min read',
    featured: true,
  },
  {
    slug: 'community-conversations',
    category: 'Outreach',
    date: 'Late 2025',
    title: 'Conversations with Community Organizations Begin',
    excerpt: 'Mass ParentCorps begins engaging community-based organizations across Massachusetts to explore the development of a Parent Leadership Workforce Credential.',
    readTime: '3 min read',
    featured: false,
  },
  {
    slug: 'pilot-cohort-recruitment',
    category: 'Program',
    date: '2026',
    title: 'Pilot Cohort Recruitment',
    excerpt: 'Mass ParentCorps launches recruitment for the first cohort of 40+ parent leaders representing more than 10 organizations across Massachusetts.',
    readTime: '4 min read',
    featured: false,
  },
  {
    slug: 'course-development',
    category: 'Academic',
    date: '2026',
    title: 'Course Development with Community Colleges',
    excerpt: 'Community colleges collaborate with Mass ParentCorps to develop a 3-credit course connecting parent leadership experience with academic learning and workforce preparation.',
    readTime: '4 min read',
    featured: false,
  },
  {
    slug: 'evaluation-framework',
    category: 'Research',
    date: '2026',
    title: 'Evaluation Framework Announced',
    excerpt: 'Mass ParentCorps announces an evaluation partnership with NYU Metro Center under the leadership of Joanna Geller to measure outcomes and inform future expansion.',
    readTime: '5 min read',
    featured: false,
  },
]

const categories = ['All', 'Milestone', 'Outreach', 'Program', 'Academic', 'Research']

export default function NewsPage() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* Photo Hero */}
      <section className="relative pt-20 overflow-hidden" style={{ background: '#0C3B38' }}>
        <div className="relative w-full h-[55vh] min-h-[380px]">
          <img
            src="/cbo-meeting.jpg"
            alt="Community organization meeting"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(12,59,56,0.6) 0%, rgba(12,59,56,0.88) 100%)' }}
          />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>News & Updates</span>
              <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
              <h1 className="mt-6 text-5xl md:text-6xl font-bold" style={{ color: '#F0DC9A' }}>
                From the field
              </h1>
              <p className="mt-4 text-xl max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Updates on pilot cohorts, partnerships, evaluation insights, and future opportunities
                as Mass ParentCorps grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20" style={{ background: '#FBF7E8' }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Category filter */}
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
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0C3B38' }}>Stay connected</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  Get updates about pilot cohorts, partnerships, evaluation insights, and future
                  opportunities delivered directly to your inbox.
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
