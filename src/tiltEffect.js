export const applyTiltEffect = (selector) => {
  const elements = document.querySelectorAll(selector);

  const handleMouseMove = (e) => {
    elements.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      item.style.transform = `rotateX(${y * -0.05}deg) rotateY(${x * 0.05}deg)`;
    });
  };

  const resetTransform = () => {
    elements.forEach((item) => {
      item.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseleave', resetTransform);
};
