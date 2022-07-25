var API = chrome || browser;

document.body.appendChild(
    Object.assign(
        document.createElement("script"),
        {
            type: "text/javascript",
            src: API.runtime.getURL('src/inject.js'),
            async: false
        }
    )
);
