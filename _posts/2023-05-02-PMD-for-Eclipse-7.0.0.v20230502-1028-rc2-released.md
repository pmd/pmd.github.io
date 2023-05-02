---
layout: post
title: PMD For Eclipse 7.0.0.v20230502-1028-rc2 Released
---

A new PMD for Eclipse plugin version has been released.
It is available via the update site: https://pmd.github.io/pmd-eclipse-plugin-p2-site/


This is a release candidate for the next major release.

### New and noteworthy

* Updated to PMD 7.0.0-rc2

### Fixed Issues

* [#176](https://github.com/pmd/pmd-eclipse-plugin/pull/176): Update to pmd 7.0.0-rc2
* [#177](https://github.com/pmd/pmd-eclipse-plugin/pull/177): Export PMD API

### API Changes

The following PMD packages from pmd-core are exported and can be used by other plugins:
* net.sourceforge.pmd
* net.sourceforge.pmd.cpd
* net.sourceforge.pmd.cpd.renderer
* net.sourceforge.pmd.lang
* net.sourceforge.pmd.lang.ast
* net.sourceforge.pmd.lang.document
* net.sourceforge.pmd.lang.metrics
* net.sourceforge.pmd.lang.rule
* net.sourceforge.pmd.lang.rule.xpath
* net.sourceforge.pmd.properties
* net.sourceforge.pmd.properties.constraints
* net.sourceforge.pmd.renderers
* net.sourceforge.pmd.reporting
* net.sourceforge.pmd.util

