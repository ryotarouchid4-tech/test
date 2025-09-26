import React, { useEffect, useState } from 'react'

export default function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [installed, setInstalled] = useState(false)

  useEffect(() => {
    function handleBeforeInstall(e) {
      e.preventDefault()
      setDeferredPrompt(e)
    }
    window.addEventListener('beforeinstallprompt', handleBeforeInstall)

    window.addEventListener('appinstalled', () => {
      setInstalled(true)
    })

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const choice = await deferredPrompt.userChoice
    if (choice.outcome === 'accepted') {
      setInstalled(true)
    }
    setDeferredPrompt(null)
  }

  return (
    <div className="app-root">
      <header>
        <h1>ようこそ — シンプル PWA テンプレート</h1>
      </header>

      <main>
        <p>このアプリは Vite + React で作った最小構成の PWA です。</p>

        {installed ? (
          <div className="notice">アプリはインストール済みです。</div>
        ) : deferredPrompt ? (
          <button onClick={handleInstallClick} className="install-btn">
            ホーム画面に追加（インストール）
          </button>
        ) : (
          <div className="hint">ブラウザのメニューから「ホーム画面に追加」してください。</div>
        )}

        <section className="card">
          <h2>動作チェック項目</h2>
          <ul>
            <li>ページが表示されること</li>
            <li>スマホで「ホーム画面に追加」できること</li>
            <li>オフラインで簡単なキャッシュが効くこと</li>
          </ul>
        </section>
      </main>

      <footer>
        <small>テンプレート — 公開前にアイコンを `public/icons/` に追加してください。</small>
      </footer>
    </div>
  )
}
