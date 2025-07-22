import os

def ReadBinaryFile(file_path: str) -> bytes:
	try:
		with open(file_path, 'rb') as file:
			data = file.read()
		return data
	except Exception as e:
		print(f"Error reading file {file_path}: {e}")
		return None

def WriteBinaryFile(file_path: str, data: bytes):
	try:
		os.makedirs(os.path.dirname(file_path), exist_ok=True)
		with open(file_path, 'wb') as file:
			file.write(data)
		print(f"Successfully wrote to {file_path}")
	except Exception as e:
		print(f"Error writing to file {file_path}: {e}")

def ConvertBinaryFileToHex(file_path: str) -> str:
	data = ReadBinaryFile(file_path)
	if data is not None:
		return data.hex()
	else:
		return ""

def ConvertBinaryFileToBits(file_path: str) -> str:
	data = ReadBinaryFile(file_path)
	if data is not None:
		return ''.join(format(byte, '08b') for byte in data)
	else:
		return ""

def SaveToTextFile(string_data: str, output_file_path: str) -> None:
	try:
		os.makedirs(os.path.dirname(output_file_path), exist_ok=True)
		with open(output_file_path, 'w') as file:
			file.write(string_data)
		print(f"Successfully saved to {output_file_path}")
	except Exception as e:
		print(f"Error saving to file {output_file_path}: {e}")

def CountPatterns(data: bytes | str, pattern_length: int) -> tuple[int, int]:
	return len(data) // pattern_length, len(data) % pattern_length

def FindRepeatingPatterns(data: bytes | str, pattern_length: int) -> dict:
	if not data or pattern_length <= 0:
		return None
	patterns = {}
	for i in range(0, len(data) - pattern_length + 1, pattern_length):
		pattern = data[i:i + pattern_length]
		if pattern in patterns:
			patterns[pattern].append(i)
		else:
			patterns[pattern] = [i]
	remaining = len(data) % pattern_length
	skipped_pattern = data[len(data) - remaining:len(data)]
	if skipped_pattern:
		patterns[skipped_pattern] = [len(data) - remaining + 1]
	return patterns

def SavePatternsToTextFile(patterns: dict, output_file_path: str) -> None:
	if not patterns:
		return
	try:
		os.makedirs(os.path.dirname(output_file_path), exist_ok=True)
		with open(output_file_path, 'w') as file:
			file.write(str(patterns))
		print(f"Successfully saved to {output_file_path}")
	except Exception as e:
		print(f"Error saving patterns to file {output_file_path}: {e}")

def SavePatternsKeysToTextFile(patterns: dict, output_file_path: str) -> None:
	if not patterns:
		return
	try:
		os.makedirs(os.path.dirname(output_file_path), exist_ok=True)
		with open(output_file_path, 'w') as file:
			for key in patterns.keys():
				file.write(f"{key}\n")
		print(f"Successfully saved keys to {output_file_path}")
	except Exception as e:
		print(f"Error saving keys to file {output_file_path}: {e}")

def ConvertHexToText(hex_data: str) -> str:
	try:
		new_hex_data = ''
		for i in range(0, len(hex_data), 2):
			hex_byte = hex_data[i:i + 2]
			if int(hex_byte, 16) < 65 or int(hex_byte, 16) > 122 or (int(hex_byte, 16) > 90 and int(hex_byte, 16) < 97):
				new_hex_data += hex_byte
			else:
				new_hex_data += chr(int(hex_byte, 16))
		return new_hex_data
	except Exception as e:
		print(f"Error converting hex to text: {e}")
