
import React, { useState, useEffect } from 'react';
import type { StoryPageData, PageId } from '../types';
import { generateImage } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner';

interface StoryPageProps {
  page: StoryPageData;
  onSelectChoice: (nextPageId: PageId) => void;
  onRestart: () => void;
  generatedImages: Record<PageId, string>;
  setGeneratedImages: React.Dispatch<React.SetStateAction<Record<PageId, string>>>;
}

const StoryPage: React.FC<StoryPageProps> = ({ page, onSelectChoice, onRestart, generatedImages, setGeneratedImages }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      if (!generatedImages[page.id]) {
        setIsLoading(true);
        setError(null);
        try {
          const imageUrl = await generateImage(page.illustrationPrompt);
          setGeneratedImages(prev => ({ ...prev, [page.id]: imageUrl }));
        } catch (err) {
          setError('이미지를 불러오는 데 실패했어요. 잠시 후 다시 시도해주세요.');
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page.id]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-500 animate-fade-in">
      <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center text-red-500 p-4">{error}</div>
        ) : (
          <img src={generatedImages[page.id]} alt={page.title} className="w-full h-full object-cover" />
        )}
      </div>

      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{page.title}</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">{page.story}</p>
        <p className="text-xl md:text-2xl font-semibold text-green-700 mb-6">{page.question}</p>

        {page.isEnding ? (
          <button
            onClick={onRestart}
            className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-full text-xl transition-transform duration-200 hover:scale-105 shadow-lg"
          >
            처음부터 다시 읽기
          </button>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => onSelectChoice(choice.nextPageId)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded-lg text-lg transition-transform duration-200 hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                {choice.text}
              </button>
            ))}
          </div>
        )}
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default StoryPage;
