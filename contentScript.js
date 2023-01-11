function run() {
    const page_url = location.href;
    const url = new URL (page_url)
    const paths = url.pathname.split('problems/')
    
    let problem = ""
    let n = paths.length
    
    if (n <= 1) return;
    problem = paths[n - 1]
    
    if (problem.includes('/')) return;
    url.hostname = "open.kattis.com"
    url.pathname = `/problems/${problem}`;
    const heading = document.querySelector("#instructions-close")

    if (heading != null && url.href != page_url) {
        const el = document.createElement('div');
        el.innerHTML = url.hostname + url.pathname;
        el.className = 'open-kattis';
        el.addEventListener('click', ()=> {
            location.href = url.href;
        });
        heading.insertAdjacentElement('beforebegin', el)
    }
}

run();