function initTypingEffect() {
  var typedEl = document.getElementById('hero-typed');
  if (!typedEl) return;

  new Typed('#hero-typed', {
    strings: [
      '> run growthway_hack --mode=inovacao',
      '> deploy startup.mvp --target=futuro',
      '> connect mentors --with=builders',
      '> launch hackathon --date=2026-03-06',
      '> build solution --challenge=real_world',
    ],
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 2500,
    startDelay: 1500,
    loop: true,
    cursorChar: '|',
    smartBackspace: true
  });
}
