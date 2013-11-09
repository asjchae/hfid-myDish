if __name__ == "__main__":
	with open("parsed.js",'wb') as g:
		with open("jquery.multiselect.min.js",'rb') as f:
			for line in f:
				print line
				if "{" in line:
					line = line.replace(",",",\n")
					line = line.replace(";",";\n")
					line = line.replace("{","\n{\n\t")
					line = line.replace("}","\n}\n")
			g.write(line)


