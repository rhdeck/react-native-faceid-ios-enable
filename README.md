# react-native-faceid-ios-enable

Adds security message to allow use of FaceID without requiring XCode intervention

# Usage

```bash
yarn add react-native-faceid-ios-enable
```

**Note** You can determine the text for the camera permission message via the `IOSFaceIDPrivacyText` property of your `package.json` file. To set text, just set the value like so before adding the package:

```
{
    ...
    dependencies: {
        ...
    },
    IOSFaceIDPrivacyText: "Please let me use the camera!"
}
```
