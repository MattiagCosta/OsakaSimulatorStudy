from tools import *

external_path = "C:/Users/Matti/Osaka Simulator FINAL (standalone)/"

file_chosen = "Osaka Simulator FINAL/model/texture02" # and 00, 01, 03

converted_file = ConvertBinaryFileToHex(f"{external_path}{file_chosen}.bin")
SaveToTextFile(converted_file, f"./{file_chosen}.txt")

magic_number = 8 # 6

print("Patterns count:", CountPatterns(converted_file, magic_number))
patterns = FindRepeatingPatterns(converted_file, magic_number)
SavePatternsToTextFile(patterns, f"./patterns/{file_chosen}.txt")
SavePatternsKeysToTextFile(patterns, f"./patterns_keys/{file_chosen}.txt")