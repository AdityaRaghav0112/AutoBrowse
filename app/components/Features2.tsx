import type { ReactNode } from 'react'

import { Cpu, Laptop, ShieldCheck } from 'lucide-react'

type Tone = 'emerald' | 'sky' | 'amber'

const toneStyles: Record<
  Tone,
  {
    card: string
    iconWrap: string
  }
> = {
  emerald: {
    card: 'bg-emerald-50/70',
    iconWrap: 'bg-emerald-100/60'
  },
  sky: {
    card: 'bg-sky-50/70',
    iconWrap: 'bg-sky-100/60'
  },
  amber: {
    card: 'bg-amber-50/70',
    iconWrap: 'bg-amber-100/60'
  }
}

function FeatureCard({
  title,
  description,
  icon,
  tone,
  className
}: {
  title: string
  description: string
  icon: ReactNode
  tone: Tone
  className?: string
}) {
  const styles = toneStyles[tone]

  return (
    <div
      className={[
        'rounded-2xl border border-black/10 p-8',
        'flex flex-col justify-between',
        styles.card,
        className
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <div
            className={[
              'w-12 h-12 rounded-xl border border-black/10',
              'flex items-center justify-center',
              styles.iconWrap
            ].join(' ')}
          >
            {icon}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-3 text-black">{title}</h3>
        <p className="text-neutral-600 leading-relaxed font-light">{description}</p>
      </div>
    </div>
  )
}

export default function Features2() {
  const features = [
    {
      title: 'Universal Control',
      description:
        'Automate any web application, regardless of complexity or framework. From SaaS to Legacy.',
      icon: <Laptop className="w-6 h-6 text-black" />,
      tone: 'emerald' as const,
      className: 'md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-2'
    },
    {
      title: 'Agentic Intelligence',
      description:
        'Powered by advanced LLMs that understand your intent and navigate like a human.',
      icon: <Cpu className="w-6 h-6 text-black" />,
      tone: 'sky' as const,
      className: 'md:col-start-2 md:row-start-1 md:col-span-2 md:row-span-4 md:p-10'
    },
    {
      title: 'Enterprise Grade',
      description:
        'Encrypted, secure, and built for scale. Your automation runs in isolated, professional environments.',
      icon: <ShieldCheck className="w-6 h-6 text-black" />,
      tone: 'amber' as const,
      className: 'md:col-start-4 md:row-start-3 md:col-span-1 md:row-span-2'
    }
  ]

  return (
    <section id="features" className="px-4 py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16 text-left border-l-2 border-black pl-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Built for the modern web.
          </h2>
          <p className="text-neutral-500 max-w-xl font-light text-lg">
            AutoBrowse provides the infrastructure to turn any browser into an autonomous worker.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              tone={feature.tone}
              className={feature.className}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
