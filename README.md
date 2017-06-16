# PMD Landing Page

The Jekyll theme used is [landing page jekyll theme](https://github.com/swcool/landing-page-theme).
It is based on [landing-page bootstrap theme ](http://startbootstrap.com/templates/landing-page/).

## Build the site locally

1.  Make sure, you exclude "pmd-5*" and "latest" in `_config.yml` to
    speed up local builds. Otherwise, generating the site could take
    very long, since all the files need to be copied.

2.  Execute once `bundler`. This will download and install jekyll
    (see `Gemfile`).

3.  Execute `bundle exec jekyll serve` and visit http://localhost:4000/
