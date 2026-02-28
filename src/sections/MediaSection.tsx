import { useState } from 'react';
import { Play, ExternalLink, Newspaper, Video } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const MediaSection = () => {
  const [showVideoDialog, setShowVideoDialog] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoTitle, setVideoTitle] = useState('');

  const videos = [
    {
      title: 'WAFB 9 News Interview',
      url: 'https://www.youtube.com/watch?v=QZPUwdLjlI0',
      thumbnail: '/images/leila_full.png',
      source: 'WAFB 9',
    },
    {
      title: 'WBRZ News Interview',
      url: 'https://www.youtube.com/watch?v=sPjqebrF3NU',
      thumbnail: '/images/leila_package.jpg',
      source: 'WBRZ',
    },
  ];

  const articles = [
    {
      title: 'Local Teen Launches Hope Resuscitated to Fight Overdoses with Free Narcan',
      source: 'Porch & Parish',
      url: 'https://www.porchandparish.com/2025/06/03/534591/local-teen-launches-hope-resuscitated-to-fight-overdoses-with-free-narcan',
    },
  ];

  const handleVideoClick = (video: typeof videos[0]) => {
    setVideoUrl(video.url);
    setVideoTitle(video.title);
    setShowVideoDialog(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#2D0A4E] to-[#0D0221]">
      <div className="section-padding max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Media <span className="text-gradient">Coverage</span>
          </h2>
          <p className="text-[#C77DFF] text-base max-w-xl mx-auto">
            Discover how Hope Resuscitated is making headlines and changing lives
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Videos */}
          <div className="animate-on-scroll">
            <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2">
              <Video size={24} className="text-[#9D4EDD]" />
              Videos
            </h3>
            <div className="space-y-4">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => handleVideoClick(video)}
                  className="w-full group relative overflow-hidden rounded-[18px] bg-[#1a0b2e] border border-white/10 hover:border-[#9D4EDD]/50 transition-all"
                >
                  <div className="aspect-video relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#9D4EDD] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play size={28} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 text-left">
                    <p className="text-xs text-[#C77DFF] uppercase tracking-wider mb-1">
                      {video.source}
                    </p>
                    <h4 className="text-white font-semibold group-hover:text-[#E0AAFF] transition-colors">
                      {video.title}
                    </h4>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2">
              <Newspaper size={24} className="text-[#9D4EDD]" />
              Articles
            </h3>
            <div className="space-y-4">
              {articles.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block card-dark p-6 hover:border-[#9D4EDD]/50 transition-all group"
                >
                  <p className="text-xs text-[#C77DFF] uppercase tracking-wider mb-2">
                    {article.source}
                  </p>
                  <h4 className="text-white font-semibold group-hover:text-[#E0AAFF] transition-colors mb-3">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-1 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                    <span>Read Article</span>
                    <ExternalLink size={14} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={showVideoDialog} onOpenChange={setShowVideoDialog}>
        <DialogContent className="bg-[#1a0b2e] border border-[#9D4EDD]/30 max-w-4xl p-0 overflow-hidden">
          <DialogHeader className="p-4 border-b border-white/10">
            <DialogTitle className="text-white font-display font-bold">
              {videoTitle}
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-black">
            {videoUrl && (
              <iframe
                src={videoUrl.replace('watch?v=', 'embed/')}
                title={videoTitle}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MediaSection;
