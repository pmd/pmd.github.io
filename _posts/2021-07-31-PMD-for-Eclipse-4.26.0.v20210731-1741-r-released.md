---
layout: post
title: PMD For Eclipse 4.26.0.v20210731-1741-r Released
---

A new PMD for Eclipse plugin version has been released.
It is available via the update site: https://pmd.github.io/pmd-eclipse-plugin-p2-site/


This is a minor release.

### New and noteworthy

*   Updated to PMD 6.37.0

### Fixed Issues

*   [#148](https://github.com/pmd/pmd-eclipse-plugin/issues/148): Eclipse nearly-consistently crashes on startup when workspace contains PMD enabled projects
*   [#150](https://github.com/pmd/pmd-eclipse-plugin/issues/150): Error executing command ReviewCode: java.util.regex.PatternSyntaxException: Illegal/unsupported escape sequence near index
*   [#153](https://github.com/pmd/pmd-eclipse-plugin/issues/153): Not properly disposed SWT resource

### API Changes

#### Deprecated for removal

*   `net.sourceforge.pmd.eclipse.plugin.EclipseUtil`
*   `net.sourceforge.pmd.eclipse.plugin.PMDPlugin.getPluginFolder()`
*   `net.sourceforge.pmd.eclipse.runtime.cmd.BaseVisitor.isUseTaskMarker()`
*   `net.sourceforge.pmd.eclipse.runtime.cmd.BaseVisitor.setUseTaskMarker(boolean)`
*   `net.sourceforge.pmd.eclipse.ui.preferences.br.FilterManager`
*   `net.sourceforge.pmd.eclipse.util.IOUtil`
*   `net.sourceforge.pmd.eclipse.ui.priority.PriorityDescriptor.refreshImages()`
*   All classes that couldn't be instantiated because they had a private constructor only
    are now also `final`.

