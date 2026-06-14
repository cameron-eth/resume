import type { CSSProperties, ReactNode } from "react"

type Props = {
  bg?: string
  children: ReactNode
}

export function SlideStage({ bg, children }: Props) {
  const style: CSSProperties | undefined = bg ? { background: bg } : undefined
  return (
    <div className="slide-stage" style={style}>
      {children}
    </div>
  )
}
