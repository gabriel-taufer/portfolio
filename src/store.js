import { create } from 'zustand'

const usePageViewStore = create((set) => ({
  curriculumVitaeView: true,
  toggleCurriculumVitaeView: () => set((state) => ({ curriculumVitaeView: !state.curriculumVitaeView })),
  setCurriculumVitaeView: (value) => set((state) => ({ curriculumVitaeView: value })),
}))


export { usePageViewStore };
