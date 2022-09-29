function getLaserSetting(first) {
    let pass = first;
    if (pass == "please") {
        return "OFF";
    } else {
        return "ON";
    }
}
