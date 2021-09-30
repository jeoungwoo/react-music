// MusicCard.js 는 단어 카드 하나를 의미하는 컴포넌트

import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// react-icons 라이브러리 사용
import {TiTickOutline, TiTick, TiEdit, TiTimes } from "react-icons/ti";

// redux
import { deleteMusicFB, updateCompleteFB } from "./redux/module/musics";

// 상위 컴포넌트에서 하위 컴포넌트의 리액트 요소를 참조(ref)하기 위해 fowardRef 사용
const MusicCard = forwardRef(({ music_obj }, ref) => {
    const { music, singer, url, comment, completed, id} =
        music_obj;

    const dispatch = useDispatch();

    // 토글 함수
    const toggleCheck = (music) => {
        dispatch(updateCompleteFB(music));
    };

    // Card 삭제 함수
    const deleteCard = (id) => {
        const password = prompt("비밀번호를 입력해주세요");
        // 삭제를 막기 위해 임시로 막아두었습니다.
        if (password !== id) {
            alert("비밀번호가 틀려 삭제할 수 없습니다.");
            return;
        }
        dispatch(deleteMusicFB(id));
    };

    return (
        <Card completed={`${completed}`} ref={ref}>
            <BtnBox>
                <button onClick={() => toggleCheck(music_obj)}>
                    {completed ? <AfterCheck /> : <BeforeCheck />}
                </button>
                <Link
                    to={{
                        pathname: `/music/${id}/edit`,
                        state: music_obj,
                    }}
                >
                    <Edit completed={`${completed}`} />
                </Link>
                <button onClick={() => deleteCard(id)}>
                    <Delete completed={`${completed}`} />
                </button>
            </BtnBox>
            <MusicSet completed={`${completed}`}>
                <Music>{music}</Music>
                <Singer>{singer}</Singer>
            </MusicSet>
            <Url completed={`${completed}`}>{url}</Url>
            <Comment completed={`${completed}`}>{comment}</Comment>
        </Card>
    );
});

const Card = styled.article`
    ${({ completed, theme }) => {
        const { colors, device } = theme;
        return css`
            position: relative;
            width: 100%;
            padding: 20px;
            border: 2px solid ${colors.mainColor};
            border-radius: 10px;
            background-color : ${completed === "false"
                ? "rgba(255, 255, 255, 0.4)"
                : colors.mainColor};
            transition: box-shadow 300ms ease-in-out;

            ${device.tablet} {
                width: calc((100% - 20px) / 2);
            }

            ${device.desktop} {
                width: calc((100% - (20px * 2)) / 3);
            }

            &:hover {
                box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
            }
        `;
    }}
`;

// styled-component의 css를 사용하여 스타일 요소를 재사용
const CardFontColor = css`
    color: ${({ completed, theme }) =>
        completed === "false" ? theme.colors.black : theme.colors.white}; 
`;

const MusicSet = styled.div`
    // 위에서 정의한 CardFontColor 재사용
    ${CardFontColor}
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    margin-bottom: 10px;
`;

const Music = styled.h4`
    margin-right: 5px;
    font-size: ${({ theme }) => theme.fontSize.sm};
`;

const Singer = styled.span`
    font-size: ${({ theme }) => theme.fontSize.sm};
`

const Url = styled.p`
  ${CardFontColor};
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const Comment = styled.p`
  ${CardFontColor};
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const BtnBox = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  align-items: center;

  & > button {
    padding: 3px;
  }
`;

const Icons = css`
  color: ${(props) =>
    props.completed === "false"
      ? props.theme.colors.mainColor
      : props.theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const BeforeCheck = styled(TiTickOutline)`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;
const AfterCheck = styled(TiTick)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const Edit = styled(TiEdit)`
  ${Icons};
`;

const Delete = styled(TiTimes)`
  ${Icons};
`;

export default MusicCard;
