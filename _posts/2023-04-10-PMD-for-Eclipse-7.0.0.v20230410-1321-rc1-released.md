---
layout: post
title: PMD For Eclipse 7.0.0.v20230410-1321-rc1 Released
---

A new PMD for Eclipse plugin version has been released.
It is available via the update site: https://pmd.github.io/pmd-eclipse-plugin-p2-site/


This is a release candidate for the next major release.

### New and noteworthy

* Beginning with version 7 of this plugin, only the last four eclipse releases are supported. The plugin
  might still work with older versions, but it's only developed and tested against the newer versions.

* The version number of the PMD Eclipse Plugin now is synchronized with the supported and used PMD version.
  For Bugfixes in the PMD Eclipse Plugin only, a new version is released with the same major, minor, and patch,
  but a new qualifier only.

* The minimum required Java version is Java 8.

* The PMD Designer can't be started from within the plugin anymore. Please install
  [PMD Designer](https://github.com/pmd/pmd-designer) separately when needed.

* Updated to PMD 7.0.0-rc1

### Fixed Issues

* [#122](https://github.com/pmd/pmd-eclipse-plugin/issues/122): Update PMD 7 Logo in eclipse pmd plugin
* [#172](https://github.com/pmd/pmd-eclipse-plugin/issues/172): Only support the last 4 eclipse releases
* [#174](https://github.com/pmd/pmd-eclipse-plugin/pull/174): Upgrade to PMD 7

