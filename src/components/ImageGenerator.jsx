import { useState } from "react";
import { generateImage } from "../services/imageAPI";
import { useApiKey } from "../context/ApiKeyContext";

const ImageGenerator = () => {
  const { apiKey, updateApiKey, clearApiKey, validateApiKey } = useApiKey();
  const [isApiKeyValid, setIsApiKeyValid] = useState(!!apiKey);
  const [showApiKeyInput, setShowApiKeyInput] = useState(!apiKey);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [error, setError] = useState(null);
  const [settings, setSettings] = useState({
    style: "realistic",
  });

  const handleGenerate = async () => {
    if (!prompt || !apiKey) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const imageUrl = await generateImage(prompt, settings.style, apiKey);
      if (!imageUrl) {
        throw new Error('Failed to generate image');
      }
      setGeneratedImage(imageUrl);
      setIsApiKeyValid(true);
    } catch (err) {
      setError(err.message || "Failed to generate image. Please try again.");
      if (err.message.includes('API key')) {
        setIsApiKeyValid(false);
        setShowApiKeyInput(true);
      }
      console.error('Generation error:', err);
    } finally {
      setIsLoading(false);
    }
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

  const handleRemoveApiKey = () => {
    clearApiKey();
    setIsApiKeyValid(false);
    setShowApiKeyInput(true);
    setGeneratedImage(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 glass-effect p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-glass">
      <div className="flex flex-col gap-8 relative">
        {showApiKeyInput ? (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm uppercase tracking-wider text-gray-400 font-medium">
                OpenAI API Key
              </label>
              {apiKey && (
                <button
                  onClick={handleRemoveApiKey}
                  className="text-xs text-red-400 hover:text-red-300 transition-colors"
                >
                  Remove Key
                </button>
              )}
            </div>
            <div className="relative">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => updateApiKey(e.target.value)}
                placeholder="Enter your OpenAI API key..."
                className="w-full p-4 bg-black/20 border border-white/10 rounded-xl text-white font-inter text-sm focus:outline-none focus:border-indigo-500/50 focus:shadow-[0_0_20px_rgba(125,137,255,0.2)] transition-all pr-24"
              />
              <button
                onClick={() => validateApiKey(apiKey) && setShowApiKeyInput(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                disabled={!validateApiKey(apiKey)}
              >
                {isApiKeyValid ? 'Change' : 'Save'}
              </button>
            </div>
            <p className="text-xs text-gray-500">
              Your API key is stored locally and never sent to our servers.
              Get your API key from{' '}
              <a
                href="https://platform.openai.com/api-keys"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                OpenAI Dashboard
              </a>
            </p>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">API Key: ••••••••</span>
            <div className="space-x-4">
              <button
                onClick={() => setShowApiKeyInput(true)}
                className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Change
              </button>
              <button
                onClick={handleRemoveApiKey}
                className="text-xs text-red-400 hover:text-red-300 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        )}

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
              Style
            </label>
            <select
              value={settings.style}
              onChange={(e) => setSettings({ ...settings, style: e.target.value })}
              className="w-full p-4 bg-black/20 border border-white/10 rounded-xl text-white cursor-pointer hover:border-indigo-500/50 transition-all text-sm"
            >
              <option value="realistic">Realistic</option>
              <option value="artistic">Artistic</option>
              <option value="abstract">Abstract</option>
              <option value="anime">Anime</option>
              <option value="cinematic">Cinematic</option>
            </select>
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
          {error && !isLoading && (
            <div className="text-red-400 text-center p-8">
              <p>{error}</p>
            </div>
          )}
          {generatedImage && !isLoading && !error && (
            <img
              src={generatedImage}
              alt="Generated"
              className="max-w-full h-auto transition-all duration-300 hover:scale-102 rounded-lg"
            />
          )}
          {!generatedImage && !isLoading && !error && (
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
