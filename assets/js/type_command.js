  const cursor = document.querySelector('.terminal-cursor');
  const cmdSpan = cursor?.closest('.terminal-line')?.querySelector('.cmd');

  document.querySelectorAll('.btn').forEach(btn => {
    const label = btn.textContent.trim().toLowerCase().replace(/\s+/g, '-');

    btn.addEventListener('mouseenter', () => {
      if (cmdSpan) cmdSpan.innerHTML = ` ./${label}.sh <span class="terminal-cursor"></span>`;
    });

    btn.addEventListener('mouseleave', () => {
      if (cmdSpan) cmdSpan.innerHTML = ` <span class="terminal-cursor"></span>`;
    });
  });