---
layout: post
title: PMD For Eclipse 7.21.0.v20260130-1017-r Released
---

A new PMD for Eclipse plugin version has been released.
It is available via the update site: https://pmd.github.io/pmd-eclipse-plugin-p2-site/


This is a minor release.

### 🚀 New and noteworthy
* Update to PMD 7.21.0

### ✨ Merged pull requests
* [#353](https://github.com/pmd/pmd-eclipse-plugin/pull/353): chore: Avoid using classloader for auxclasspath settings - [Andreas Dangel](https://github.com/adangel) (@adangel)

### 📦 Dependency updates
* [#347](https://github.com/pmd/pmd-eclipse-plugin/pull/347): chore: Bump maven from 3.9.11 to 3.9.12
* [#348](https://github.com/pmd/pmd-eclipse-plugin/pull/348): Bump com.puppycrawl.tools:checkstyle from 12.3.0 to 13.0.0
* [#350](https://github.com/pmd/pmd-eclipse-plugin/pull/350): Bump com.github.siom79.japicmp:japicmp-maven-plugin from 0.25.1 to 0.25.4
* [#352](https://github.com/pmd/pmd-eclipse-plugin/pull/352): Bump actions/cache from 5.0.1 to 5.0.2
* [#355](https://github.com/pmd/pmd-eclipse-plugin/pull/355): Bump actions/checkout from 6.0.1 to 6.0.2
* [#356](https://github.com/pmd/pmd-eclipse-plugin/pull/356): Bump actions/setup-java from 5.1.0 to 5.2.0
* [#357](https://github.com/pmd/pmd-eclipse-plugin/pull/357): Bump tycho from 4.0.10 to 5.0.2
* [#358](https://github.com/pmd/pmd-eclipse-plugin/pull/358): Bump PMD from 7.20.0 to 7.21.0

### API Changes

#### Deprecations

The following methods have been deprecated for removal:

* `net.sourceforge.pmd.eclipse.runtime.properties.IProjectProperties#getAuxClasspath()`
* `net.sourceforge.pmd.eclipse.runtime.properties.impl.ProjectPropertiesImpl#getAuxClasspath()`

Use the new method `getClasspath()` instead. It doesn't use a custom classloader anymore and just returns
the classpath as a single string (path elements separated by the os specific path separator).

The following class has been deprecated for removal:

* `net.sourceforge.pmd.eclipse.runtime.cmd.JavaProjectClassLoader`

