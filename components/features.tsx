import {Card, CardContent, CardHeader} from '@/components/ui/card'
import {ShieldCheck, Shuffle, Zap} from 'lucide-react'
import {ReactNode} from 'react'

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">📔 Everything you need, in one place</h2>
          <p className="mt-4">✨RichNote combines simplicity with power — quick notes, flexible formatting, and full control over your content.</p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          <Card className="group bg-background">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Zap
                  className="size-6"
                  aria-hidden
                />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Lightning-fast notes</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">Capture ideas in seconds. An intuitive interface makes it effortless to go from thought to note.</p>
            </CardContent>
          </Card>

          <Card className="group bg-background">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Shuffle
                  className="size-6"
                  aria-hidden
                />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Flexible style️</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">Plain text, lists, highlights, or code snippets — format notes your way.</p>
            </CardContent>
          </Card>

          <Card className="group bg-background">
            <CardHeader className="pb-3">
              <CardDecorator>
                <ShieldCheck
                  className="size-6"
                  aria-hidden
                />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Privacy first</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">Your notes are yours. Local-first design and optional encryption keep your content safe.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

const CardDecorator = ({children}: { children: ReactNode }) => (
  <div
    className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
  </div>
)