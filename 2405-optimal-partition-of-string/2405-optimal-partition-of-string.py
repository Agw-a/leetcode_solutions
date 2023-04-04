class Solution:
    def partitionString(self, s: str) -> int:
        chars = set()
        res = 1
        
        for i in s:
            if i in chars:
                res += 1
                chars = set()
                chars.add(i)
            
            
            chars.add(i)
        return res