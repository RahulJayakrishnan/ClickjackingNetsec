chrome.webRequest.onBeforeRequest.addListener(function(details) {
    /*
     * 1a. Required
     * This is the regular expression that matches the start script tag
     * OR matches both the start and end tags.
     * The regular expression must be multi-line case insensitive.
     * DO NOT change the variable name!
     * You must use this variable!
     */
    const start_script_re = null;
    /*
     * 1b. Optional
     * This is the regular expression corresponding to the end script tag.
     * The regular expression must be multi-line case insensitive.
     * DO NOT change the variable name!
     * Leave the variable assigned to null if you are only using one regex.
     */
    const end_script_re = null;

    if (details.method === "GET") {
        /*
         * 2a. Required
         * Handle GET requests
         */

    } else if (details.method === "POST") {
        /*
         * 2b. Required
         * Handle POST requests
         */

    }
}, {
    urls: ["<all_urls>"]
}, ["blocking", "requestBody"]);
