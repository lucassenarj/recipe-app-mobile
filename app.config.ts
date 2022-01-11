export default {
  name: "Recipe App",
  slug: "recipe-app",
  platforms: ["ios", "android"],
  version: "0.0.1",
  orientation: "portrait",
  icon: "./src/assets/images/icon.png",
  splash: {
    image: "./src/assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#FFFFFF"
  },
  ios: {
    bundleIdentifier: "com.github.lucassenarj.recipeapp",
    buildNumber: "0.0.1"
  },
  android: {
    package: "com.github.lucassenarj.recipeapp",
    versionCode: 1
  }
};