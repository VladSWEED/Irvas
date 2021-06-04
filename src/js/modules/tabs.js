const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
  tabs = document.querySelectorAll(tabSelector),
  content = document.querySelectorAll(contentSelector)

  const hideContent = () => {
    content.forEach(item => item.style.display = 'none')
    tabs.forEach(item => item.classList.remove(activeClass))
  }
  const showContent = (i = 0) => {
    content[i].style.display = 'block';
    tabs[i].classList.add(activeClass);
  }

  hideContent();
  showContent();

  header.addEventListener('click', e => {
    const target = e.target;

    if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
      tabs.forEach((item, i) => {
        if (item == target || target.parentNode == item) {
          hideContent();
          showContent(i);
        }
      })
    }
  })
}
export default tabs