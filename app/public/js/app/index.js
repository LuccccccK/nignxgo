document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sample").addEventListener("click", () => {
        alert("aaa");
    })
    document.getElementById("hoge").addEventListener("click", () => {
        window.location.href = '/hoge';
    })
});
