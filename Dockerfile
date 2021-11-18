################################
# Stage: Builder
################################
FROM node:14-alpine as builder

ENV NODE_ENV=development
ENV NODE_OPTIONS=--max_old_space_size=4096

RUN apk --update --no-cache add \
    build-base \
    git \
    yarn

RUN mkdir /middleware
WORKDIR /middleware

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --non-interactive

COPY . /middleware
WORKDIR /middleware

RUN mkdir -p bin
RUN cp ./node_modules/laboperator-middleware-development/docker-entrypoint.sh ./
RUN cp ./node_modules/laboperator-middleware-development/bin/server ./bin/server

RUN yarn laboperator-middleware compile

ENV NODE_ENV=production
RUN yarn install --frozen-lockfile --non-interactive

################################
# Stage: Final (production/test)
################################
FROM node:14-alpine as final

ENV NODE_ENV=production

# https://nodejs.org/api/cli.html#cli_node_extra_ca_certs_file
ENV NODE_EXTRA_CA_CERTS=/etc/ssl/certs/ca-certificates.crt

RUN apk --update --no-cache add \
    bash \
    ca-certificates \
 && rm -rf /var/lib/apt/lists/* \
 && rm -rf /var/cache/apk/*

COPY --from=Builder /middleware /middleware

WORKDIR /middleware

ENTRYPOINT ["sh", "docker-entrypoint.sh"]
CMD ["./bin/server"]
