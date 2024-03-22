---
layout: post
title: PMD For Eclipse 7.0.0.v20240322-0920-r Released
---

A new PMD for Eclipse plugin version has been released.
It is available via the update site: https://pmd.github.io/pmd-eclipse-plugin-p2-site/


This is a major release.

### New and noteworthy

* Updated to PMD 7.0.0
* Support for Eclipse 2024-03 added
* Support for Eclipse 2023-12 added
* Support for Eclipse 2023-03 removed
* Support for Eclipse 2022-12 removed

### Fixed Issues

* [#185](https://github.com/pmd/pmd-eclipse-plugin/pull/185): Bump ch.qos.logback:logback-classic from 1.2.3 to 1.2.13
* [#186](https://github.com/pmd/pmd-eclipse-plugin/pull/186): Support eclipse 2023-12
* [#187](https://github.com/pmd/pmd-eclipse-plugin/pull/187): Bump tycho from 3.0.4 to 4.0.4
* [#190](https://github.com/pmd/pmd-eclipse-plugin/pull/190): Support eclipse 2024-03

### API Changes

Due to the updated PMD version, there are a couple of incompatible changes, like changed packages.
For the details, see the [release notes of PMD](https://docs.pmd-code.org/pmd-doc-7.0.0/pmd_release_notes.html).

The following members have been removed, even though they have not been deprecated before:
* net.sourceforge.pmd.eclipse.ui.preferences.panelmanagers.Configuratio#EXCLUDED_RULE_PROPERTIES

The following deprecated members have been removed:
* net.sourceforge.pmd.eclipse.runtime.properties.impl.ProjectPropertiesImpl#getProjectRuleSets()
* net.sourceforge.pmd.eclipse.runtime.properties.impl.ProjectPropertiesImpl#setProjectRuleSets(RuleSets)
* net.sourceforge.pmd.eclipse.runtime.properties.IProjectProperties#getProjectRuleSets()
* net.sourceforge.pmd.eclipse.runtime.properties.IProjectProperties#setProjectRuleSets(RuleSets)
* net.sourceforge.pmd.eclipse.ui.properties.PMDPropertyPageBean#getProjectRuleSets()
* net.sourceforge.pmd.eclipse.ui.properties.PMDPropertyPageBean#setProjectRuleSets(RuleSets)
* net.sourceforge.pmd.eclipse.runtime.cmd.BaseVisitor#getRuleSets()
* net.sourceforge.pmd.eclipse.runtime.cmd.BaseVisitor#setRuleSets(RuleSets)
* net.sourceforge.pmd.eclipse.ui.properties.UpdateProjectPropertiesCmd#setProjectRuleSets(RuleSets)
* net.sourceforge.pmd.eclipse.plugin.PMDPlugin#ROOT_LOG_ID
* net.sourceforge.pmd.eclipse.plugin.PMDPlugin#setJavaClassLoader(PMDConfiguration, IProject)
* net.sourceforge.pmd.eclipse.plugin.PMDPlugin#getPluginFolder()
* net.sourceforge.pmd.eclipse.plugin.PMDPlugin#getOpenFiles()
* net.sourceforge.pmd.eclipse.plugin.PMDPlugin#getPriorityValues()
* net.sourceforge.pmd.eclipse.plugin.UISettings#createRuleMarkerIcons(Display)
* net.sourceforge.pmd.eclipse.plugin.UISettings#markerFilenameFor(RulePriority)
* net.sourceforge.pmd.eclipse.plugin.UISettings#relativeMarkerFilenameFor(RulePriority)
* net.sourceforge.pmd.eclipse.plugin.UISettings#reloadPriorities()
* net.sourceforge.pmd.eclipse.plugin.UISettings#markerImgDescriptorsByPriority()
* net.sourceforge.pmd.eclipse.plugin.UISettings#markerDescriptorFor(RulePriority)
* net.sourceforge.pmd.eclipse.plugin.UISettings#descriptionFor(RulePriority)
* net.sourceforge.pmd.eclipse.plugin.UISettings#descriptorFor(RulePriority)
* net.sourceforge.pmd.eclipse.plugin.UISettings#priorityFor(int)
* net.sourceforge.pmd.eclipse.plugin.UISettings#getPriorityLabels()
* net.sourceforge.pmd.eclipse.runtime.cmd.AbstractDefaultCommand#isJavaFile(IFile)
* net.sourceforge.pmd.eclipse.runtime.cmd.BaseVisitor#isUseTaskMarker()
* net.sourceforge.pmd.eclipse.runtime.cmd.BaseVisitor#setUseTaskMarker(boolean)
* net.sourceforge.pmd.eclipse.runtime.cmd.ReviewCodeCmd#setTaskMarker(boolean)
* net.sourceforge.pmd.eclipse.runtime.preferences.IPreferences#MAX_VIOLATIONS_PFPR_DEFAULT
* net.sourceforge.pmd.eclipse.runtime.preferences.IPreferences#getMaxViolationsPerFilePerRule()
* net.sourceforge.pmd.eclipse.runtime.preferences.IPreferences#setMaxViolationsPerFilePerRule(int)
* net.sourceforge.pmd.eclipse.runtime.properties.impl.ProjectPropertiesImpl#getResolvedRuleSetFile()
* net.sourceforge.pmd.eclipse.runtime.properties.IProjectProperties#getResolvedRuleSetFile()
* net.sourceforge.pmd.eclipse.ui.actions.RuleSetUtil#addExcludePatterns(RuleSet, Collection<String>)
* net.sourceforge.pmd.eclipse.ui.actions.RuleSetUtil#addExcludePatterns(RuleSet, Collection<String>, Collection<String>)
* net.sourceforge.pmd.eclipse.ui.actions.RuleSetUtil#setExcludePatterns(RuleSet, Collection<String>)
* net.sourceforge.pmd.eclipse.ui.actions.RuleSetUtil#addIncludePatterns(RuleSet, Collection<String>)
* net.sourceforge.pmd.eclipse.ui.actions.RuleSetUtil#addIncludePatterns(RuleSet, Collection<String>, Collection<String>)
* net.sourceforge.pmd.eclipse.ui.actions.RuleSetUtil#setIncludePatterns(RuleSet, Collection<String>)
* net.sourceforge.pmd.eclipse.ui.actions.RuleSetUtil#addRuleSetByReference(RuleSet, RuleSet, boolean)
* net.sourceforge.pmd.eclipse.ui.priority.PriorityDescriptor#getImageDescriptor()
* net.sourceforge.pmd.eclipse.ui.priority.PriorityDescriptor#getImage(Display)
* net.sourceforge.pmd.eclipse.ui.priority.PriorityDescriptor#getImage(Display, int)
* net.sourceforge.pmd.eclipse.ui.priority.PriorityDescriptor#refreshImages()
* net.sourceforge.pmd.eclipse.ui.priority.PriorityDescriptorCache#dumpTo(PrintStream)
* net.sourceforge.pmd.eclipse.ui.views.PriorityFilter#PriorityFilter()
* net.sourceforge.pmd.eclipse.ui.views.PriorityFilter#addPriorityToList(Integer)
* net.sourceforge.pmd.eclipse.ui.views.PriorityFilter#removePriorityFromList(Integer)
* net.sourceforge.pmd.eclipse.ui.views.PriorityFilter#setPriorityFilterListFromString(String, String)
* net.sourceforge.pmd.eclipse.ui.views.PriorityFilter#getPriorityFilterListAsString(String)
* net.sourceforge.pmd.eclipse.ui.views.PriorityFilter#getPriorityFilterList()
* net.sourceforge.pmd.eclipse.ui.views.PriorityFilter#setPriorityFilterList(List<Integer>)
* net.sourceforge.pmd.eclipse.ui.views.ViolationOverview#getPriorityFilterList()
* net.sourceforge.pmd.eclipse.ui.RuleLabelDecorator#reloadDecorators()
* net.sourceforge.pmd.eclipse.ui.ShapePainter#disposeAll()

The following deprecated classes have been removed:
* name.herlin.command.AbstractProcessableCommand
* name.herlin.command.Command
* name.herlin.command.CommandException
* name.herlin.command.CommandProcessor
* name.herlin.command.CommandProcessorStrategy
* name.herlin.command.DefaultCommandProcessor
* name.herlin.command.DefaultCommandProcessorStrategy
* name.herlin.command.Timer
* name.herlin.command.UnregisteredCommandException
* name.herlin.command.UnsetInputPropertiesException
* net.sourceforge.pmd.eclipse.plugin.EclipseUtil
* net.sourceforge.pmd.eclipse.ui.views.AbstractViolationLabelProvider
* net.sourceforge.pmd.eclipse.ui.preferences.RulePropertiesContentProvider
* net.sourceforge.pmd.eclipse.ui.preferences.RulePropertyLabelProvider (not previously deprecated, but unused)
* net.sourceforge.pmd.eclipse.ui.preferences.RuleProperty
* net.sourceforge.pmd.eclipse.util.PriorityUtil
* net.sourceforge.pmd.eclipse.util.IOUtil

