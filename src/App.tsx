function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 헤더 (네비게이션) */}
      <header className="w-full">
        <nav>
          <h1>Portfolio</h1>
          {/* 네비게이션 링크 위치 */}
        </nav>
      </header>

      {/* 메인 콘텐츠 영역 */}
      <main className="grow container mx-auto px-4">
        {/* 자기소개 섹션 */}
        <section id="about" className="py-10">
          <h2>About Me</h2>
        </section>

        {/* 프로젝트 섹션 */}
        <section id="projects" className="py-10">
          <h2>Projects</h2>
        </section>

        {/* 연락처 섹션 */}
        <section id="contact" className="py-10">
          <h2>Contact</h2>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="w-full py-6 text-center">
        <p>Copyright © 2026</p>
      </footer>
    </div>
  );
}

export default App;
