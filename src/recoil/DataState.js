import {atom, selector} from "recoil"


// Home video data
export const videoState = atom({
    "key": "videoState",
    "default" : [
        {
            "index" : 0,
            "thumb" : `./contents/thumb/hq720 (0).webp`,
            "timer" : "14:21",
            "profile": `./contents/profile/profile(0).jpg`,
            "video_head" : `떡볶이 무한리필 vs 마라탕 무한리필! 단 한개만 골라야 한다면?ㅋㅋㅋ`,
            "channel_name" : `흔한남매`,
            "post_time" : `6일 전`,
            "view" : "56만회"
        },
        {
            "index" : 1,
            "thumb" : `./contents/thumb/hq720 (1).webp`,
            "timer" : "8:30",
            "profile": `./contents/profile/profile(1).jpg`,
            "video_head" : `솔랭인줄... 대회에서 나온 역대급 1인 캐리 모음!!`,
            "channel_name" : `지빠님`,
            "post_time" : `2년 전`,
            "view" : "209만회"
        },
        {
            "index" : 2,
            "thumb" : `./contents/thumb/hq720 (2).webp`,
            "timer" : "16:45",
            "profile": `./contents/profile/profile(2).jpg`,
            "video_head" : `훈련소에서 살 찔 틈이 없는데 살이 찌게 되는 이유 #푸른거탑제로 EP.11-01 #131016`,
            "channel_name" : `디글 클래식 :Diggle Classic`,
            "post_time" : `11일 전`,
            "view" : "32만회"
        },
        {
            "index" : 3,
            "thumb" : `./contents/thumb/hq720 (3).webp`,
            "timer" : "25:16",
            "profile": `./contents/profile/profile(3).jpg`,
            "video_head" : `겨울철 간단한 김장`,
            "channel_name" : `침착맨`,
            "post_time" : `2시간 전`,
            "view" : "9.3만회"
        },
        {
            "index" : 4,
            "thumb" : `./contents/thumb/hq720 (4).webp`,
            "timer" : "52:10",
            "profile": `./contents/profile/profile(4).jpg`,
            "video_head" : `Playlist 벌써부터 크리스마스 기다리는 사람? Merry Christmas Carol`,
            "channel_name" : `때껄룩`,
            "post_time" : `1년 전`,
            "view" : "592만회"
        },
        {
            "index" : 5,
            "thumb" : `./contents/thumb/hq720 (5).webp`,
            "timer" : "11:06",
            "profile": `./contents/profile/profile(5).jpg`,
            "video_head" : `절대 안죽는 흡혈탱커ㅋㅋㅋ스킬 한방=풀피 회복 ㅋㅋㅋㅋ[정글 아트록스]`,
            "channel_name" : `텔론`,
            "post_time" : `8일 전`,
            "view" : "13만회"
        },
        {
            "index" : 6,
            "thumb" : `./contents/thumb/hq720 (6).webp`,
            "timer" : "8:31",
            "profile": `./contents/profile/profile(6).jpg`,
            "video_head" : `호날두의 짜증과 수아레스의 오열... 캡틴 손흥민이 증명한 '슈퍼스타'의 역할 / 스포츠머그`,
            "channel_name" :`스포츠머그-SPORTSMUG`,
            "post_time" : `3개월 전`,
            "view" : "164만회"
        },
        {
            "index" : 7,
            "thumb" : `./contents/thumb/hq720 (7).webp`,
            "timer" : "41:44",
            "profile": `./contents/profile/profile(7).jpg`,
            "video_head" : `[#스트리드푸드파이터2] 아침엔 럼버잭, 점심엔 햄버거, 저녁엔 스테이크, 야식으로는 버팔로윙 백종원이 짜주는 가장 완벽한 뉴욕 먹투어 | #골라보는`,
            "channel_name" :`tvN D ENT`,
            "post_time" : `6일 전`,
            "view" : "69만회"
        },
        {
            "index" : 8,
            "thumb" : `./contents/thumb/hq720 (8).webp`,
            "timer" : "20:29",
            "profile": `./contents/profile/profile(8).jpg`,
            "video_head" : `마침내 세계 최강의 챔피언이 된 지우 이야기 / 한지우 일대기`,
            "channel_name" :`초코리타`,
            "post_time" : `8개월 전`,
            "view" : "40만회"
        },
        {
            "index" : 9,
            "thumb" : `./contents/thumb/hq720 (9).webp`,
            "timer" : "12:46",
            "profile": `./contents/profile/profile(9).jpg`,
            "video_head" : `[EN] 경차 사러 갔다가 롤스로이스 샀습니다 | 중고자 | 워크맨 ep.141`,
            "channel_name" :`워크맨-Workman`,
            "post_time" : `6일 전`,
            "view" : "185만회"
        },
        {
            "index" : 10,
            "thumb" : `./contents/thumb/hq720 (10).webp`,
            "timer" : "13:41",
            "profile": `./contents/profile/profile(10).jpg`,
            "video_head" : `IMF 터져서 개털된 회장 할아버지에게 용돈으로 1조 5천억원씩 주는 $달러$ 부자 [재벌집 막내아들] 5화 리뷰`,
            "channel_name" :`민호타우르스`,
            "post_time" : `6일 전`,
            "view" : "213만회"
        },
        {
            "index" : 11,
            "thumb" : `./contents/thumb/hq720 (11).webp`,
            "timer" : "14:21",
            "profile": `./contents/profile/profile(11).jpg`,
            "video_head" : `떡볶이 무한리필 vs 마라탕 무한리필! 단 한개만 골라야 한다면?ㅋㅋㅋ`,
            "channel_name" : `흔한남매`,
            "post_time" : `6일 전`,
            "view" : "56만회"
        },
    ]
})

