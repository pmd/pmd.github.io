---
layout: post
title: PMD For Eclipse 7.1.0.v20240426-0821-r Released
---

A new PMD for Eclipse plugin version has been released.
It is available via the update site: https://pmd.github.io/pmd-eclipse-plugin-p2-site/


This is a minor release.

### New and noteworthy
* Updated to PMD 7.1.0

### Fixed Issues
* [#191](https://github.com/pmd/pmd-eclipse-plugin/issues/191): Rule Configuration Pref Page - PropertyDescriptor cannot be cast to Comparable
* [#192](https://github.com/pmd/pmd-eclipse-plugin/pull/192): Add japicmp

### API Changes

#### Deprecations

The following classes have been deprecated for removal. Either they were not intended to be public API at all
or they were used to support the UI for rule configuration. With the switch to PMD 7.0.0, these editor
factories are not used anymore.

* `net.sourceforge.pmd.eclipse.ui.preferences.editors.AbstractEditorFactory`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.AbstractMultiValueEditorFactory`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.AbstractNumericEditorFactory`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.AbstractRealNumberEditor`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.BooleanEditorFactory`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.CharacterEditorFactory`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.DoubleEditorFactory`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.EnumerationEditorFactory`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.FilePicker`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.IntegerEditorFactory`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.MethodPicker`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.MultiEnumerationEditorFactory`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.MultiIntegerEditorFactory`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.MultiStringEditorFactory`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.RegexEditorFactory`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.StringEditorFactory`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.SWTUtil`
* `net.sourceforge.pmd.eclipse.ui.preferences.editors.TypeText`

The following members have been deprecated for removal:

* `net.sourceforge.pmd.eclipse.ui.dialogs.NewPropertyDialog#NewPropertyDialog(Shell, Map<Class<?>, EditorFactory<?>>, PropertySource, ValueChangeListener)`
* `net.sourceforge.pmd.eclipse.ui.dialogs.NewPropertyDialog#NewPropertyDialog(Shell, Map<Class<?>, EditorFactory<?>>, Rule, PropertyDescriptor<?>, ValueChangeListener)`
* `net.sourceforge.pmd.eclipse.ui.dialogs.NewPropertyDialog#withOnly(Map<Class<?>, EditorFactory<?>>, Class<?>[])`
* `net.sourceforge.pmd.eclipse.ui.preferences.panelmanagers.AbstractRulePanelManager.show(TypeText, Class<?>)`
* `net.sourceforge.pmd.eclipse.ui.preferences.panelmanagers.FormArranger#FormArranger(Composite, Map<Class<?>, EditorFactory<?>>, ValueChangeListener, SizeChangeListener)`
* `net.sourceforge.pmd.eclipse.ui.preferences.panelmanagers.PerRulePropertyPanelManager#EDITOR_FACTORIES_BY_PROPERTY_TYPE`

See the javadoc for more info and any possible alternatives if available.

