document.querySelectorAll("pre").forEach((block) => {
    const code = block.querySelector("code") || document.createElement("code");

    if (!code.parentElement) {
        code.textContent = block.textContent;
        block.replaceChildren(code);
    }

    code.classList.add("language-java");
    hljs.highlightElement(code);
});
