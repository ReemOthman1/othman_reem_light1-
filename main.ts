while (true) {
    console.log("light level:" + input.lightLevel())
    if (input.lightLevel() < 12) {
        light.setAll(light.rgb(255, 255, 255))
    } else {
        light.clear()
    }
    
}
