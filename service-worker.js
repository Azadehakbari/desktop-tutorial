
const CACHE_NAME="todo_app_1";
const FILES_TO_CACHE=[
    "./",
    "./main.html",
    "./style.css",
    "./manifest"

]

self.addEventListener("install" ,(e)=>{
e.waitUntil(caches.open(CACHE_NAME).then((cache)=>{
    return;
    cache.addAll(FILES_TO_CACHE)
})
)
})
    
self.addEventListener("fetch",(event)=>{
    event.respondWith(caches.match(event.request).then((response)=>{
        return response || fetch(event.request);
    }))
})
