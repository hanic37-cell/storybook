
import type { StoryData } from '../types';

export const STORY_PAGES = {
  PAGE_1: 'PAGE_1',
  PAGE_2: 'PAGE_2',
  PAGE_3: 'PAGE_3',
  PAGE_4: 'PAGE_4',
  PAGE_5_GOOD: 'PAGE_5_GOOD',
  PAGE_5_LESSON: 'PAGE_5_LESSON',
} as const;


export const storyData: StoryData = {
  [STORY_PAGES.PAGE_1]: {
    id: STORY_PAGES.PAGE_1,
    title: '햇살 좋은 오후',
    story: '다람쥐 토리는 공원으로 소풍을 갔어요. 그런데 공원에 쓰레기가 가득했어요. 꽃과 나무들이 슬퍼 보여요.',
    illustrationPrompt: '다음 장면을 아이들이 좋아할 만한 밝고 귀여운 일러스트로 그려주세요: 귀여운 다람쥐 캐릭터가 쓰레기로 더러워진 공원을 보고 슬픈 표정을 짓고 있어요. 주변에는 시든 꽃과 슬픈 표정의 나무가 있어요. 스타일: 동화책 일러스트, 밝은 색상, 단순하고 명확한 그림',
    question: '토리는 어떻게 해야 할까요?',
    choices: [
      { text: '친구들과 힘을 합쳐 쓰레기를 치운다.', nextPageId: STORY_PAGES.PAGE_2 },
      { text: '에잇, 더러워! 그냥 다른 데서 논다.', nextPageId: STORY_PAGES.PAGE_3 },
      { text: '엄마에게 가서 물어본다.', nextPageId: STORY_PAGES.PAGE_4 },
    ],
    isEnding: false,
  },
  [STORY_PAGES.PAGE_2]: {
    id: STORY_PAGES.PAGE_2,
    title: '쓰레기 분리수거 대작전',
    story: '토리는 친구들을 불렀어요. 플라스틱 병, 종이 상자, 비닐 봉지... 종류가 정말 많아요! 모두 함께 힘을 합쳐 쓰레기를 모았어요.',
    illustrationPrompt: '다음 장면을 아이들이 좋아할 만한 밝고 귀여운 일러스트로 그려주세요: 귀여운 다람쥐 캐릭터가 토끼, 곰돌이 친구들과 함께 쓰레기를 줍고 있어요. 모두 열심히 일하는 모습이에요. 주변에는 플라스틱, 종이 등 다양한 쓰레기가 있어요. 스타일: 동화책 일러스트, 밝은 색상, 단순하고 명확한 그림',
    question: '모은 쓰레기는 어떻게 해야 할까요?',
    choices: [
      { text: '종류별로 나누어 분리수거함에 넣는다.', nextPageId: STORY_PAGES.PAGE_5_GOOD },
      { text: '한꺼번에 모아서 쓰레기통에 버린다.', nextPageId: STORY_PAGES.PAGE_5_LESSON },
    ],
    isEnding: false,
  },
  [STORY_PAGES.PAGE_3]: {
    id: STORY_PAGES.PAGE_3,
    title: '슬퍼하는 자연',
    story: '토리는 쓰레기를 피해 다른 곳으로 갔어요. 하지만 쓰레기 냄새 때문에 동물 친구들이 모두 떠나고 없었어요. 예쁜 꽃들도 모두 시들었어요.',
    illustrationPrompt: '다음 장면을 아이들이 좋아할 만한 밝고 귀여운 일러스트로 그려주세요: 귀여운 다람쥐 캐릭터가 쓰레기 더미 옆에서 홀로 시무룩하게 앉아있어요. 주변에는 시든 꽃과 떠나가는 동물 친구들의 뒷모습이 보여요. 하늘은 약간 어두워요. 스타일: 동화책 일러스트, 채도가 낮은 색상, 단순하고 명확한 그림',
    question: '공원이 다시 깨끗해지려면 어떻게 해야 할까요?',
    choices: [
      { text: '혼자라도 돌아가서 쓰레기를 줍기 시작한다.', nextPageId: STORY_PAGES.PAGE_5_GOOD },
      { text: '내일은 깨끗해지겠지? 그냥 집에 간다.', nextPageId: STORY_PAGES.PAGE_5_LESSON },
    ],
    isEnding: false,
  },
  [STORY_PAGES.PAGE_4]: {
    id: STORY_PAGES.PAGE_4,
    title: '엄마의 지혜',
    story: '토리는 엄마에게 달려가 물었어요. 엄마는 "우리가 버린 쓰레기 때문에 자연이 아픈 거란다. 작은 힘이라도 모이면 큰 변화를 만들 수 있어." 라고 알려주셨어요.',
    illustrationPrompt: '다음 장면을 아이들이 좋아할 만한 밝고 귀여운 일러스트로 그려주세요: 귀여운 아기 다람쥐 캐릭터가 엄마 다람쥐의 설명을 진지하게 듣고 있어요. 엄마 다람쥐는 지구가 그려진 책을 보여주며 다정하게 이야기하고 있어요. 배경은 아늑한 집 안이에요. 스타일: 동화책 일러스트, 따뜻한 색상, 단순하고 명확한 그림',
    question: '엄마의 말을 들은 토리는 무엇을 결심했을까요?',
    choices: [
      { text: '다시 공원으로 가서 깨끗하게 만들기로 마음 먹는다.', nextPageId: STORY_PAGES.PAGE_5_GOOD },
      { text: '나 혼자서는 힘들어. 어쩔 수 없다고 생각한다.', nextPageId: STORY_PAGES.PAGE_5_LESSON },
    ],
    isEnding: false,
  },
  [STORY_PAGES.PAGE_5_GOOD]: {
    id: STORY_PAGES.PAGE_5_GOOD,
    title: '지구를 지키는 작은 영웅',
    story: '토리가 용기를 내자, 친구들이 모두 돌아와 도왔어요! 공원은 다시 깨끗해졌고, 꽃들은 활짝 웃었어요. 토리와 친구들은 지구를 지키는 작은 영웅이 되었답니다!',
    illustrationPrompt: '다음 장면을 아이들이 좋아할 만한 밝고 귀여운 일러스트로 그려주세요: 매우 깨끗하고 아름다운 공원에서 다람쥐, 토끼, 곰돌이 등 동물 친구들이 모두 함께 활짝 웃으며 놀고 있어요. 무지개가 떠 있고, 햇살이 밝게 비춰요. 모두가 행복한 모습이에요. 스타일: 동화책 일러스트, 매우 밝고 화사한 색상, 단순하고 명확한 그림',
    question: '참 잘했어요! 우리는 모두 지구를 지킬 수 있어요.',
    choices: [],
    isEnding: true,
  },
  [STORY_PAGES.PAGE_5_LESSON]: {
    id: STORY_PAGES.PAGE_5_LESSON,
    title: '내일은 꼭!',
    story: '공원은 계속 더러웠고, 토리는 마음이 무거웠어요. 토리는 혼자서는 힘들지만, 내일은 꼭 친구들과 함께 공원을 깨끗하게 만들겠다고 다짐했어요.',
    illustrationPrompt: '다음 장면을 아이들이 좋아할 만한 밝고 귀여운 일러스트로 그려주세요: 귀여운 다람쥐 캐릭터가 창밖의 더러운 공원을 보며 생각에 잠겨있어요. 표정에는 아쉬움과 결심이 함께 담겨 있어요. 방 안은 노을 빛으로 물들어 있어요. 스타일: 동화책 일러스트, 차분한 색상, 단순하고 명확한 그림',
    question: '작은 실천 하나가 지구를 건강하게 만들어요. 우리 함께 노력해요!',
    choices: [],
    isEnding: true,
  },
};
