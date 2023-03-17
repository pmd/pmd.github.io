---
layout: post
title: PMD For Eclipse 4.23.0.v20210424-1524 Released
---

A new PMD for Eclipse plugin version has been released.
It is available via the update site: https://pmd.github.io/pmd-eclipse-plugin-p2-site/


This is a minor release.

### New and noteworthy

*   The Eclipse Update site is now hosted on GitHub Pages: <https://pmd.github.io/pmd-eclipse-plugin-p2-site/>
    The old update site on Bintray is no longer updated.
*   Updated to PMD 6.34.0

### Fixed Issues

*   [#143](https://github.com/pmd/pmd-eclipse-plugin/pull/143): Support JAR Signing for the update site
*   [#144](https://github.com/pmd/pmd-eclipse-plugin/pull/144): Remove support and scripts for bintray
*   [#145](https://github.com/pmd/pmd-eclipse-plugin/pull/145): Bump tycho from 1.7.0 to 2.3.0

### API Changes

*   The following methods in `net.sourceforge.pmd.eclipse.ui.actions.RuleSetUtil` are deprecated:
    *   `setExcludePatterns(RuleSet ruleSet, Collection<String> excludePatterns)`
    *   `setIncludePatterns(RuleSet ruleSet, Collection<String> includePatterns)`
    *   `addExcludePatterns(RuleSet ruleSet, Collection<String> activeExclusionPatterns, Collection<String> buildPathExcludePatterns)`
    *   `addIncludePatterns(RuleSet ruleSet, Collection<String> activeInclusionPatterns, Collection<String> buildPathIncludePatterns)`
    *   `addExcludePatterns(RuleSet rs, Collection<String> excludePatterns)`
    *   `addIncludePatterns(RuleSet rs, Collection<String> includePatterns)`
    *   These methods are not supposed to be public API and will be removed eventually.
*   The property `net.sourceforge.pmd.eclipse.runtime.PMDRuntimeConstants.MAX_VIOLATIONS_DESCRIPTOR`
    is deprecated and will be removed.
*   The preference "net.sourceforge.pmd.eclipse.plugin.max_violations_pfpr" is deprecated and will be removed.
    It was never implemented. The following methods and fields are deprecated:
    *   `net.sourceforge.pmd.eclipse.runtime.preferences.IPreferences.getMaxViolationsPerFilePerRule()`
    *   `net.sourceforge.pmd.eclipse.runtime.preferences.IPreferences.setMaxViolationsPerFilePerRule(int)`
    *   `net.sourceforge.pmd.eclipse.runtime.preferences.IPreferences.MAX_VIOLATIONS_PFPR_DEFAULT`
*   `net.sourceforge.pmd.eclipse.runtime.cmd.DetectCutAndPasteCmd.setRenderer(Renderer)` is deprecated.
*   Removed usages of deprecated class `net.sourceforge.pmd.RuleSets`. Therefore the following methods are
    deprecated now:
    *   `net.sourceforge.pmd.eclipse.runtime.cmd.BaseVisitor.getRuleSets()`
    *   `net.sourceforge.pmd.eclipse.runtime.cmd.BaseVisitor.setRuleSets(RuleSets)`
    *   `net.sourceforge.pmd.eclipse.runtime.properties.IProjectProperties.getProjectRuleSets()`
    *   `net.sourceforge.pmd.eclipse.runtime.properties.IProjectProperties.setProjectRuleSets(RuleSets)`
    *   `net.sourceforge.pmd.eclipse.runtime.properties.impl.ProjectPropertiesImpl.getProjectRuleSets()`
    *   `net.sourceforge.pmd.eclipse.runtime.properties.impl.ProjectPropertiesImpl.setProjectRuleSets(RuleSets)`
    *   `net.sourceforge.pmd.eclipse.ui.properties.PMDPropertyPageBean.getProjectRuleSets()`
    *   `net.sourceforge.pmd.eclipse.ui.properties.PMDPropertyPageBean.setProjectRuleSets(RuleSets)`
    *   `net.sourceforge.pmd.eclipse.ui.properties.UpdateProjectPropertiesCmd.setProjectRuleSets(RuleSets)`

