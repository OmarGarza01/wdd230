// works cited: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading
//              https://www.youtube.com/watch?v=mC93zsEsSrg


const images = document.querySelectorAll("img[data-src]");


const imgOptions = {
    threshold: 1,
    rootMargin:"0px 0px 50px 0px" 
};

const imgObserver = new IntersectionObserver((entries, 
    imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting){
            return;
             } else  {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })

}, imgOptions);

function preloadImage (img){
    const src = img.getAttribute("data-src");
    if (!src){
        return;
    }
    img.src = src;
}

images.forEach(image => {
    imgObserver.observe(image);
});