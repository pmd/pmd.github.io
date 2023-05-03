#!/bin/bash

NODE_MODULES="node_modules"

JQUERY_PATH="${NODE_MODULES}/jquery"
JQUERY_VERSION="$(jq -r .version "${JQUERY_PATH}/package.json")"
JQUERY_FILE="js/jquery-${JQUERY_VERSION}.min.js"
cp "${JQUERY_PATH}/dist/jquery.min.js" "${JQUERY_FILE}"

BOOTSTRAP_PATH="${NODE_MODULES}/bootstrap"
BOOTSTRAP_VERSION="$(jq -r .version "${BOOTSTRAP_PATH}/package.json")"
BOOTSTRAP_FILE="js/bootstrap-${BOOTSTRAP_VERSION}.min.js"
BOOTSTRAP_CSS="css/bootstrap-${BOOTSTRAP_VERSION}.min.css"
cp "${BOOTSTRAP_PATH}/dist/js/bootstrap.min.js" "${BOOTSTRAP_FILE}"
cp "${BOOTSTRAP_PATH}/dist/css/bootstrap.min.css" "${BOOTSTRAP_CSS}"

JQUERY_UI_PATH="${NODE_MODULES}/jquery-ui"
JQUERY_UI_VERSION="$(jq -r .version "${JQUERY_UI_PATH}/package.json")"
JQUERY_UI_FILE="js/jquery-ui-${JQUERY_UI_VERSION}.min.js"
cp "${JQUERY_UI_PATH}/dist/jquery-ui.min.js" "${JQUERY_UI_FILE}"

FONTAWESOME_PATH="${NODE_MODULES}/font-awesome"
FONTAWESOME_VERSION="$(jq -r .version "${FONTAWESOME_PATH}/package.json")"
FONTAWESOME_CSS="css/font-awesome-${FONTAWESOME_VERSION}.min.css"
cp "${FONTAWESOME_PATH}/css/font-awesome.min.css" "${FONTAWESOME_CSS}"
cp "${FONTAWESOME_PATH}/fonts/"* "fonts/"

read -d '' JS_INCLUDE <<EOF
<!-- jQuery Version ${JQUERY_VERSION} -->
<script src="{{ "/${JQUERY_FILE}" | relativize_url }}"></script>

<!-- jQuery UI Version ${JQUERY_UI_VERSION} -->
<script src="{{ "/${JQUERY_UI_FILE}" | relativize_url }}"></script>

<!-- Bootstrap Core JavaScript ${BOOTSTRAP_VERSION} -->
<script src="{{ "/${BOOTSTRAP_FILE}" | relativize_url }}"></script>

<!-- Custom Theme JavaScript -->
<script src="{{ "/js/landing-page.js" | relativize_url }}"></script>
EOF

echo "${JS_INCLUDE}" > _includes/js.html


read -d '' CSS_INCLUDE <<EOF
    <!-- Bootstrap Core CSS -->
    <link href="{{ "/${BOOTSTRAP_CSS}" | relativize_url }}" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="{{ "/css/landing-page.css" | relativize_url }}" rel="stylesheet">
    <link href="{{ "/css/syntax.css" | relativize_url }}" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="{{ "/${FONTAWESOME_CSS}" | relativize_url }}" rel="stylesheet" type="text/css">
    <link href="{{ "/css/font-lato.css" | relativize_url }}" rel="stylesheet" type="text/css">
EOF

echo "${CSS_INCLUDE}" > _includes/css.html
