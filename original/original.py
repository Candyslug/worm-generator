
def worm(min=1,count=3,txt="hello world",repeats=2,wormcount=2,gaplength=5):
  txt=" "+txt+" " 
  for i in range(repeats):
    for i in range(count):
      for j in range(wormcount):
        print("="*(i+min)+txt+"="*(count-i+min),end='')
        print(gaplength*" ",end='')
      print('\n')
    for i in range(count):
      for j in range(wormcount):
        print("="*(count-i+min)+txt+"="*(i+min),end='')
        print(gaplength*" ",end='')
      print('\n')
  for i in range(wormcount):
    print("="*(min)+txt+"="*(count+min),end='')
    print(gaplength*" ",end='')
  print('\n')

worm(5,25, "this is a worm!",1,1,59)