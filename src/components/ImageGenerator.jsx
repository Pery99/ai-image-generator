import { useState } from "react";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [settings, setSettings] = useState({
    style: "realistic",
    size: "512x512",
    samples: 1,
  });

  const handleGenerate = async () => {
    if (!prompt) return;

    setIsLoading(true);
    // Add your AI image generation API call here
    setTimeout(() => {
      setIsLoading(false);
      setGeneratedImage("https://placeholder.com/512x512");
    }, 2000);
  };

  const handleDownload = async () => {
    if (!generatedImage) return;
    
    try {
      const response = await fetch(generatedImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `ai-generation-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 glass-effect p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-glass">
      <div className="flex flex-col gap-8 relative">
        <div className="space-y-2">
          <label className="text-sm uppercase tracking-wider text-gray-400 font-medium">
            Your Vision
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want to generate..."
            className="w-full h-[200px] p-6 bg-black/20 border border-white/10 rounded-2xl text-white font-inter text-lg resize-none focus:outline-none focus:border-indigo-500/50 focus:shadow-[0_0_20px_rgba(125,137,255,0.2)] transition-all placeholder:text-gray-500"
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm uppercase tracking-wider text-gray-400 font-medium">
              Settings
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-gray-500">Style</label>
                <select
                  value={settings.style}
                  onChange={(e) => setSettings({ ...settings, style: e.target.value })}
                  className="w-full p-4 bg-black/20 border border-white/10 rounded-xl text-white cursor-pointer hover:border-indigo-500/50 transition-all text-sm"
                >
                  <option value="realistic">Realistic</option>
                  <option value="artistic">Artistic</option>
                  <option value="abstract">Abstract</option>
                </select>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs text-gray-500">Size</label>
                <select
                  value={settings.size}
                  onChange={(e) => setSettings({ ...settings, size: e.target.value })}
                  className="w-full p-4 bg-black/20 border border-white/10 rounded-xl text-white cursor-pointer hover:border-indigo-500/50 transition-all text-sm"
                >
                  <option value="256x256">256x256</option>
                  <option value="512x512">512x512</option>
                  <option value="1024x1024">1024x1024</option>
                </select>
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isLoading || !prompt}
            className="w-full p-5 bg-gradient-cosmic rounded-xl font-medium text-lg tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(125,137,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:bg-gray-600 group"
          >
            <span className="flex items-center justify-center gap-2">
              {isLoading ? (
                <>
                  <span className="animate-pulse">Generating</span>
                  <span className="animate-pulse">...</span>
                </>
              ) : (
                "Generate Image"
              )}
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex-1 flex items-center justify-center bg-black/20 rounded-2xl overflow-hidden relative min-h-[500px] lg:min-h-0 border border-white/10">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
              <div className="w-14 h-14 border-4 border-white/10 border-t-indigo-500 rounded-full animate-spin drop-shadow-[0_0_10px_rgba(125,137,255,0.5)]"></div>
            </div>
          )}
          {generatedImage && !isLoading && (
            <img
              src={generatedImage}
              alt="Generated"
              className="max-w-full h-auto transition-all duration-300 hover:scale-102 rounded-lg"
            />
          )}
          {!generatedImage && !isLoading && (
            <div className="text-gray-500 text-center p-8">
              <p className="text-lg font-light">Your generated image will appear here</p>
            </div>
          )}
        </div>
        
        {generatedImage && !isLoading && (
          <button
            onClick={handleDownload}
            className="mt-4 p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-medium text-sm tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 group"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Image
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
