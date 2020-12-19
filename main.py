#while True:
    #print("light level:"+ input.light_level())
    #if input.light_level() < 6: 
        #light.set_all(light.rgb(255, 255, 255))
    #else:
        #light.clear()

while True:
    print("light level:"+ input.light_level())
    if input.light_level() < 10: 
        light.set_all(light.rgb(0, 0, 255))
    elif input.light_level() > 15:
        light.set_all(light.rgb(255,69,0))
    else:
        light.clear()