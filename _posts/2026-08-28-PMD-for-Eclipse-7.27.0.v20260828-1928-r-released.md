---
layout: post
title: PMD For Eclipse 7.27.0.v20260828-1928-r Released
---

A new PMD for Eclipse plugin version has been released.
It is available via the update site: https://pmd.github.io/pmd-eclipse-plugin-p2-site/


This is a minor release.

### 🚀 New and noteworthy
* Update to PMD 7.27.0

### ✨ Merged pull requests
* [#430](https://github.com/pmd/pmd-eclipse-plugin/pull/430): chore: Use client-id for create-github-app-token - [Andreas Dangel](https://github.com/adangel) (@adangel)
* [#431](https://github.com/pmd/pmd-eclipse-plugin/pull/431): chore: Improve logging during tests at waitForPMDJobs - [Andreas Dangel](https://github.com/adangel) (@adangel)
* [#432](https://github.com/pmd/pmd-eclipse-plugin/pull/432): refactor: Remove custom JavaProject cache - [Andreas Dangel](https://github.com/adangel) (@adangel)
* [#445](https://github.com/pmd/pmd-eclipse-plugin/pull/445): chore: Remove unnecessary casts - [Andreas Dangel](https://github.com/adangel) (@adangel)
* [#449](https://github.com/pmd/pmd-eclipse-plugin/pull/449): chore: Upload surefire reports for failed unit tests - [Andreas Dangel](https://github.com/adangel) (@adangel)
* [#451](https://github.com/pmd/pmd-eclipse-plugin/pull/451): chore: Make ViolationDetailsDialogTest more reliable - [Andreas Dangel](https://github.com/adangel) (@adangel)
* [#452](https://github.com/pmd/pmd-eclipse-plugin/pull/452): chore: Wait for workspace jobs to complete before teardown of tests - [Andreas Dangel](https://github.com/adangel) (@adangel)
* [#453](https://github.com/pmd/pmd-eclipse-plugin/pull/453): perf: Improve performance when calling PMD in BaseVisitor - [Andreas Dangel](https://github.com/adangel) (@adangel)

### 📦 Dependency updates
* [#424](https://github.com/pmd/pmd-eclipse-plugin/pull/424): Bump com.puppycrawl.tools:checkstyle from 13.6.0 to 13.7.0
* [#425](https://github.com/pmd/pmd-eclipse-plugin/pull/425): Bump ch.qos.logback:logback-classic from 1.5.35 to 1.5.37
* [#426](https://github.com/pmd/pmd-eclipse-plugin/pull/426): Bump actions/setup-java from 5.3.0 to 5.4.0
* [#427](https://github.com/pmd/pmd-eclipse-plugin/pull/427): Bump actions/cache from 6.0.0 to 6.1.0
* [#428](https://github.com/pmd/pmd-eclipse-plugin/pull/428): Bump actions/setup-java from 5.3.0 to 5.4.0 in /.github/actions/setup
* [#429](https://github.com/pmd/pmd-eclipse-plugin/pull/429): Bump actions/cache from 6.0.0 to 6.1.0 in /.github/actions/setup
* [#433](https://github.com/pmd/pmd-eclipse-plugin/pull/433): Bump actions/setup-java from 5.4.0 to 5.5.0
* [#434](https://github.com/pmd/pmd-eclipse-plugin/pull/434): Bump actions/setup-java from 5.4.0 to 5.5.0 in /.github/actions/setup
* [#435](https://github.com/pmd/pmd-eclipse-plugin/pull/435): Bump ch.qos.logback:logback-classic from 1.5.37 to 1.5.38
* [#436](https://github.com/pmd/pmd-eclipse-plugin/pull/436): Bump com.puppycrawl.tools:checkstyle from 13.7.0 to 13.8.0
* [#437](https://github.com/pmd/pmd-eclipse-plugin/pull/437): Bump maven from 3.9.14 to 3.9.16
* [#438](https://github.com/pmd/pmd-eclipse-plugin/pull/438): Bump actions/checkout from 7.0.0 to 7.0.1
* [#439](https://github.com/pmd/pmd-eclipse-plugin/pull/439): Bump actions/setup-java from 5.5.0 to 5.6.0
* [#440](https://github.com/pmd/pmd-eclipse-plugin/pull/440): Bump actions/setup-java from 5.5.0 to 5.6.0 in /.github/actions/setup
* [#441](https://github.com/pmd/pmd-eclipse-plugin/pull/441): Bump ch.qos.logback:logback-classic from 1.5.38 to 1.6.1
* [#442](https://github.com/pmd/pmd-eclipse-plugin/pull/442): Bump com.puppycrawl.tools:checkstyle from 13.8.0 to 13.10.0
* [#443](https://github.com/pmd/pmd-eclipse-plugin/pull/443): Bump actions/setup-java from 5.6.0 to 5.7.0
* [#444](https://github.com/pmd/pmd-eclipse-plugin/pull/444): Bump actions/setup-java from 5.6.0 to 5.7.0 in /.github/actions/setup
* [#446](https://github.com/pmd/pmd-eclipse-plugin/pull/446): Bump build-tools from 39 to 40
* [#447](https://github.com/pmd/pmd-eclipse-plugin/pull/447): Bump ch.qos.logback:logback-classic from 1.6.1 to 1.6.3
* [#448](https://github.com/pmd/pmd-eclipse-plugin/pull/448): Bump com.puppycrawl.tools:checkstyle from 13.10.0 to 14.0.0
* [#450](https://github.com/pmd/pmd-eclipse-plugin/pull/450): Bump PMD from 7.26.0 to 7.27.0

### API Changes
* The method `net.sourceforge.pmd.eclipse.runtime.cmd.BaseVisitor#configuration()` has been deprecated for removal.

