class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        Dict = {}
        start = 0
        end = 0
        maxLen = 0
        #  start = 0, end = 4, maxLen = 5 end - start + 1

        while end < len(fruits):
            Dict[fruits[end]] = end
            if len(Dict) >= 3:
                # The least recently seen index
                minVal = min(Dict.values())
                del Dict[fruits[minVal]]
                start = minVal + 1
            maxLen = max(maxLen, end - start + 1)
            end += 1
        return maxLen




  