import OpenAI from 'openai';

export const generateImage = async (prompt, style, apiKey) => {
  if (!apiKey) {
    throw new Error('Please provide an OpenAI API key');
  }

  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
  });

  try {
    const enhancedPrompt = `Create an image with the following description: ${prompt}. Apply ${style} style. Make it highly detailed and professional quality.`;
    
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: enhancedPrompt,
      n: 1,
      size: "1024x1024",
      quality: "hd",
      style: "vivid"
    });

    if (!response.data || response.data.length === 0) {
      throw new Error('No image was generated');
    }

    return response.data[0].url;
  } catch (error) {
    console.error('Error details:', error.response || error);
    throw new Error(error.message || 'Failed to generate image');
  }
};
