const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    butInstall.addEventListener('click', async () => {
        // Hide the app provided install promotion
        butInstall.style.display = 'none';
        // Show the install prompt
        const promptEvent = window.deferredPrompt;
        if (promptEvent) {
            promptEvent.prompt();
            const result = await promptEvent.userChoice;
            console.log('User response to the install prompt:', result);
            // Clear prompt after use - empoty the garbage
            window.deferredPrompt = null;
        }
    });
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Log the event to analytics or other backend systems
    console.log('PWA was installed.', event);
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null;
});


const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
