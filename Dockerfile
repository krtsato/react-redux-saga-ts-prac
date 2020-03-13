FROM node:13.8.0-alpine3.11

COPY .npmrc ~/

WORKDIR /proj-cont

RUN set -ox pipefail \
  && apk update \
  && apk add --no-cache vim zsh \
  && rm -rf /var/cache/apk/*s

CMD ["./npm-install.sh"]
