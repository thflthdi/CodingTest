## Greedy 알고리즘

#### 개념

- 당장 눈 앞에 보이는 최적의 상황만을 쫓는 알고리즘(특정 상황에서 최적의 해 보장)
  - ex) 거스름 돈 문제

- 부분에서의 최선의 선택이 전체적으로도 최선이길 바라는 알고리즘
- 정당성 증명 - 탐욕법에서는 결과가 최적인 방법인지 정당성을 구해야함

- 그리디 + 정렬 기법과 함께 사용된 예 - 크루스칼 알고리즘

- 최적의 해를 보장하지 못하는 경우도 많기 때문에 다이나믹 프로그래밍등의 알고리즘을 적용해야 함

<hr/>

#### 오늘의 문제

> 프로그래머스 > 탐욕법 > 큰 수 만들기 

```python
def solution(number, k):
    answer = whoisbig(number,len(number)-k)
    return answer

def whoisbig(num, place_value):
    big = ''
    already_done=place_value
    while(place_value>0):
        total_num = len(num)
        if len(big) == already_done:
            break
        if total_num == place_value:
            big = big+num
            break
        else:
            max_num = -1
            for i in range(total_num-place_value+1):
                if int(max_num) < int(num[i]):
                    max_num = num[i]
                    if max_num == 9 :
                        break
            big=big+max_num
            num = num[num.index(max_num)+1:]
            place_value=place_value-1
    
    return big
```



점수 : 83점

