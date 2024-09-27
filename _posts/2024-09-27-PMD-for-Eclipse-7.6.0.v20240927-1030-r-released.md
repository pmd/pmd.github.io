---
layout: post
title: PMD For Eclipse 7.6.0.v20240927-1030-r Released
---

A new PMD for Eclipse plugin version has been released.
It is available via the update site: https://pmd.github.io/pmd-eclipse-plugin-p2-site/


This is a minor release.

### New and noteworthy
* Update to PMD 7.6.0
* Support for Eclipse 2024-09 added
* Support for Eclipse 2023-09 removed
* New Git default branch - "main":  
  We are joining the Git community and updating "master" to "main". Using the term "master" for the main
  development branch can be offensive to some people. Existing versions of Git have been always capable of
  working with any branch name and since 2.28.0 (July 2020) the default initial branch is configurable
  (`init.defaultBranch`). Since October 2020, the default branch for new repositories on GitHub
  is "main". Finally, PMD will also use this new name for the main branch in all our own repositories.

### Merged pull requests
* Only include the jars under target/lib that are on the classpath ([#223](https://github.com/pmd/pmd-eclipse-plugin/pull/223)) by [@adangel](https://github.com/adangel)
* Update PMD icon to use small variant of the logo ([#222](https://github.com/pmd/pmd-eclipse-plugin/pull/222)) by [@adangel](https://github.com/adangel)
* Support eclipse 2024-09 ([#221](https://github.com/pmd/pmd-eclipse-plugin/pull/221)) by [@adangel](https://github.com/adangel)
* Change branch master to main ([#220](https://github.com/pmd/pmd-eclipse-plugin/pull/220)) by [@adangel](https://github.com/adangel)

### Dependency updates
* Bump checkstyle from 10.14.0 to 10.18.1 ([#217](https://github.com/pmd/pmd-eclipse-plugin/pull/217))

