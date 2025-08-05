export function useYouTubeEmbedUrl(url: string) {
    let videoId = '';
    if (url.includes('youtu.be')) {
        videoId = url.split('/').pop()?.split('?')[0] || '';
    } else if (url.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(new URL(url).search);
        videoId = urlParams.get('v') || '';
    }
    return `https://www.youtube.com/embed/${videoId}`;
}
