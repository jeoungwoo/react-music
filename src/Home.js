// Home.js 는 메인페이지
// Intersection Observer를 이용한 무한 스크롤

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TiPlus } from "react-icons/ti";

// component, element
import MusicCard from "./MusicCard";
import { RoundBtn } from "./Btn";

// redux
import { loadMoreMusicsFB } from "./redux/module/musics";

const Home = () => {
    const musics = useSelector((state) => state.musics.music_list);
    const lastValue = useSelector((state) => state.musics.lastValue);

    const dispatch = useDispatch();

    // 무한 스크롤 구현
    const [target, setTarget] = useState(null);

    useEffect(() => {
        //새롭게 생성할 observer에 전달될 설정값
        let options = {
            threshold: "1",
        };

        //새롭게 생성할 observer가 수행할 행동 정의
        let handleIntersection = async ([entries], observer) => {
            if (!entries.isIntersecting) {
                return;
            } else {
                await dispatch(loadMoreMusicsFB(lastValue));
                observer.unobserve(entries.target);
            }
        };

        //새로운 observer 생성
        const io = new IntersectionObserver(handleIntersection, options);
        if (target) io.observe(target);

        return () => io && io.disconnect();
    }, [dispatch, lastValue, target]);

    return (
        <div>
            <Cards>
                {musics.map((music, idx) => {
                    //새로 불러온 데이터들 중 가장 마지막 값을 찾아 target으로 설정함
                    const lastItem = idx === musics.length - 1;
                    return (
                        <MusicCard 
                            key={music.id}
                            music_obj={music}
                            ref={lastItem ? setTarget : null}
                        />
                    );
                })}
            </Cards>
            <AddBtn to="/music/add">
                <Plus />
            </AddBtn>
        </div>
    );
};

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  padding: 50px 0;
`;

const Plus = styled(TiPlus)`
  font-size: 28px;
`;

const AddBtn = styled(Link)`
  ${RoundBtn};
  position: fixed;
  bottom: 10px;
  right: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  ${({ theme }) => theme.device.tablet} {
    bottom: 20px;
    right: 20px;
  }

  ${Plus} {
    transition: transform 300ms ease-in-out;
  }

  &:hover {
    ${Plus} {
      transform: rotate(90deg);
    }
  }
`;

export default Home;