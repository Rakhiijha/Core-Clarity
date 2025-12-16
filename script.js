const contents = [
  "AI Agents – The Future of Automation",
  "Why Overthinking Destroys Clarity",
  "How Complex Systems Actually Work",
  "Technology vs Human Thinking",
  "Clarity Is More Powerful Than Motivation"
];

const list = document.getElementById("contentList");

contents.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});

function scrollToSection() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}
