---
layout: post
title: PMD For Eclipse 7.0.0.v20230930-1814-rc4 Released
---

A new PMD for Eclipse plugin version has been released.
It is available via the update site: https://pmd.github.io/pmd-eclipse-plugin-p2-site/


This is a minor release.

### New and noteworthy

* Updated to PMD 7.0.0-rc4
* Support for Eclipse 2023-09 added
* Support for Eclipse 2023-06 added
* Support for Eclipse 2022-09 removed
* Support for Eclipse 2022-06 removed

### Fixed Issues

* [#181](https://github.com/pmd/pmd-eclipse-plugin/pull/181): Support eclipse 2023-06
* [#182](https://github.com/pmd/pmd-eclipse-plugin/pull/182): Update to PMD 7.0.0-rc4
* [#183](https://github.com/pmd/pmd-eclipse-plugin/pull/183): Support eclipse 2023-09

### API Changes

* The deprecated field net.sourceforge.pmd.eclipse.runtime.PMDRuntimeConstants.MAX_VIOLATIONS_DESCRIPTOR has been
  removed.
* The following deprecated classes have been removed
  * net.sourceforge.pmd.eclipse.ui.preferences.br.FilterManager
  * net.sourceforge.pmd.eclipse.ui.preferences.editors.FileEditorFactory
  * net.sourceforge.pmd.eclipse.ui.preferences.editors.FloatEditorFactory
* The following packages are not exported anymore, as they don't exist anymore:
  * net.sourceforge.pmd.cpd.renderer
  * net.sourceforge.pmd.properties.constraints

