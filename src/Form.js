// Form.js 는 리스트를 새로 등록하는 경우 사용되는 Form 컴포넌트입니다.

import React, {useRef} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

// component, element
import CustomInput from "./CustomInput";
import {RectangleBtn} from "./Btn";

// redux
import { addMusicFB, modifyMusicFB } from "./redux/module/musics";


const Form = (props) => {
    const data = props.location.state;
    
    const dispatch = useDispatch();

    const musicRef = useRef(null);
    const singerRef = useRef(null);
    const urlRef = useRef(null);
    const commentRef = useRef(null);

    // getFormData 함수
    // -입력된 모든 값을 가져옴
    // - 유효성 검사
    // - 모든 값들이 들어있는 하나의 객체를 변환

    const getFormData = () => {
        const music = musicRef.current.value.trim();
        const singer = singerRef.current.value.trim();
        const url = urlRef.current.value.trim();
        const comment = commentRef.current.value.trim();

        // 유효성 검사
        if (!music || !singer || !url || !comment) {
            alert("아직 입력하지 않은 항목이 있습니다!");
            return false;
        }
        
        // flase 일 경우 반환 할 object
        const music_obj ={
            music,
            singer,
            url,
            comment,
        };

        return music_obj;
    };

    // musicForm을 등록하는 함수
    const submitmusic  = (e) => {
        e.preventDefault();

        const music_obj = getFormData();
        if (!music_obj) return;

        // firebase에서 시간순으로 불러올 수 있도록 date 값을 추가
        const new_music_obj = { ...music_obj, date: Date.now(), complated: false};

        dispatch(addMusicFB(new_music_obj, data.id));
        props.history.push("/");
    };

    // 단어를 수정하는 함수
    const updateMusic = (e) => {
        e.preventDefault();

        const music_obj = getFormData();
        if (!music_obj) return;

        dispatch(modifyMusicFB(music_obj, data.id));
        props.history.push("/");
    };

    return (
        <Container>
            <Subtitle>{data ? "music 수정" : "music 추가하기"}</Subtitle>
            <Formpage onsubmit={data ? updateMusic : submitmusic}>
                <CustomInput 
                    title="music"
                    idText="input-music"
                    ref={musicRef}
                    currentValue={data && data.music}
                />
                <CustomInput 
                    title="singer"
                    idText="input-singer"
                    ref={singerRef}
                    currentValue={data && data.singer}
                />
                <CustomInput 
                    title="url"
                    idText="input-url"
                    ref={urlRef}
                    currentValue={data && data.url}
                />
                <CustomInput 
                    title="comment"
                    idText="input-comment"
                    ref={commentRef}
                    currentValue={data && data.comment}
                />
                <SaveBtn type="submit">{data ? "수정" : "저장하기"}</SaveBtn>
            </Formpage>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  margin: 50px auto;

  ${({ theme }) => theme.device.tablet} {
    margin: 80px auto;
  }
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.mainColor};
`;

const Formpage = styled.form`
  display: flex;
  flex-direction: column;
`;

const SaveBtn = styled.button`
  ${RectangleBtn};
  align-self: center;
`;

export default Form;