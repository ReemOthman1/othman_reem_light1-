// while True:
// print("light level:"+ input.light_level())
// if input.light_level() < 6: 
// light.set_all(light.rgb(255, 255, 255))
// else:
// light.clear()
while (true) {
    console.log("light level:" + input.lightLevel())
    if (input.lightLevel() < 6) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.lightLevel() > 20) {
        light.setAll(light.rgb(255, 69, 0))
    } else {
        light.clear()
    }
    
}
