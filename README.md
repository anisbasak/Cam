# React-Native-Project-CSC510
React-Native Mobile Feature

We used Expo to create the project which is like Rails for React Native. 

Steps to Run project:

1. Install Node JS LTS version from website: https://nodejs.org/en/ currently running on versoin 8.11.4
2. Install Expo by running `npm install -g expo-cli`. 
3. Go to root directory of project and run 'npm install'.
3. Run project using following command `npm start`. If that doesn't work, then run `expo start`.
5. In order to us the app, you must download the Expo app from the Play Store or App Store and scan the QR code from the previous step


Fastlane:

Since we used Expo to create our project, Fastlane doesn't work with it. The only way to have Fastlane work with our project would be to "eject" the app which converts it to a regular React Native project as opposed to an Expo project. Unfortunately, once you eject you can't go back to an Expo project. This wouldn't be a problem, but since we used Expo to create the project, when you run the newly ejected project, it doesn't work on a phone because there are still Expo libraries being used. That is why our project doesn't have Fastlane configured in it. However, we created a copy of our repo and did eject the app and configure Fastlane with it. It is configured the same way as Ionic and we were able to get build times for our app. These images are saved in the Fastlane_Build_Times_Images folder. This is our output for Fastlane. 

