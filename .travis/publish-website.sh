#!/usr/bin/env bash
set -e

source .travis/logger.sh

PMD_CODE_SSH_USER=pmd
PMD_CODE_WEBSITE_PATH=/httpdocs/
PMD_7_SUBPATH=pmd7/
WEBSITE_ARCHIVE=pmd7-website.zip

#
# The website is built already by jekyll into _site.
# Then the folder _site is zipped into pmd7-website.zip.
# This file is copied to ssh://pmd@pmd-code.org/httpdocs/
# and then extracted into ssh://pmd@pmd-code.org/httpdocs/pmd7/
#
# The folder ssh://pmd@pmd-code.org/httpdocs/pmd7/ is available as
# https://pmd-code.org/pmd7/
#

function main() {
    if ! travis_isPush; then
        log_info "Not publishing site, since this is not a push!"
        exit 0
    fi

    bash .travis/setup-secrets.sh

    log_info "Zipping website..."
    cd _site
    zip -qr ../${WEBSITE_ARCHIVE} .
    cd ..
    ls -lh ${WEBSITE_ARCHIVE}

    log_info "Uploading website..."
    scp ${WEBSITE_ARCHIVE} ${PMD_CODE_SSH_USER}@pmd-code.org:${PMD_CODE_WEBSITE_PATH}
    ssh ${PMD_CODE_SSH_USER}@pmd-code.org "cd ${PMD_CODE_WEBSITE_PATH} && \
        rm -rf ${PMD_CODE_WEBSITE_PATH}/${PMD_7_SUBPATH} && \
        mkdir ${PMD_CODE_WEBSITE_PATH}/${PMD_7_SUBPATH} && \
        unzip -qo -d ${PMD_CODE_WEBSITE_PATH}/${PMD_7_SUBPATH} ${WEBSITE_ARCHIVE} && \
        rm ${WEBSITE_ARCHIVE}"

    log_info "Updated website: https://pmd-code.org/pmd7/"
}

function travis_isPush() {
    if [ "${TRAVIS_REPO_SLUG}" = "pmd/pmd.github.io" ] && [ "${TRAVIS_PULL_REQUEST}" = "false" ] && [ "${TRAVIS_SECURE_ENV_VARS}" = "true" ]; then
        return 0
    else
        return 1
    fi
}

main
