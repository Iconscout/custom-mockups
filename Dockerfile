FROM registry.gitlab.com/iconscout/docker/frontend:latest

# Copy App Data
RUN mkdir -p /var/www/
WORKDIR /var/www/

ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_OPTIONS=--max_old_space_size=4096

ADD ./package.json /var/www/package.json
ADD ./package-lock.json /var/www/package-lock.json
RUN npm ci

ADD ./ ./
RUN npm run build

# CMD node --max_old_space_size=8000 /usr/local/bin/npm start
CMD npm run start

EXPOSE 80 443 43554
