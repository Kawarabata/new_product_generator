export const state = () => ({
  targetList: [
    '金融業界',
    '運送業界',
    '家電業界',
    '介護業界',
    '書店',
    '教育業界',
    '飲食業界',
    '不動産業界',
    '医療業界',
    'IT業界',
    '旅行業界',
    'ゲーム業界',
    'アパレル業界',
    '働くママ',
    '専業主婦',
  ],
  serviceList: [
    'Twitter',
    'AirBnB',
    'Cook Pad',
    'Progate',
    'qiita',
    'マッチングアプリ',
    '口コミ・ランキングサイト',
    'Trello',
    'ニコニコ動画',
    '時間・予定管理アプリ',
  ],
})

export const getters = {
  randomTarget() {
    const randomIndex = Math.floor(Math.random() * state().targetList.length)
    return state().targetList[randomIndex]
  },
  randomService() {
    const randomIndex = Math.floor(Math.random() * state().serviceList.length)
    return state().serviceList[randomIndex]
  },
}
