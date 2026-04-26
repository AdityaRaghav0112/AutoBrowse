'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches

    const minLoadingMs = prefersReducedMotion ? 450 : 1600
    const exitMs = prefersReducedMotion ? 0 : 800

    const startExitTimer = window.setTimeout(() => {
      setIsExiting(true)
    }, minLoadingMs)

    const completeTimer = window.setTimeout(() => {
      onLoadingComplete()
    }, minLoadingMs + exitMs)

    return () => {
      window.clearTimeout(startExitTimer)
      window.clearTimeout(completeTimer)
    }
  }, [onLoadingComplete])

  return (
    <div
      className={[
        'fixed inset-0 bg-gray-100',
        'flex items-center justify-center',
        'transition-transform duration-700 ease-in-out',
        'transition-opacity duration-700 ease-in-out',
        isExiting ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      ].join(' ')}
      style={{
        pointerEvents: isExiting ? 'none' : 'auto',
        zIndex: 50
      }}
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="loaderWrap" aria-hidden>
          <div className="loaderShape" />
        </div>
        <div className="text-center">
          <p className="text-neutral-500 text-xs font-light tracking-[0.35em]">LOADING</p>
        </div>
      </div>

      <style>{`
        .loaderWrap {
          width: 84px;
          height: 84px;
          display: grid;
          place-items: center;
          transform: translateZ(0);
          animation: loaderFloat 1.8s ease-in-out infinite;
          filter: drop-shadow(0 10px 18px rgba(0, 0, 0, 0.08));
        }

        .loaderShape {
          width: 64px;
          height: 64px;
          border: 2px solid rgba(0, 0, 0, 0.75);
          background: rgba(0, 0, 0, 0.03);
          will-change: transform, clip-path;
          transform: rotate(0deg) scale(1);
          animation: shapeMorph 1.7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes loaderFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        /*
          The clip-path keyframes all use polygon() with 12 points,
          so the browser can interpolate smoothly between “triangle”, “square”, and “circle-like”.
        */
        @keyframes shapeMorph {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
            clip-path: polygon(
              50% 6%,
              50% 6%,
              50% 6%,
              86% 88%,
              86% 88%,
              86% 88%,
              14% 88%,
              14% 88%,
              14% 88%,
              50% 6%,
              50% 6%,
              50% 6%
            );
          }
          33% {
            transform: rotate(90deg) scale(1.05);
            clip-path: polygon(
              18% 18%,
              50% 18%,
              82% 18%,
              82% 50%,
              82% 82%,
              50% 82%,
              18% 82%,
              18% 50%,
              18% 18%,
              50% 18%,
              82% 18%,
              82% 50%
            );
          }
          66% {
            transform: rotate(180deg) scale(1);
            clip-path: polygon(
              50% 8%,
              71% 13%,
              87% 29%,
              92% 50%,
              87% 71%,
              71% 87%,
              50% 92%,
              29% 87%,
              13% 71%,
              8% 50%,
              13% 29%,
              29% 13%
            );
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loaderWrap {
            animation: none;
          }
          .loaderShape {
            animation: none;
            clip-path: polygon(
              50% 8%,
              71% 13%,
              87% 29%,
              92% 50%,
              87% 71%,
              71% 87%,
              50% 92%,
              29% 87%,
              13% 71%,
              8% 50%,
              13% 29%,
              29% 13%
            );
          }
        }
      `}</style>
    </div>
  )
}
