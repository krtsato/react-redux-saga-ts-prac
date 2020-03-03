FROM node:13.8.0-alpine3.11

WORKDIR /proj-cont

# If you want to share npm packages' version,
#
## <Dockerfile here>
## COPY pakage*.json not npm-install.sh.
## RUN set -ox pipefail \
##   && ... \
##   && npm install <- add
## CMD  ["node_modules/.bin/webpack-dev-server", "--progress"]
##
## <docker-compose.yml>
##   frontend:
##     volumes:
##       - .:/proj-cont
##       - /proj-cont/node_modules <- add
#
# In this case, when you have to edit code, execute "npm install" at the host side
# to generate node_modules which bring to IDE support.

COPY npm-install.sh .npmrc ./

RUN set -ox pipefail \
  && apk update \
  && apk add --no-cache vim zsh \
  && rm -rf /var/cache/apk/*s

CMD ["./npm-install.sh"]
