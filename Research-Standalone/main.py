from tools import *

parent_folder = "./tsu_han_dat/"

folder = "tsu_han_dat-messing_around-0/"

converted_file = ConvertBinaryFileToHex("C:/Users/Matti/Osaka Simulator FINAL (standalone)/Osaka Simulator FINAL/tsu_han.dat")
SaveToTextFile(converted_file, f"{parent_folder}{folder}tsu_han-hex.txt")
converted_file = ConvertHexToText(converted_file)
SaveToTextFile(converted_file, f"{parent_folder}{folder}tsu_han-hex_converted.txt")
