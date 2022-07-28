---
layout: post
title: PMD User Survey Results
---

Over the last 5 months, we conducted our first survey. Many thanks to all who participated!

Here are the summarized highlights we got from 70 results: Over 80% of the participants use PMD for proprietary
projects at work. Also, many use it for private projects (56%) and of course for open source projects (39%).

The most used way to execute PMD is the maven-pmd-plugin (45%) followed by the CLI interface (38%). Many Apex
developers seem to enjoy the Apex PMD VS Code plugin (28% of the participants). Gradle is used by 25% and the
pretty new GitHub Action is used by 7%.

The IDE plugins, which are available for quite a long time, don't seem to be used that often in comparison to the
build plugins.

Two fifths of the participants also use CPD, our copy-paste detection.

When looking at the used programming languages, we have a clear result: Most participants analyze Java code
with PMD (67%), but there are also many Apex (33%) and Visualforce (19%) users. Interesting to see is that XML
is used as often as JavaScript (16%).

Keep in mind that this survey with 72 answers is in no way representative and just gives a small snapshot.

<img src="/img/2022-07-28-PMD-User-Survey.png" title="What programming language do you analyze with PMD?">

Being able to extend the functionality of PMD with custom rules is an important feature: Almost half of the
participants use custom rules (49%).

We also got a lot of valuable feedback on how to improve PMD: E.g. false positives, adding new Java rules is complex,
the API is not quite useful, better report formats (like interactive html), rules supporting java 8+ features,
fix suggestions and quick fix support. This will help us prioritize features for upcoming releases,
and also for PMD 7.

Here is the detailed survey result:
<https://docs.google.com/forms/d/1M_lDmNp1sOH97JpARNDmoAXHOqyMkQM4x2lholalT5E/viewanalytics>

Thanks again for all your answers and feedback!
