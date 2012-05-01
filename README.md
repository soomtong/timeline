제스트온 개발 노트 이력 추적
============================
[dev.zeston.kr](http://dev.zeston.kr "이동")

# nodejs with railway framework, redis database

## railway frameword

- Ubuntu server 1204
- towerjs, monorail, railway 중 railway 가 가장 쉽게 설치되고 프로젝트 생성이 되었습니다. 나머지 두 녀석은 뭐 좀 하다가
에러를 내고 설치되다 말고 그래서 사용해볼 수가 없었습니다.
- redis 를 사용하여 dev 모드로 그냥 사용하고 있는데 아직 큰 문제는 없네요.
- 데이터 입출력 부분은 그냥 g crud timeline ~ 으로 만들어 대충 사용하고 있습니다.

## timeline

- 엄청난 자바스트립트(jQuery 기반) 타임라인 라이브러리 [timeline.verite.co](http://timeline.verite.co "타임라인 갑") 을 사용했습니다.

## redis

- redis-cli 명령어
keys *
hgetall Timeline:1
monitor
