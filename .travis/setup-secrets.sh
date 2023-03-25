#!/usr/bin/env bash
set -e

source .travis/logger.sh

if [ "${TRAVIS_REPO_SLUG}" != "pmd/pmd.github.io" ] || [ "${TRAVIS_PULL_REQUEST}" != "false" ] || [ "${TRAVIS_SECURE_ENV_VARS}" != "true" ]; then
    echo "Not setting up secrets:"
    echo "  TRAVIS_REPO_SLUG=${TRAVIS_REPO_SLUG}"
    echo "  TRAVIS_PULL_REQUEST=${TRAVIS_PULL_REQUEST}"
    echo "  TRAVIS_SECURE_ENV_VARS=${TRAVIS_SECURE_ENV_VARS}"
    exit 0
fi

echo "Setting up secrets..."

mkdir -p "$HOME/.ssh"
chmod 700 "$HOME/.ssh"
openssl aes-256-cbc -K $encrypted_f95f2a86c367_key -iv $encrypted_f95f2a86c367_iv -in .travis/id_travis-pmd-github-io_rsa.enc -out "$HOME/.ssh/id_rsa" -d
chmod 600 "$HOME/.ssh/id_rsa"


echo "Setting up .ssh/known_hosts..."
#
# run locally:
# ssh-keyscan pmd-code.org | tee -a known_hosts
#
# verify fingerprints:
# ssh-keygen -F pmd-code.org -l -f known_hosts
# # Host pmd-code.org found: line 1 
# pmd-code.org ED25519 SHA256:nvkIAzZhYTxXqSU3DWvos83A0EocZ5dsxNkx1LoMZhg
# # Host pmd-code.org found: line 2 
# pmd-code.org RSA SHA256:/uKehVNumCNvJL8C5CziwV9KkUUxHfggq0C4GTrUhwg
# # Host pmd-code.org found: line 3 
# pmd-code.org ECDSA SHA256:6aD1r1XuIoc/zgBT3bt1S9L5ToyJzdQ9rrcMchnqiRA
#
# then add output of `ssh-keygen -F pmd-code.org -f known_hosts`
#
echo 'pmd-code.org ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDVsIeF6xU0oPb/bMbxG1nU1NDyBpR/cBEPZcm/PuJwdI9B0ydPHA6FysqAnt32fNFznC2SWisnWyY3iNsP3pa8RQJVwmnnv9OboGFlW2/61o3iRyydcpPbgl+ADdt8iU9fmMI7dC04UqgHGBoqOwVNna9VylTjp5709cK2qHnwU450F6YcOEiOKeZfJvV4PmpJCz/JcsUVqft6StviR31jKnqbnkZdP8qNoTbds6WmGKyXkhHdLSZE7X1CFQH28tk8XFqditX93ezeCiThFL7EleDexV/3+2+cs5878sDMUMzHS5KShTjkxzhHaodhtIEdNesinq/hOPbxAGkQ0FbD' >> $HOME/.ssh/known_hosts
