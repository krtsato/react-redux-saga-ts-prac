FROM node:13.8.0-alpine3.11

WORKDIR /proj-cont

COPY npm-setup.sh webpack-setup.sh .npmrc ./

RUN set -ox pipefail \
  && apk update \
  && apk add --no-cache vim zsh \
  && rm -rf /var/cache/apk/*s

CMD ["./npm-setup.sh"]
