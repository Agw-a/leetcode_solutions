class Solution:
    def compress(self, chars: List[str]) -> int:
        res = 0
        n = 0
        while n < len(chars):
            l = chars[n]
            l_count = 0
            while n < len(chars) and chars[n] == l:
                l_count += 1
                n += 1
            chars[res] = l
            res += 1
            if l_count > 1:
                for i in str(l_count):
                    chars[res] = i
                    res += 1
        return res
        