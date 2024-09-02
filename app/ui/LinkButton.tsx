"use client"

import { useRouter } from "next/navigation"

type LinkButtonProps = {
  to: string
  replace?: boolean
  refresh?: boolean
  children: React.ReactNode
}

export default function LinkButton({
  to,
  replace,
  refresh,
  children,
}: LinkButtonProps) {
  const router = useRouter()

  // router.replace는 browser history stack을 쌓지 않아 네비게이션 후 뒤로가기를 눌러도 이전 페이지 이동 x
  // router.refresh는 현재 라우트를 기준으로 페이지를 새로고침, 데이터도 다시 받아오고 서버컴포넌트도 다시 리렌더링함.
  const navigate = replace
    ? router.replace
    : refresh
      ? router.refresh
      : router.push

  return (
    <button
      type="button"
      onClick={() => navigate(to)}
      className="flex-auto m-3"
    >
      {children}
    </button>
  )
}
