---
layout: post
title: PMD For Eclipse 4.18.0.v20201024-1129 Released
---

A new PMD for Eclipse plugin version has been released.
It is available via the update site: https://dl.bintray.com/pmd/pmd-eclipse-plugin/updates/


This is a minor release.

### New and noteworthy

*   Updated to PMD 6.29.0

### Fixed Issues

*   [#131](https://github.com/pmd/pmd-eclipse-plugin/issues/131): Conflict with Jaspersoft Studio plugin (log4j)

#### Breaking Changes

*   With 4.10.0 usage of log4j has been deprecated. In order to fix [#131](https://github.com/pmd/pmd-eclipse-plugin/issues/131)
    these deprecated references have been removed now.
    
    The following methods/fields in `net.sourceforge.pmd.eclipse.runtime.preferences.IPreferences`
    have been removed:
    *   `getLogLevel()`
    *   `setLogLevel(Level)`
    *   `LOG_LEVEL`

### External Contributions

*   [#132](https://github.com/pmd/pmd-eclipse-plugin/pull/132): Remove log4j - [Rich DiCroce](https://github.com/rdicroce)

