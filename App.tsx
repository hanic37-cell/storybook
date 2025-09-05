
import React, { useState, useCallback } from 'react';
import StoryPage from './components/StoryPage';
import Header from './components/Header';
import { storyData, STORY_PAGES } from './constants/storyData';
import type { PageId } from './types';

const App: React.FC = () => {
  const [currentPageId, setCurrentPageId] = useState<PageId>(STORY_PAGES.PAGE_1);
  const [generatedImages, setGeneratedImages] = useState<Record<PageId, string>>({} as Record<PageId, string>);

  const handleSelectChoice = useCallback((nextPageId: PageId) => {
    setCurrentPageId(nextPageId);
  }, []);

  const handleRestart = useCallback(() => {
    setCurrentPageId(STORY_PAGES.PAGE_1);
  }, []);

  const currentPage = storyData[currentPageId];

  return (
    <div className="bg-green-50 min-h-screen font-sans text-gray-800 flex flex-col items-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <Header />
        <main className="mt-6">
          {currentPage ? (
            <StoryPage
              page={currentPage}
              onSelectChoice={handleSelectChoice}
              onRestart={handleRestart}
              generatedImages={generatedImages}
              setGeneratedImages={setGeneratedImages}
            />
          ) : (
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-red-500">오류!</h2>
              <p className="mt-2">이야기 페이지를 찾을 수 없어요. 처음부터 다시 시작해주세요.</p>
              <button
                onClick={handleRestart}
                className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-transform duration-200 hover:scale-105"
              >
                다시 시작하기
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
