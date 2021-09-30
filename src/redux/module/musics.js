// musics.js 는 ducks 패턴을 사용한 musics 모듈
// list 불러오기, 등록, 수정, 삭제

import { firestore } from "../../firebase";

const musics_db = firestore.collection("musics");

// 액션
const LOAD = "musics/LOAD";
const LOAD_MORE = "musics/LOAD_MORE";
const ADD = "music/ADD"
const MODIFY = "music/MODIFY";
const COMPLETE = "music/COMPLETE";
const DELETE = "music/DELETE";

// 초기값
const initialState = {
    music_list: [],
    lastValue: 0,
};

// 액션함수
export const loadMusics = (musics, lastValue) => ({
    type: LOAD,
    musics,
    lastValue,
});

export const loadMoreMusics = (musics, lastValue) => ({
    type: LOAD_MORE,
    musics,
    lastValue,
})

export const addMusic = (music) => ({ type: ADD, music });
export const updateComplete = (id) => ({ type: COMPLETE, id });
export const modifyMusic = (music) => ({ type: MODIFY, music });
export const deleteMusic = (id) => ({ type: DELETE, id });

// thunk

// firebase에서 단어들을 처음 불러오는 함수 (무한 스크롤 적용을 위해)
export const loadMusicsFB = () => {
    return function (dispatch) {
        let musics = [];
        let lastValue;
        musics_db
          .orderBy("date", "desc") // date라는 key를 기준으로 내림차순 정렬
          .limit(10) // 10개만
          .get()
          .then((docs) => {
              docs.forEach((doc) => {
                  musics = [...musics, { id: doc.id, ...doc.data() }];
                  lastValue = doc.data().date; // 마지막으로 가져온 date값 (다음 값을 가져오기 위해 저장)
              });
          })
          .then((res) => dispatch(loadMusics(musics, lastValue)));
    };
};

// firebase에서 다음 단어들을 불러오는 함수
export const loadMoreMusicsFB = (value) => {
    return function (dispatch) {
        let musics = [];
        let beforeNum = parseInt(value); // 가장 마지막으로 가져온 date값을 의미
        let lastValue;
        musics_db
          .orderBy("date", "desc")
          .startAfter(beforeNum) // 가장 마지막으로 가져온 값 다음부터 시작
          .limit(10)
          .get()
          .then((docs) => {
            docs.forEach((doc) => {
                if (docs.exists) {
                    musics = [...musics, { id: doc.id, ...doc.data()  }];
                    lastValue = doc.data().data;
                }
            });  
          })
          .then((res) => dispatch(loadMoreMusics(musics, lastValue)));
    };
};

// 새로운 music 등록 함수
export const addMusicFB = (music) => {
    return function (dispatch) {
        let new_music;
        musics_db
          .add(music)
          .then((doc) => {
              new_music = { ...music, id: doc.id};
          })
          .then((res) => dispatch(addMusic(new_music)));
    };
};

// 토글 함수
export const updateCompleteFB = (music) => {
    return function (dispatch) {
        musics_db.doc(music.id).update({ completed: !music.completed });
        dispatch(updateComplete(music.id));
    };
};

// 내용 변경 함수
export const modifyMusicFB =(music, id) => {
    return function (dispatch) {
        musics_db.doc(id).update(music);
        const new_music = { ...music, id };
        dispatch(modifyMusic(new_music));
    };
};

// 내용 삭제 함수
export const deleteMusicFB = (id) => {
    return function (dispatch) {
        musics_db.doc(id).delete();
        dispatch(deleteMusic(id));
    };
};

// reducer
function musics(state = initialState, action) {
    switch (action.type) {
        case "musics/LOAD":
            return {
                ...state,
                music_list: action.musics,
                lastValue: action.lastValue,
            };
        case "musics/LOAD_MORE":
            return {
                ...state,
                music_list: [...state.music_list, ...action.musics],
                lastValue: action.lastValue,
            };
        case "music/ADD":
            let added_musics = [...state.music_list, action.music];
            return {
                ...state,
                word_list: added_musics,
            };
        case "music/COMPLETE":
            const new_music_list = state.music_list.map((music) => 
                music.id === action.id ? { ...music, completed: !music.completed } : music
            );
            return {
                ...state,
                music_list: new_music_list,
            };
        case "music/MODIFY":
            let modified_musics = state.music_list.map((music) => 
                music.id === action.music.id ? { ...music, ...action.music} : music
            );
            return {
                ...state,
                music_list: modified_musics,
            };
        case "music/DELETE":
            let left_musics = state.music_list.filter((music) => music.id !== action.id);
            return {
                ...state,
                music_list: left_musics,
            };
        default:
            return state;
    }
}

export default musics;