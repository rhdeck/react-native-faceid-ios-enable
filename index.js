#!/usr/bin/env node
var fs = require("fs");
var path = require("path");
var glob = require("glob");
var plist = require("plist");
//Get my directory
var privacyText = "This app requires FaceID for security";
const myPackagePath = path.resolve(
  path.basename(process.argv[1]),
  "package.json"
);
if (fs.existsSync(myPackagePath)) {
  const mypackage = require(myPackagePath);
  if (typeof mypackage.IOSFaceIDPrivacyText != "undefined") {
    privacyText = mypackage.IOSFaceIDPrivacyText;
  }
}
const packagePath = path.resolve(process.cwd(), "package.json");
if (fs.existsSync(packagePath)) {
  const package = require(packagePath);
  if (typeof package.IOSFaceIDPrivacyText != "undefined") {
    console.log("Setting from parent package");
    privacyText = package.IOSFaceIDPrivacyText;
  }
}
var iosPath = path.resolve(process.cwd(), "ios");
if (!fs.existsSync(iosPath)) {
  console.log("Could not find ios in ", thisPath, iosPath);
  console.log(fs.readdirSync(thisPath));
  process.exit();
}
plists = glob.sync(path.resolve(iosPath + "/*/Info.plist"));
plists.map(path => {
  const source = fs.readFileSync(path, "utf8");
  var o = plist.parse(source);
  o.NSFaceIDUsageDescription = privacyText;
  const xml = plist.build(o);
  fs.writeFileSync(path, xml);
});
