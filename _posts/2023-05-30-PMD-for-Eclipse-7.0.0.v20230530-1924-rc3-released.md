---
layout: post
title: PMD For Eclipse 7.0.0.v20230530-1924-rc3 Released
---

A new PMD for Eclipse plugin version has been released.
It is available via the update site: https://pmd.github.io/pmd-eclipse-plugin-p2-site/


This is a release candidate for the next major release.

### New and noteworthy

* Updated to PMD 7.0.0-rc3

### Fixed Issues

* [#171](https://github.com/pmd/pmd-eclipse-plugin/pull/171):   Radio button for local rules in project properties dialog is missing
* [#178](https://github.com/pmd/pmd-eclipse-plugin/issues/178): Message not interpolated in "Show details..." dialog

### API Changes

The following packages are no longer public API and are not exported anymore:
* name.herlin.command
* net.sourceforge.pmd.eclipse.core.impl
* net.sourceforge.pmd.eclipse.ui
* net.sourceforge.pmd.eclipse.ui.actions
* net.sourceforge.pmd.eclipse.ui.model
* net.sourceforge.pmd.eclipse.ui.preferences.br
* net.sourceforge.pmd.eclipse.ui.properties
* net.sourceforge.pmd.eclipse.ui.views.actions

The following classes have finally been removed. Most of them have been deprecated before:
* net.sourceforge.pmd.eclipse.ui.preferences.PMDPreferencePage
* net.sourceforge.pmd.eclipse.ui.preferences.RuleCellModifier
* net.sourceforge.pmd.eclipse.ui.preferences.RuleDialog
* net.sourceforge.pmd.eclipse.ui.preferences.RulePropertyCellModifier (was not deprecated)
* net.sourceforge.pmd.eclipse.ui.preferences.RuleSetExcludeIncludePatternCellModifier (was not deprecated)
* net.sourceforge.pmd.eclipse.ui.properties.PMDPropertyPage
* net.sourceforge.pmd.eclipse.ui.views.actions.ShowRuleAction (was not deprecated)
* net.sourceforge.pmd.eclipse.ui.views.rules.RuleEditorView

