"""
Grabs cute random picture urls based on search query
"""
import simplejson, time, urllib2

def getPictureURL(searchTerm):
	urls = []
	# Notice that the start changes for each iteration in order to request a new set of images for each loop
	for i in range(0,10):
		url = ('https://ajax.googleapis.com/ajax/services/search/images?' + 'v=1.0&q='+searchTerm+'&start='+str(i*4)+'&userip=MyIP'+ '&imgsz=large')
		print url
		request = urllib2.Request(url, None, {'Referer': 'testing'})
		response = urllib2.urlopen(request)

		# Get results using JSON
		results = simplejson.load(response)
		data = results['responseData']
		dataInfo = data['results']
		count = 0
		# Iterate for each result and get unescaped url
		for myUrl in dataInfo:
			count = count + 1
			urls.append(myUrl['unescapedUrl'])

			#myopener.retrieve(myUrl['unescapedUrl'],str(count)+'.jpg')

		# Sleep for one second to prevent IP blocking from Google
		time.sleep(1)
	return urls

if __name__ == "__main__":
	#animal = raw_input("Enter a cute animal:\n")
	with open("animalURLs.txt",'wb') as f:
		f.write('"' +  '","'.join(getPictureURL("cutekitty")) + '"')