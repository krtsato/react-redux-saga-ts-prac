FROM node:13.5.0-alpine3.11

WORKDIR /container
COPY npm-install.sh .npmrc ./

RUN set -ox pipefail \
  && apk update \
  && apk add --no-cache vim zsh \
  && rm -rf /var/cache/apk/*s