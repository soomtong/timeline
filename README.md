제스트온 개발 노트 이력 추적
============================
[http://dev.zeston.kr](http://dev.zeston.kr "이동")

# NodeJS With RailwayJS Framework, Redis Database

## RailwayJS Framework

- UBUNTU 1204 Server Default
- TowerJS, Monorail, RailwayJS 중 RailwayJS 가 가장 쉽게 설치되고 프로젝트 생성이 되었습니다. 나머지 두 녀석은 뭐 좀 하다가
에러를 내고 설치되다 말고 그래서 사용해볼 수가 없었습니다.
- Redis 를 사용하여 dev 모드로 그냥 사용하고 있는데 아직 큰 문제는 없네요.
- 데이터 입출력 부분은 그냥 `g crud timeline ~` 으로 만들어 대충 사용하고 있습니다.

## Timeline

- 엄청난 자바스트립트(JQuery 기반) 타임라인 라이브러리 [timeline.verite.co](http://timeline.verite.co "타임라인 갑") 을 사용했습니다.

## Redis

- redis-cli 명령어

현재 디비의 전체 키를 보여줌 ` keys *`

해당 키의 데이터를 보여줌 ` hgetall Timeline:1`

모니터링 모드 ` monitor`
