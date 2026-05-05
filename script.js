window.onload = () => {
    // Wait for the cinematic intro to finish (3.5 seconds)
    setTimeout(() => {
        const intro = document.getElementById('intro');
        const profiles = document.getElementById('profile-screen');
        
        intro.style.opacity = "0";
        
        setTimeout(() => {
            intro.classList.add('hidden');
            profiles.classList.remove('hidden');
            // Small delay to trigger the fade-in of profiles
            setTimeout(() => {
                profiles.style.opacity = "1";
            }, 50);
        }, 1000); // Wait for fade out to complete
    }, 4000); 
};

function showMain() {
    const profiles = document.getElementById('profile-screen');
    const main = document.getElementById('main-dashboard');
    
    profiles.style.opacity = "0";
    
    setTimeout(() => {
        profiles.classList.add('hidden');
        main.classList.remove('hidden');
        main.style.opacity = "1";
        
        // Start playing the video
        const video = document.getElementById('hero-video');
        if (video) {
            video.play();
        }
    }, 1000);
}